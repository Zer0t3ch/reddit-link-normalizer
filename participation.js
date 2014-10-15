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
		if (localStorage[k] == undefined)
			localStorage[k] = request.default;
		sendResponse({ data: localStorage[k] });
	}
	else if (m == "set")
		localStorage[k] = request.d;
	else
		sendResponse({ });
}

chrome.tabs.onUpdated.addListener(isReddit);
chrome.tabs.onHighlighted.addListener(isReddit);

chrome.runtime.onMessage.addListener(takeCall);
