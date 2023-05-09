// Get Dom element
function getDomElement(element) {
	return document.querySelector(element);
}

// Get Multiple element
function getAllDomElement(element) {
	return document.querySelectorAll(element);
}

//  Call Function and Store in variable

const close = getDomElement(".close"),
	modal = getDomElement(".modal"),
	open = getAllDomElement(".cta");

open?.forEach((btn) => {
	btn.addEventListener("click", () => {
		console.log("clicked");
		modal?.showModal();
	});
});

// modal?.showModal();
close?.addEventListener("click", () => modal?.close());
