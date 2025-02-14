import './pages/index.css';
//import { initialCards } from './initialCards.js';
import { createCard } from './cards.js';
import { openModal, closeModal} from './modal.js';
import { getUserInfo, getCards, setUserInfo } from './api.js';
import { enableValidation, clearValidation } from './validation.js';

const placesList = document.querySelector('.places__list');  // DOM узлы
const openPopupProfile = document.querySelector('.profile__edit-button'); // Кнопка открытия попапа редактирование профила
const openPopupCard = document.querySelector('.profile__add-button'); // Кнопка открытия попапа добавления новой карточки
const profileDescription = document.querySelector('.profile__description');
const profileTitle = document.querySelector('.profile__title');
const profileAvatar = document.querySelector('.profile__image');
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputDescription = document.querySelector('.popup__input_type_description');
const popupProfileEdit = document.querySelector('.popup_type_edit');
const popupNewCardCreation = document.querySelector('.popup_type_new-card');
const popups = document.querySelectorAll('.popup');

const cardTemplate = document.querySelector('#card-template').content; // Шаблон карточки   
const cardElement = cardTemplate.querySelector('.card').cloneNode(true); //.children[0];

// Заполняем карточку данными
const cardImage = cardElement.querySelector('.card__image');
const cardTitle = cardElement.querySelector('.card__title');
const likeButton = cardElement.querySelector('.card__like-button');
const deleteButton = cardElement.querySelector('.card__delete-button');

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


Promise.all([getUserInfo(), getCards()])
    .then (([userData, cardsData]) => {

        profileTitle.textContent = userData.name;
        profileDescription.textContent = userData.about;
        profileAvatar.src = userData.avatar;

        renderCards(cardsData, userData._id);
    })
    .catch(err => console.log('Ошибка_44: ', err));

// Функция рендеринга карточек
const renderCards = (cardsData, userId) => {
    cardsData.forEach(card => {
        const cardElement = createCard(card, userId, {
            openModal, closeModal, handleImageClick, popupImage
        });
        placesList.prepend(cardElement);
    });
};

//const createCard = (card, userId) => {

//    cardImage.src = card.link;
//    cardImage.alt = card.name;
//    cardTitle.textContent = card.name;

    // Проверяем, является ли текущий пользователь владельцем карточки
//    if (card.owner._id !== userId) {
//        deleteButton.style.display = 'none'; // Скрываем кнопку удаления, если пользователь не владелец
//    }

    // Проверяем, лайкнул ли текущий пользователь карточку
//    const isLiked = card.likes.some(like => like._id === userId);
//    if (isLiked) {
//        likeButton.classList.add('card__like-button_active');
//    }

    // Добавляем обработчики событий для кнопок
//    likeButton.addEventListener('click', () => handleLike(card._id));
//    deleteButton.addEventListener('click', () => handleDelete(card._id));

//    return cardElement;
//};

const handleLike = (cardId) => {
    console.log('Лайк на карточке с ID:', cardId);
    // Здесь можно добавить логику для отправки запроса на сервер
};

const handleDelete = (cardId) => {
    console.log('Удаление карточки с ID:', cardId);
    // Здесь можно добавить логику для отправки запроса на сервер
};


// Открытие попапов редактирования профиля и создания карточки по клику
openPopupProfile.addEventListener('click', () => {
    openModal(popupProfileEdit);

    popupInputName.value = profileTitle.textContent;
    popupInputDescription.value = profileDescription.textContent;

    clearValidation(profileForm, validationConfig); 
});

openPopupCard.addEventListener('click', () => {
    openModal(popupNewCardCreation);

    clearValidation(newPlaceForm, validationConfig);  
});

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
//initialCards.forEach((item) => {
//    renderCard(item, 'append');
//});

// Редактирование данных профиля
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputName.value;
    profileDescription.textContent = popupInputDescription.value;

    setUserInfo(popupInputName.value, popupInputDescription.value);
    console.log('Новые данные пользователя:', popupInputName.value, popupInputDescription.value);
    
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