function newPopup(url, tagline, imageUrl) {
	const iframe = document.createElement("iframe")
	iframe.style.top = Math.random() * window.innerWidth
	iframe.style.left = Math.random() * window.innerHeight
	iframe.style.position = "fixed"
	iframe.style.zIndex = "999999"
	document.body.appendChild(iframe)

	const popup = document.createElement("a")
	popup.href = url
	popup.target = "_blank"

	const imageEl = document.createElement("img")
	imageEl.src = imageUrl
	popup.appendChild(imageEl)

	const taglineEl = document.createElement("span")
	taglineEl.textContent = tagline
	popup.appendChild(taglineEl)

	const doc = iframe.contentDocument
	doc.body.appendChild(popup)
}

newPopup("https://grantyap.flappygrant.com/app", "Grantyap: The inspiration for gravyap", "https://grantyap.flappygrant.com/vite.svg")
