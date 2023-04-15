//* Faq

// ========== faq Content ==========

const items = document.querySelectorAll("#faq .item");
const collectionItems = document.querySelector("#faq .collection");
const plus = document.querySelector("#faq .plus")
const minus = document.querySelector("#faq .minus")
const answer = document.querySelectorAll("#faq .answer")
const question = document.querySelectorAll("#faq .question")


items.forEach((item) => {
	item.addEventListener("click", () => {
		// Not Active
		if (item.classList.contains("active")) { // کلیک که شد اگر اکتیو داشت 
			item.classList.remove("active"); //  اکتیو را حذف کن
			collectionItems.style.justifyContent = "center"; // استایل اسکرول بار چون اکتیو نداره بیاد وسط
		} else { // Active
			items.forEach((item) => {
				item.classList.remove("active");// رو هر کدوم کلیک شد همه اکتیوها رو بردار
			});
			item.classList.add("active"); // رو اونی که کلیک شد فقط اکتیو بده
			collectionItems.style.justifyContent = "start"; // استایل اسکرول بار بره بالا
		}
	});
});



// ========== 3D Card in Faq ==========

function map(val, minA, maxA, minB, maxB) {
	return minB + ((val - minA) * (maxB - minB) / (maxA - minA));
}

function card3D(card, ev) {
	let img = card.querySelector("#faq img");
	let mouseX = ev.offsetX;
	let mouseY = ev.offsetY;
	let rotateY = map(mouseX, 700, 0, -5, 5);
	let rotateX = map(mouseY, 0, 700, 5, -5);
	let brightness = map(mouseY, 0, 700, 1, 0.5)

	img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
	img.style.filter = `brightness(${brightness})`;
}

const cards = document.querySelectorAll('#faq .card3d');
cards.forEach((card) => {
	card.addEventListener("mousemove", (ev) => {
		card3D(card, ev);
	});

	card.addEventListener("mouseleave", (ev) => {
		let img = card.querySelector("#faq img");
		img.style.transform = `rotateX(0deg) rotateY(0deg)`;
	});
});