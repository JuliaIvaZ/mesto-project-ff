import { handleEscape } from "./index.js";

// Функция открытия модального окна
function openModal(modalElement) {
    modalElement.classList.add('popup_is-animated');
    setTimeout(() => {
        modalElement.classList.add('popup_is-opened');   
    }, 1);
    document.addEventListener('keydown', handleEscape); 
};

// Функция закрытия модального окна
function closeModal(modalElement) {
    modalElement.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEscape);
};


export { openModal, closeModal };