const slides = document.querySelectorAll('.slider-card'),
	prev = document.querySelector('.prev'),
	next = document.querySelector('.next'),
	wrapper = document.querySelector('.slider'),
	field = document.querySelector('.wrapper'),
	width = window.getComputedStyle(wrapper).width;

console.log(width);
let offset = 0;

field.style.width = 100 * slides.length + '%';

slides.forEach(slide => {
	slide.style.width = width + 'px';
})

next.addEventListener('click', () => {
	if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
		offset = 0;
	} else {
		offset += +width.slice(0, width.length - 2);
	}

	field.style.transform = `translateX(-${offset}px)`;
})

prev.addEventListener('click', () => {
	if (offset == 0) {
		offset = +width.slice(0, width.length - 2) * (slides.length - 1);
	} else {
		offset -= +width.slice(0, width.length - 2);
	}

	field.style.transform = `translateX(-${offset}px)`;
})