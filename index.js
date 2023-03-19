window.addEventListener('DOMContentLoaded', function() {
	document.querySelector('.c-modal-container').classList.add('loaded');

	const modalContainer = document.querySelector('.c-modal-container');
	const closeButton = document.querySelector('#closeButton');
	const cancelButton = document.querySelector('#cancelButton');

	closeButton.addEventListener('click', function() {
			modalContainer.classList.remove('loaded');
			setTimeout(() => modalContainer.remove(), 300); 
	});

	cancelButton.addEventListener('click', function() {
			modalContainer.classList.remove('loaded');
			setTimeout(() => modalContainer.remove(), 300);
	});
});