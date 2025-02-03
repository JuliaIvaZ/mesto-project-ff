// Функция открытия модального окна
function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    if (modal) 
    {
        modal.classList.add('popup_is-animated');
        modal.classList.add('popup_is-opened');  
    };
};

// Функция закрытия модального окна
function closeModal(modalElement) {
    modalElement.classList.remove('popup_is-opened');
};

// Функция для заполнения модального окна данными картинки
function openImage(cardImage, cardTitle) {
    const image = document.querySelector('.popup__content_content_image');
    image.querySelector('.popup__image').src = cardImage.src;
    image.querySelector('.popup__image').alt = cardImage.alt;
    image.querySelector('.popup__caption').textContent = cardTitle.textContent;
    openModal('.popup_type_image');
}

export { openModal, closeModal, openImage};