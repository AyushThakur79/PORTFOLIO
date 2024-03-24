// const scroll = new LocomotiveScroll({
// 	el: document.querySelector("main"),
// 	smooth: true,
// });

//  lenis for smmoth scrolling

const lenis = new Lenis();

lenis.on("scroll", (e) => {
	console.log(e);
});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ends
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
z;

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
	const aboutSection = document.querySelector("#about");
	aboutSection.scrollIntoView({ behavior: "smooth" });
	menu.style.right = "-100%";
});

// Scroll to the Work section
workLink.addEventListener("click", function (event) {
	event.preventDefault();
	const workSection = document.querySelector("#work");
	workSection.scrollIntoView({ behavior: "smooth" });
	menu.style.right = "-100%";
});

// Scroll to the Reach Out section
reachout.addEventListener("click", function (event) {
	event.preventDefault();
	const reachSection = document.querySelector("#reach");
	reachSection.scrollIntoView({ behavior: "smooth" });
	menu.style.right = "-100%";
});

// Scroll to the Top
topScrollLink.addEventListener("click", function (event) {
	event.preventDefault();
	window.scrollTo({ top: 0, behavior: "smooth" });
});

// Alert

function submitForm(event) {
	event.preventDefault();

	setTimeout(function () {
		alert("Thank you for your submission!");
	}, 1000);
}

// hide cursor
const cursor = document.querySelector(".cursor");

function hideCursor() {
	cursor.style.display = "none";
}

function showCursor() {
	cursor.style.display = "block";
}

if (window.innerWidth < 768) {
	hideCursor();
} else {
	showCursor();
}

window.addEventListener("resize", function () {
	if (window.innerWidth < 768) {
		hideCursor();
	} else {
		showCursor();
	}
});
