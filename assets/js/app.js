"use strict"

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

// drop menu
const toggleBtn = document.querySelector(".menu-bar")

toggleBtn.addEventListener("click", function () {
	document.querySelector(".header-dropmenu").classList.toggle("active")
})

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
		// slidesPerView: 1,
		spaceBetween: 12,
		loop: true,
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
