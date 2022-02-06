const menuBtn = document.querySelector(".menu__btn")
const menuItems = document.querySelector(".menu__links")
const welcomeText = document.querySelector(".welcome__text")
const menuLink = document.querySelectorAll("menu__links__item")
const cards = document.querySelectorAll(".card")

let welcomeTextValue = "Cześć. Nazywam się Patryk i tworzę strony internetowe."
let timeout
let index = 0
let speed = 60

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.target.classList.toggle("appear", entry.isIntersecting)
	})
})

cards.forEach(card => {
	observer.observe(card)
})

const showMenu = () => {
	menuItems.classList.toggle("show__menu")
}

const hideMenu = () => {
	menuItems.classList.toggle("show__menu")
}

const writingAnimation = () => {
	welcomeText.textContent = welcomeTextValue.slice(0, index)
	index++
	if (index > welcomeText.length) return
	timeout = setTimeout(writingAnimation, speed)
}

menuBtn.addEventListener("click", showMenu)
menuItems.addEventListener("click", showMenu)

writingAnimation()
