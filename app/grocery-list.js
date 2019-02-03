function load(url, cb) {
	var xhr = new XMLHttpRequest();
  
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			cb(xhr.response);
		}
	}
  
	xhr.open('GET', url, true);
	xhr.send('');
}

function onload() {
	alert("yay");
}

window.onload = onload;