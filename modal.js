// https://www.tailwindtoolbox.com/components/modal
let openmodal = document.querySelectorAll('.modal-open');
for(let i = 0; i < openmodal.length; i++) {
	openmodal[i].addEventListener('click', function(evt){
		evt.preventDefault();
		toggleModal();
	})
}

const overlay = document.querySelector('.modal-overlay');
overlay.addEventListener('click', closeModal);

let closemodal = document.querySelectorAll('.modal-close');
for(let i = 0; i < closemodal.length; i++) {
	closemodal[i].addEventListener('click', closeModal);
}

window.onkeyup = function(evt) {
	let key = evt.keyCode ? evt.keyCode : evt.which;
	if(key == 27) { // esc
		closeModal();
	}
};

function closeModal() {
	if(document.body.classList.contains('modal-active') ) {
		toggleModal();
	}	
}

function toggleModal() {
	const body = document.querySelector('body');
	const modal = document.querySelector('.modal');
	modal.classList.toggle('opacity-0');
	modal.classList.toggle('pointer-events-none');
	body.classList.toggle('modal-active');
}