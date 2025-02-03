// Функция открытия модального окна
function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    if (modal) 
    {
        modal.classList.add('popup_is-animated');
        modal.classList.add('popup_is-opened');  
    };
};

// Функция открытия модального окна с изображением
function openImage(cardImage, cardTitle) {
    const image = document.querySelector('.popup__content_content_image');
    image.querySelector('.popup__image').src = cardImage.src;
    image.querySelector('.popup__image').alt = cardImage.alt;
    image.querySelector('.popup__caption').textContent = cardTitle.textContent;
    openModal('.popup_type_image');
}

// Функция закрытия модального окна
function closeModal(modalSelector) {
    modalSelector.classList.remove('popup_is-opened');
};

export {openModal, openImage, closeModal};