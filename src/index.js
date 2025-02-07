import './pages/index.css';
import { initialCards } from './initialCards.js';
import { createCard } from './cards.js';
import { openModal, closeModal, handleEscape } from './modal.js';

const placesList = document.querySelector('.places__list');  // DOM узлы
const openPopupProfile = document.querySelector('.profile__edit-button'); // Кнопка открытия попапа редактирование профила
const openPopupCard = document.querySelector('.profile__add-button'); // Кнопка открытия попапа добавления новой карточки
const profileDescription = document.querySelector('.profile__description');
const profileTitle = document.querySelector('.profile__title');
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputDescription = document.querySelector('.popup__input_type_description');
const popupProfileEdit = document.querySelector('.popup_type_edit');
const popupNewCardCreation = document.querySelector('.popup_type_new-card');
const popups = document.querySelectorAll('.popup');

const profileForm = document.forms['edit-profile'];

const newPlaceForm = document.forms['new-place'];
const placeInput = newPlaceForm.querySelector('.popup__input_type_card-name');
const linkInput = newPlaceForm.querySelector('.popup__input_type_url');

const popupImage = document.querySelector('.popup_type_image');
const popupImageContent = document.querySelector('.popup__content_content_image');
const imageContent = popupImageContent.querySelector('.popup__image');
const imageCaption = popupImageContent.querySelector('.popup__caption');
const closeButton = popupImageContent.querySelector('.popup__close');


// Открытие попапов редактирования профиля и создания карточки по клику
openPopupProfile.addEventListener('click', () => {
    openModal(popupProfileEdit);
    popupInputName.value = profileTitle.textContent;
    popupInputDescription.value = profileDescription.textContent;
});
openPopupCard.addEventListener('click', () => {openModal(popupNewCardCreation)});

// Закрываем модальное окно при клике на оверлей (фон) и крестик
popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_is-opened')) {
            closeModal(popup);
        }
        if (evt.target.classList.contains(closeButton.classList)) {//'popup__close')) {
            closeModal(popup);
        };
    })
});

// Добавление новой карточки на страницу
function renderCard(item, method = 'prepend') {
    const cardElement = createCard(item, openModal, closeModal, handleImageClick, popupImage);    // callbacks);
    if (method === 'prepend' || method === 'append') {
        placesList[ method ](cardElement);
    }
};

function addNewCard(evt) {
    evt.preventDefault();
    const newCard = {
        name: placeInput.value,
        link: linkInput.value
    }
    renderCard(newCard);
    closeModal(popupNewCardCreation);  
    evt.target.reset();
};

newPlaceForm.addEventListener('submit', addNewCard);

// Вывод карточки на страницу
initialCards.forEach((item) => {
    renderCard(item, 'append');
});

// Редактирование данных профиля
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputName.value;
    profileDescription.textContent = popupInputDescription.value;
    evt.target.reset();
    closeModal(popupProfileEdit);
};

profileForm.addEventListener('submit', handleProfileFormSubmit);

// Функция для заполнения модального окна данными картинки
function handleImageClick(image, title) {
    imageContent.src = image.src;
    imageContent.alt = image.alt;
    imageCaption.textContent = title.textContent;
    openModal(popupImage);
};