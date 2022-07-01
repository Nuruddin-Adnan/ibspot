"use strict"

// header menu show on hover
function menuShowOnHover(){
	const mainMenuCollapse = document.querySelector(".mainMenu.collapse");
	mainMenuCollapse.classList.add("show");
}

function menuHideOnblur(){
	const mainMenuCollapse = document.querySelector(".mainMenu.collapse");
	mainMenuCollapse.classList.remove("show");
}

// home mainMenu hide on mobile and tablet
if (window.matchMedia("(max-width: 991px)").matches) {
	if(document.querySelector(".homepage-header")){
		let element = document.querySelector(".homepage-header .mainMenu.collapse");
		element.classList.remove("show");
	}
} 

// submenu close/open on click
if(document.querySelector(".menuCard")){
	document.querySelectorAll(".menuCard").forEach(li => {
		li.addEventListener("click", function(){
			this.classList.toggle("active")
			let submenu = li.children[1];
			submenu.classList.toggle("d-block")
		})
	})
}


// category menu show on mobile device
function categoryMenuToggle(){
	const element = document.querySelector(".category-menu");
	console.log(element);
	element.classList.toggle("d-flex");
}


document.querySelectorAll("#categoryMenu").forEach((item) =>
	item.addEventListener("click", function (event) {
		event.stopPropagation()
	}),
)



const d = new Date()
let year = d.getFullYear()
document.getElementById("year").innerHTML = year

var navbar = document.querySelector(".header-top")
if (navbar) {
	window.onscroll = function () {
		myFunction()
	}

	// Get the navbar
	// Get the offset position of the navbar
	var sticky = navbar.offsetTop

	// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
		if (window.pageYOffset >= 120) {
			navbar.classList.add("sticky")
		} else {
			navbar.classList.remove("sticky")
		}
	}
}



// inc-dec counter
// Select increment and decrement buttons
const incrementCount = document.getElementById("plus")
const decrementCount = document.getElementById("minus")

if (document.querySelector(".quantity")) {
	// Select total count
	const totalCount = document.getElementById("total-count")

	// Variable to track count
	var count = 0

	// Display initial count value
	totalCount.innerHTML = count

	// Function to increment count
	const handleIncrement = () => {
		count++
		totalCount.innerHTML = count
	}

	// Function to decrement count
	const handleDecrement = () => {
		count--
		totalCount.innerHTML = count
	}

	// Add click event to buttons
	incrementCount.addEventListener("click", handleIncrement)
	decrementCount.addEventListener("click", handleDecrement)
}

// Sliders

if(document.querySelector(".home-banner-slider")){
	var swiper = new Swiper(".home-banner-slider", {
		slidesPerView: 1,
		loop: true,
		effect: 'fade',
		fadeEffect: { crossFade: true },
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
	})
}

if (document.querySelector(".product-slider")) {
	var swiper = new Swiper(".product-slider", {
		slidesPerView: 1,
		spaceBetween: 12,
		loop: true,
		autoplay: {
			delay: 1600,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 36,
			},
		},
	})
}

if (document.querySelector(".top-trending")) {
	let swiper = new Swiper(".top-trending", {
		spaceBetween: 12,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 36,
			},
		},
	})
}

if (document.querySelector(".offer-slider")) {
	var swiper = new Swiper(".offer-slider", {
		slidesPerView: 1,
		spaceBetween: 12,
		loop: true,
		autoplay: {
			delay: 1600,
			disableOnInteraction: false,
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 24,
			},
		},
	})
}

if (document.querySelector(".brand-slider")) {
	var swiper = new Swiper(".brand-slider", {
		slidesPerView: 1,
		spaceBetween: 12,
		loop: true,
		autoplay: {
			delay: 1600,
			disableOnInteraction: false,
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 5,
			},
			1200: {
				slidesPerView: 7,
			},
		},
	})
}

var swiper = new Swiper(".mySwiper", {
	spaceBetween: 12,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
	breakpoints: {
		575: {
			spaceBetween: 18,
			slidesPerView: 5,
		},
	},
})
var swiper2 = new Swiper(".mySwiper2", {
	spaceBetween: 10,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: swiper,
	},
})


// cart sticky bottom
let cartStickyBottom = document.querySelector(".cart-sticky-bottom");
// Back to top
let topButton = document.getElementById("back-to-top");
let footer = document.querySelector(".footer");

if (cartStickyBottom) {
	// Get the cartStickyBottom
	window.onscroll = function () {
		cartStickyBottomFunction();
		checkVisible(footer);
	}

	// Add the sticky style to the cartStickyBottom when you reach its scroll position. Remove "sticky style" when you leave the scroll position
	// Back to Top button show hide
	function cartStickyBottomFunction() {
		if (window.pageYOffset >= 300 && checkVisible(footer) == false) {
			cartStickyBottom.style.transform = "translateY(0)";
			topButton.classList.add("d-block");
			topButton.classList.remove("d-none");
		} else {
			cartStickyBottom.style.transform = "translateY(100%)";
			topButton.classList.add("d-none");
			topButton.classList.remove("d-block");
		}
	}

	// check element is visible or not. This function returen true or false
	function checkVisible(elm) {
		var rect = elm.getBoundingClientRect();
		var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
		return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
	}

	
}