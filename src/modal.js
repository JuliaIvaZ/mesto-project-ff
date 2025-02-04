import { handleEscape } from "./index.js";

// Функция открытия модального окна
function openModal(modalElement) {
    modalElement.classList.add('popup_is-animated');
    modalElement.classList.add('popup_is-opened'); 
    document.addEventListener('keydown', handleEscape); 
};

// Функция закрытия модального окна
function closeModal(modalElement) {
    modalElement.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEscape);
};

// Функция для заполнения модального окна данными картинки
function openImage(cardImage, cardTitle) {
    const image = document.querySelector('.popup__content_content_image');
    image.querySelector('.popup__image').src = cardImage.src;
    image.querySelector('.popup__image').alt = cardImage.alt;
    image.querySelector('.popup__caption').textContent = cardTitle.textContent;
    openModal('.popup_type_image');
}

export { openModal, closeModal, openImage };