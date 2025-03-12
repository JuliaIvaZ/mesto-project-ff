//function handleEscape(evt) {
//    if (evt.key === 'Escape') {
//        const openedPopup = document.querySelector('.popup_is-opened');
//        closeModal(openedPopup);
//    }
//};

// Функция открытия модального окна
//function openModal(modalElement) {
//    modalElement.classList.add('popup_is-animated');
//    setTimeout(() => {
//        modalElement.classList.add('popup_is-opened');   
//    }, 1);
//    document.addEventListener('keydown', handleEscape); 
//};

// Функция закрытия модального окна
//function closeModal(modalElement) {
//    modalElement.classList.remove('popup_is-opened');
//    document.removeEventListener('keydown', handleEscape);
//};

//export { openModal, closeModal };


export { openModalWindow, closeModalWindow }


// Функция открытия модального окна

function openModalWindow(arg) {
    arg.classList.add('popup_is-opened');
    document.addEventListener('keydown', handleEscKeyUp);
}

// Функция закрытия модального окна

function closeModalWindow(arg) {
    arg.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEscKeyUp);
}

// Функция срабатывания на ESC
const handleEscKeyUp = (evt) => {
    const popup = document.querySelector(".popup_is-opened"); // находим открытый попап
    if (evt.key === "Escape") {
      closeModalWindow(popup);
    }
  };

