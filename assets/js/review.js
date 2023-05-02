//* Review

const reviewCards = document.querySelectorAll("#review .card");
const rightArrow = document.querySelector("#review .rightArrow");
const leftArrow = document.querySelector("#review .leftArrow");

function init() {
	let currentCategory = 'firstGroup';
	let currentIndex = 0;
	if (window.innerWidth > 900) {
		function showCards() {
			reviewCards.forEach((card, index) => {
				if (currentCategory === 'firstGroup' && index >= currentIndex && index < currentIndex + 3) {
					card.style.display = 'block';
				}
				else if (currentCategory === 'secondGroup' && index >= currentIndex && index < currentIndex + 3) {
					card.style.display = 'block';
				}
				else if (currentCategory === 'thirdGroup' && index >= currentIndex) {
					card.style.display = 'block';
				} else {
					card.style.display = 'none';
				}

				if (currentIndex === reviewCards.length - 3 || currentCategory === 'thirdGroup') {
					rightArrow.disabled = true;
				} else {
					rightArrow.disabled = false;
				}
				if (currentIndex === 0 || currentCategory === 'firstGroup') {
					leftArrow.disabled = true;
				} else {
					leftArrow.disabled = false;
				}
			});
		}
		rightArrow.addEventListener('click', () => {
			if (currentIndex < reviewCards.length - 3) { //چون دیگه دسته اول نیست دکمه چپ فعال باشه
				leftArrow.style.color = "var(--color-text-primary)";
				currentIndex += 3;
				if (currentCategory === 'firstGroup') {
					currentCategory = 'secondGroup';
				} else if (currentCategory === 'secondGroup') {
					currentCategory = 'thirdGroup';
					rightArrow.disabled = true;
					rightArrow.style.color = "var(--color-text-secondary)"; //  به دسته آخر رسید دکمه راست غیرفعال بشه
				}
				showCards();
			}
		});
		leftArrow.style.color = "var(--color-text-secondary)";

		leftArrow.addEventListener('click', () => {
			if (currentIndex >= 0) {//اگه زدیم عقب و دسته اول نبود دکمه راست و چپ فعال باشه
				leftArrow.style.color = "var(--color-text-primary)";
				rightArrow.style.color = "var(--color-text-primary)";
				currentIndex -= 3;
				if (currentCategory === 'thirdGroup') {
					currentCategory = 'secondGroup';
					rightArrow.disabled = false;
				} else if (currentCategory === 'secondGroup') {
					currentCategory = 'firstGroup';
					leftArrow.disabled = true;//  اگه زدیم عقب برگشت به دسته اول دکمه چپ غیر فعال بشه
					leftArrow.style.color = "var(--color-text-secondary)";
				}
				showCards();
			}
		});
	}

	else {
		currentIndex = 0;
		showCards(currentIndex)
		function showCards() {
			reviewCards.forEach((card, index) => {
				if (index === currentIndex) {
					card.style.display = 'block';
					console.log(index);
				} else {
					card.style.display = 'none';
				}
			});
		}

		rightArrow.addEventListener('click', () => {
			if (currentIndex < reviewCards.length - 1) {
				currentIndex += 1;
				rightArrow.disabled = true;
				showCards();
			}
		});

		leftArrow.addEventListener('click', () => {
			if (currentIndex > 0) {
				currentIndex -= 1;
				rightArrow.disabled = false;
				showCards();
			}
		});
	}
}
init();










