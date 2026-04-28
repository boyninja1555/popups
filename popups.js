function newPopup(url, tagline, imageUrl) {
	const popup = document.createElement("a")
	popup.href = url
	popup.target = "_blank"

	const imageEl = document.createElement("img")
	imageEl.src = imageUrl
	popup.appendChild(imageEl)

	const taglineEl = document.createElement("span")
	taglineEl.textContent = tagline
	popup.appendChild(taglineEl)

	document.body.appendChild(popup)
}

newPopup("https://grantyap.flappygrant.com/app", "Grantyap: The inspiration for gravyap", "https://grantyap.flappygrant.com/vite.svg")
