import './pages/index.css';
import { initialCards } from './initialCards.js';
import { createCard } from './cards.js';
import { openModal, closeModal} from './modal.js';
import { getInitialCards } from './api.js';
import { enableValidation, clearValidation } from './validation.js';

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

// Настройки валидации
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'button__inactive',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'input__error_hidden'
  };

  enableValidation(validationConfig);

const resetForm = (formElement, buttonElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    inputList.forEach((inputElement) => {
        inputElement.value = '';
    });
    buttonElement.classList.add('button__inactive');
    buttonElement.disabled = true;
};

// Открытие попапов редактирования профиля и создания карточки по клику
openPopupProfile.addEventListener('click', () => {
    openModal(popupProfileEdit);

    popupInputName.value = profileTitle.textContent;
    popupInputDescription.value = profileDescription.textContent;

    //hideInputError(popupProfileEdit, popupInputName);
    //hideInputError(popupProfileEdit, popupInputDescription);

   // const inputList = Array.from(popupProfileEdit.querySelectorAll('.popup__input'));
    //const buttonElement = popupProfileEdit.querySelector('.popup__button');
    clearValidation(profileForm, validationConfig);  //inputList, validationConfig);
});

openPopupCard.addEventListener('click', () => {
    openModal(popupNewCardCreation);

    //const inputList = Array.from(popupNewCardCreation.querySelectorAll('.popup__input'));
    clearValidation(newPlaceForm, validationConfig);  //inputList, validationConfig);
    //resetForm(newPlaceForm, newPlaceForm.querySelector('.popup__button'));
});

//enableValidation();

// Закрываем модальное окно при клике на оверлей (фон) и крестик
popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_is-opened')) {
            closeModal(popup);
        }
        if (evt.target.classList.contains(closeButton.classList)) {
            closeModal(popup);
        };
    });
});

// Добавление новой карточки на страницу
function renderCard(item, method = 'prepend') {
    const cardElement = createCard(item, openModal, closeModal, handleImageClick, popupImage);  
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