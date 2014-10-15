var box;

function changeMonitor() {
	var val = box.value;
	console.log(val);
	setStore("prefix", val);
}

function getStore(key, def) {
	chrome.runtime.sendMessage({ m: "get", k: key, default: def }, function(response) { box.value = response.data; });
}

function setStore(key, data) {
	chrome.runtime.sendMessage({ m: "set", k: key, d: data }, function(response){ });
}

window.onload = function() {
	box = document.getElementById("prefix")
	box.value = getStore("prefix", "www");
	// box.addEventListener("keyup", changeMonitor());
	// box.onKeyUp = "changeMonitor()";
	$('#prefix').keyup(changeMonitor);
}
