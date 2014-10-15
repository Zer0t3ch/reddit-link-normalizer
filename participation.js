var count = 0;

function isReddit(tabId, changeInfo, tab) {
	if (tab.url.indexOf("reddit.com") != -1) {
		chrome.pageAction.show(tabId);
		// console.log("Reddit page loaded");
		chrome.tabs.executeScript(tabId, { "file": "takeout.js" }, function() { });
	}
}

function takeCall(request, sender, sendResponse) {
	var m = request.m;
	var k = request.k;
	
	if (m == "get") {
		if (localStorage[k] == undefined) {
			localStorage[k] = request.default;
		}
		sendResponse({ data: localStorage[k] });
		console.log("responding with key " + localStorage[k]);
	}
	else if (m == "set")
		localStorage[k] = request.d;
	else if (m == "setSync") {
		chrome.storage.sync.set({ k : request.d }, function(){ });
		sendResponse("set key `" + k + "` to `" + request.d + "`");
	}
	else if (m == "getSync") {
		console.debug('getting');
		chrome.storage.sync.get(null, function(items) {
			if (items[k] != undefined) {
				console.debug("has item `" + k + "` as `" + items[k] + "`");
				sendResponse( items[k] );
			} else {
				console.debug("Has no item `" + k + "`");
				chrome.storage.sync.set({ k : request.default }, function() { });
				sendResponse( "www" );
			}
		});
	}
	else
		sendResponse({ data : "unknown key" });
}

chrome.tabs.onUpdated.addListener(isReddit);
chrome.tabs.onHighlighted.addListener(isReddit);

chrome.runtime.onMessage.addListener(takeCall);
