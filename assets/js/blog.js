
let titles = document.querySelectorAll("#blog .description h3");
const descriptions = document.querySelectorAll("#blog .description p");

// Title length less than 60 characters
titles.forEach((title) => {
	document.addEventListener("DOMContentLoaded", function () {
		if (title.innerHTML.length > 60) {
			title.innerHTML = title.innerHTML.substring(0, 60);
		}
	});
})

// Descriptions length less than 60 characters
descriptions.forEach((description) => {
	document.addEventListener("DOMContentLoaded", function () {
		if (description.innerHTML.length > 120) {
			description.innerHTML = description.innerHTML.substring(0, 120) + "...";
		}
	});
})
