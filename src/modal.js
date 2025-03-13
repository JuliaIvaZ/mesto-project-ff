function handleEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        closeModal(openedPopup);
    }
};

// Функция открытия модального окна
function openModal(modalElement) {
    modalElement.classList.add('popup_is-opened');setTimeout(() => {
        modalElement.classList.add('popup_is-opened');   
    }, 1);
    document.addEventListener('keydown', handleEscape);
};

// Функция закрытия модального окна
function closeModal(modalElement) {
    modalElement.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEscape);
};

export { openModal, closeModal }

// Функция срабатывания на ESC
//const handleEscape = (evt) => {
//    const popup = document.querySelector(".popup_is-opened"); // находим открытый попап
//    if (evt.key === "Escape") {
//      closeModalWindow(popup);
//    }
//  };

