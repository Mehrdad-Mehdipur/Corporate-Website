
let titles = document.querySelectorAll("#blog .description h3");
const descriptions = document.querySelectorAll("#blog .description p");
const newBlog = document.querySelector("#blog .newBlog .description p");

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
		if (window.innerWidth <= 900) {
			if (description.innerHTML.length > 100) {
				description.innerHTML = description.innerHTML.substring(0, 100) + "...";
			}
		}
		// if (window.innerWidth <= 768) {
		// 	if (description.innerHTML.length > 70) {
		// 		description.innerHTML = description.innerHTML.substring(0, 70) + "...";
		// 	}
		// }
	});
})
