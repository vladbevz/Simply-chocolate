(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-buynow]'),
    openSecondModalBtn: document.querySelector(
      '[data-modal-open-buynowsecond]'
    ),

    closeModalBtn: document.querySelector('[data-modal-close-buynow]'),
    modal: document.querySelector('[data-modal-buynow]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openSecondModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
