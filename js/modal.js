const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelectAll('.modal-btn-open');
const modalBtnClose = document.querySelectAll('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
