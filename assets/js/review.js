//* Review

const categories = document.querySelectorAll("#review .category");
const rightArrow = document.querySelector("#review .rightArrow")
const leftArrow = document.querySelector("#review .leftArrow")
let currentCategory = 0;

function showCategory(currentActiveCategory) {
	categories.forEach((category, index) => {
		if (index === currentActiveCategory) {
			category.classList.add('active');
		} else {
			category.classList.remove('active');
		}
	});
}

// Click RightBtn
rightArrow.addEventListener('click', () => {
	if (currentCategory < categories.length - 1) {
		currentCategory++;
		showCategory(currentCategory);
		leftArrow.disabled = false; // چون دیگه دسته اول نیست دکمه چپ فعال باشه 
		leftArrow.style.color = "#f6d676";
	}

	if (currentCategory === categories.length - 1) {
		rightArrow.disabled = true; // به دسته آخر رسید دکمه راست غیرفعال بشه 
		rightArrow.style.color = "#3d3d3d";
	}
});

// Click LeftBtn
leftArrow.style.color = "#3d3d3d";
leftArrow.addEventListener('click', () => {
	if (currentCategory > 0) {
		currentCategory--;
		showCategory(currentCategory);
		rightArrow.disabled = false; // اگه زدیم عقب و دسته اول نبود دکمه راست فعال باشه
		rightArrow.style.color = "#f6d676";
	}
	if (currentCategory === 0) {
		leftArrow.disabled = true;//  اگه زدیم عقب برگشت به دسته اول دکمه چپ غیر فعال بشه
		leftArrow.style.color = "#3d3d3d";
	}
});
