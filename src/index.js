console.log("%c HI", "color: firebrick");
document.addEventListener("DOMContentLoaded", () => {
	const imgDiv = document.querySelector("#dog-image-container");
	const breedList = document.querySelector("#dog-breeds");
	let breedsList = [];
	const ul = document.getElementsByTagName("ul");

	fetch("https://dog.ceo/api/breeds/image/random/4")
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			json.message.forEach(function (item) {
				imgDiv.innerHTML += `<img src="${item}" height="200">`;
			});
		});

	fetch("https://dog.ceo/api/breeds/list/all")
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			breedsList = Object.keys(json.message);
			for (key in json.message) {
				breedList.innerHTML += `<li>${key}</li>`;
			}
		});

	breedList.addEventListener("click", function (e) {
		if (e.target.style.color != "purple") {
			e.target.style.color = "purple";
		} else {
			e.target.style.color = "black";
		}
	});

	let breedDropdown = document.querySelector("#breed-dropdown");

	breedDropdown.addEventListener("change", function (e) {
		// for (const element of breeds) {
		// 	if (element.innerText.split("")[0] != e.target.value) {
		// 		breed.removeChild(element);
		// 	}
		// }
		breedList.replaceChildren();
		let breeds = breedsList.filter((breed) => breed.startsWith(e.target.value));
		breeds.forEach(function (breed) {
			breedList.innerHTML += `<li>${breed}</li>`;
		});
	});
});
