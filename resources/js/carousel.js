const cards = document.querySelectorAll('.card');
const btnPrev = document.querySelector('.left-btn');
const btnNext = document.querySelector('.right-btn');
const bullets = document.querySelectorAll('.bullet');

let cardIndex = 0;

function slide(n) {
	if (cardIndex + n < 0 || cardIndex >= cards.length) return;
	cardIndex += n;
	update();
}

function toCard(n) {
	cardIndex = n;
	update();
}

function update() {
	btnPrev.classList.toggle('disabled', cardIndex <= 1);
	btnNext.classList.toggle('disabled', cardIndex >= cards.length - 1);
	btnPrev.href = `#${cardIndex}`;
	btnNext.href = `#${cardIndex}`;
	if (cardIndex <= 0) {
		btnPrev.inert = true;
	} else {
		btnPrev.inert = false;
	}
	if (cardIndex >= cards.length - 1) {
		btnNext.inert = true;
	} else {
		btnNext.inert = false;
	}

	let active = document.querySelector('.active');
	active.classList.remove('active');
	bullets[cardIndex].classList.add('active');
}

update();
