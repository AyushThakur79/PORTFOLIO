const scroll = new LocomotiveScroll({
	el: document.querySelector("main"),
	smooth: true,
});

// AOS.init();

window.onload = function () {
	setTimeout(function () {
		window.scrollTo(0, 0);
	}, 100);
};

// Cursor
var crsr = document.querySelector(".cursor");
document.addEventListener("mousemove", function (dets) {
	gsap.to(crsr, {
		x: dets.x,
		y: dets.y,
	});
});

// loader
var loader = document.querySelector(".loader");
setTimeout(function () {
	loader.style.top = "-100%";
}, 3000);

// time - Desktop
function updateTime() {
	fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
		.then((response) => response.json())
		.then((data) => {
			var dateTime = new Date(data.datetime);
			var hours = dateTime.getHours();
			var minutes = dateTime.getMinutes();
			var ampm = hours >= 12 ? "PM" : "AM";
			hours = hours % 12;
			hours = hours ? hours : 12; // handle midnight
			minutes = minutes < 10 ? "0" + minutes : minutes;
			var timeString = hours + ":" + minutes + " " + ampm + " GMT+1";
			document.getElementById("time").textContent = timeString;
		})
		.catch((error) => console.error("Error fetching time:", error));
}

updateTime();
setInterval(updateTime, 60000);

// time - Mobile
function updateTime() {
	fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
		.then((response) => response.json())
		.then((data) => {
			var dateTime = new Date(data.datetime);
			var hours = dateTime.getHours();
			var minutes = dateTime.getMinutes();
			var ampm = hours >= 12 ? "PM" : "AM";
			hours = hours % 12;
			hours = hours ? hours : 12; // handle midnight
			minutes = minutes < 10 ? "0" + minutes : minutes;
			var timeString = hours + ":" + minutes + " " + ampm + " GMT+1";
			document.getElementById("time2").textContent = timeString;
		})
		.catch((error) => console.error("Error fetching time:", error));
}

updateTime();
setInterval(updateTime, 60000);

// menu
let menuBtn = document.querySelector(".right");
let menu = document.querySelector(".menu");
let cut = document.querySelector(".cross");
let line = document.querySelector(".right");
let flag = 0;

menuBtn.addEventListener("click", function () {
	if (flag == 0) {
		menu.style.right = "0%";
		flag = 1;
	} else {
		menu.style.right = "-100%";
		flag = 0;
	}
});

cut.addEventListener("click", function () {
	menu.style.right = "-100%";
	flag = 0;
});

cut.addEventListener("mouseenter", function () {
	crsr.style.display = "none";
});

cut.addEventListener("mouseleave", function () {
	crsr.style.display = "block";
});

line.addEventListener("mouseenter", function () {
	crsr.style.display = "none";
});

line.addEventListener("mouseleave", function () {
	crsr.style.display = "block";
});

// Cursor size increases
var about = document.querySelector(".page2");
var reach = document.querySelector(".text-content4");

// For Whole About Section
about.addEventListener("mouseenter", function () {
	crsr.style.height = "97px";
	crsr.style.width = "97px";
	crsr.style.borderRadius = "50%";
	crsr.style.transition = "all 0.2s ease";
});

about.addEventListener("mouseleave", function () {
	crsr.style.height = "7px";
	crsr.style.width = "7px";
	crsr.style.borderRadius = "50%";
	crsr.style.transition = "all 0.2s ease";
});

// For Reach Out Headine
reach.addEventListener("mouseenter", function () {
	crsr.style.height = "207px";
	crsr.style.width = "207px";
	crsr.style.borderRadius = "50%";
	crsr.style.transition = "all 0.2s ease";
});

reach.addEventListener("mouseleave", function () {
	crsr.style.height = "7px";
	crsr.style.width = "7px";
	crsr.style.borderRadius = "50%";
	crsr.style.transition = "all 0.2s ease";
});

// Navigate
const aboutLink = document.querySelector('h2 > a[href="#about"]');
const workLink = document.querySelector('h2 > a[href="#work"]');
const reachout = document.querySelector('h2 > a[href="#reach"]');
const topScrollLink = document.querySelector("#topScroll");

// Scroll to the About section
aboutLink.addEventListener("click", function (event) {
	event.preventDefault();
	scroll.scrollTo("#about");
	menu.style.right = "-100%";
});

// Scroll to the Work section
workLink.addEventListener("click", function (event) {
	event.preventDefault();
	scroll.scrollTo("#work");
	menu.style.right = "-100%";
});

// Scroll to the Work section
reachout.addEventListener("click", function (event) {
	event.preventDefault();
	scroll.scrollTo("#reach");
	menu.style.right = "-100%";
});

// Scroll to the Top
topScrollLink.addEventListener("click", function (event) {
	event.preventDefault();
	scroll.scrollTo("top");
});

// Alert

function submitForm(event) {
	event.preventDefault();

	setTimeout(function () {
		alert("Thank you for your submission!");
	}, 1000);
}
