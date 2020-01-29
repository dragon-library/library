const $phone = document.querySelector("phone");
const $content = document.querySelector(".screen > .content");

var $time = document.getElementById("time");
var $date = document.getElementById("date");

showtime();
setInterval( showtime, 1000 );

// http://stackoverflow.com/a/1480137
const cumulativeOffset = element => {
	var top = 0,
		left = 0;
	do {
		top += element.offsetTop || 0;
		left += element.offsetLeft || 0;
		element = element.offsetParent;
	} while (element);

	return {
		top: top,
		left: left
	};
};

document.onmousemove = event => {
	const e = event || window.event;
	var c = cumulativeOffset($phone);
	const x = (e.pageX - c.left - 367 / 2) * -1 / 111;
	const y = (e.pageY - c.top - 667 / 2) * -1 / 111;

	const matrix = [
		[1, 0, 0, x * 0.00001],
		[0, 1, 0, -y * 0.000001],
		[0, 0, 1, 0],
		[0, 0, 0, 1]
	];

	$phone.style.transform = `translate(-50%, -50%) matrix3d(${matrix.toString()})`;
	$content.style.backgroundPosition = `${Math.floor(7+x * 7)}%`
																		+` ${Math.floor(y * 7)}%`;
};

function zeroPad(n) {	return (n > 9 ? '' : '0') + n;	}
function showtime() {
	var d = new Date();
	var months = ["January", "February", "March",
								"April", "May", "June", "July",
								"August", "September", "October", 
								"November", "December"];
	var days = ["Sunday", "Monday", "Tuesday", 
							"Wednesday", "Thursday", "Friday", 
							"Saturday"];
	$time.innerText = zeroPad(d.getHours()) + ':' + zeroPad(d.getMinutes());
	$date.innerText = days[d.getDay()] + ", " + d.getDate() 
											+ " " + months[d.getMonth()];
}