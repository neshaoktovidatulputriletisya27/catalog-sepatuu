const productDialog = document.querySelector("#product-dialog");
const dialogBrand = document.querySelector("#dialog-brand");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector("#dialog-description");
const dialogPrice = document.querySelector("#dialog-price");

document.querySelector("#product-grid").addEventListener("click", (event) => {
	const descriptionButton = event.target.closest("[data-description]");
	if (!descriptionButton) return;

	dialogBrand.textContent = descriptionButton.dataset.brand;
	dialogTitle.textContent = descriptionButton.dataset.description;
	dialogDescription.textContent = descriptionButton.dataset.details;
	dialogPrice.textContent = descriptionButton.dataset.price;
	productDialog.querySelectorAll('input[name="shoe-size"]').forEach((sizeOption) => {
		sizeOption.checked = false;
	});
	productDialog.showModal();
});

document.querySelector(".dialog-close").addEventListener("click", () => {
	productDialog.close();
});

productDialog.addEventListener("click", (event) => {
	if (event.target === productDialog) productDialog.close();
});
