var np_count = 0;
var prefix;

function np_checker() {
	chrome.runtime.sendMessage({ m: "get", k: "prefix", default: "www" }, function(response) { prefix = response.data; });
	var old_count = np_count;
	var anchors = document.getElementsByTagName("a");
	for (var i = 0; i < anchors.length; i++) {
		var a = anchors[i]
		var o = a.href;
		var n = o.replace("np.", prefix + ".");
		if (o != n) {
			// console.log("Changing \"" + o + "\" to \"" + n);
			anchors[i].href = anchors[i].href.replace("np.", "www.");
			np_count++;
		}
	}
	var new_count = np_count;
	if ( new_count != old_count ) {
		console.log("RP is up to " + np_count + " changes in this tab!");
	}
	
}

setInterval( "np_checker()", 1500 );

function getStore(key, def) {
	
}
