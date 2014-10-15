var np_count = 0;
var prefix;

function checker() {
	chrome.runtime.sendMessage({ m: "get", k: "prefix", default: "www.reddit.com" }, function(response) { np_checker(response.data); });
}

function np_checker(pre) {
	// console.debug(pre);
	var old_count = np_count;
	var anchors = document.getElementsByTagName("a");
	for (var i = 0; i < anchors.length; i++) {
		var a = anchors[i]
		var o = a.href;
		var n = o.replace("np.reddit.com", pre);
		if (o != n) {
			// console.log("Changing \"" + o + "\" to \"" + n);
			console.log({ o:o, n:n, a:a });
			a.href = n;
			np_count++;
		}
	}
	var new_count = np_count;
	if ( new_count != old_count ) {
		console.log("RP is up to " + np_count + " changes in this tab!");
	}
	
}

setInterval( "checker()", 1500 );
