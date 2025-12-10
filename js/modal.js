const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.getElementByClass('modal-btn-open');
const modalBtnClose = document.getElementByClass('modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
