var startTime = function() {
	today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	var ms = today.getMilliseconds();

	m = checkTime(m);
	s = checkTime(s);	
	
	if (ms <= 9) {
		ms = "00" + ms;
	} else if (ms <= 99) {
		ms = "0" + ms;
	}

	document.getElementById("clock").innerHTML = h + ":" + m + ":" + s + ":" + ms;
	var t = setTimeout(startTime,1);


}

// add zero to minutes and seconds when less than 10


function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
		return i;
};
