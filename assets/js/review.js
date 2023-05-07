// * Review

const reviewCards = document.querySelectorAll("#review .cards");
const rightArrow = document.querySelector("#review .rightArrow");
const leftArrow = document.querySelector("#review .leftArrow");
const articleCards = document.querySelectorAll("#review .cards .card");
let currentCard = 0; //کارت جاری 
let maxCards = 3; //  حداکثز کارتی که باید در صفحه نمایش داده بشه

function showCards() {
	articleCards.forEach((card, index) => {
		// اگه از صفر بزرگتر و از حداکثر کوجکتر بود نمایش بده در غیر اینصورت نمایش نده 
		if (index >= currentCard && index < currentCard + maxCards) {
			card.style.display = 'block';
		}
		else {
			card.style.display = 'none';
		}
	});

	// اگه ایندکس بکی از کارتهای جاری بعلاوه سه از تعداد کل کارتها بیشتر بود دکمه بعدی خاموش بشه
	// Enable and disable the first and last button
	if (currentCard + maxCards >= articleCards.length) {
		rightArrow.disabled = true;
		rightArrow.style.color = "var(--color-text-secondary)";
	} else {
		rightArrow.disabled = false;
		leftArrow.style.color = "var(--color-text-inverted)";
		rightArrow.style.color = "var(--color-text-inverted)";
	}
	//  اگه ایندکس یکی از کارت جاری صفر یا کوچکتر یود دکمه قبلی خاموش بشه 
	if (currentCard <= 0) {
		leftArrow.disabled = true;
		leftArrow.style.color = "var(--color-text-secondary)";
	} else {
		leftArrow.disabled = false;
	}
}
showCards();

// اگه ایندکس بکی از کارتهای جاری بعلاوه سه از تعداد کل کارتها کمتر بود ایندکس کارت جاری را بعلاوه سه کن برو جلو
// Go to the next page by clicking on the rightArrow
rightArrow.addEventListener('click', () => {
	if (currentCard + maxCards < articleCards.length) {
		currentCard += maxCards;
		showCards();
	}
	// Entering the card with animation from the right
	articleCards.forEach((card) => {
		card.classList.remove('cardVersa');
	})
});

// اگه ایندکس کارت جاری از صفر بزرگتر بود ایندکس را منهای سه کن برگرد عقب
// Go to the previous page by clicking on the leftArrow
leftArrow.addEventListener('click', () => {
	if (currentCard > 0) {
		currentCard -= maxCards;
		showCards();
	}
	// Entering the card with animation from the left
	articleCards.forEach((card) => {
		card.classList.add('cardVersa');
	})
});

// از 900 کوجکتر یه کارت نمایش بده و کارت جاری اولین کارت با ایندکس 0 باشه
// When Windows<=900 px
function handleResize() {
	if (window.innerWidth <= 900) {
		maxCards = 1;
		currentCard = 0;
	} else {
		maxCards = 3;
		currentCard = 0;
	}
	showCards();
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);