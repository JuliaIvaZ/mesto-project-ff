import './pages/index.css';

import { openModal, closeModal } from './modal.js';
import { createCard, deleteCard, addLike } from './cards.js'; 
import { enableValidation, clearValidation } from './validation.js';
import { getInitialData, setUserInfo, setNewCard, setAvatar, deleteUserCard, removeLike, setLike} from './api.js';

const page = document.querySelector('.page');
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

const newPlaceForm = document.forms['new-place'];
const placeInput = newPlaceForm.querySelector('.popup__input_type_card-name');
const linkInput = newPlaceForm.querySelector('.popup__input_type_url');

const popupImage = document.querySelector('.popup_type_image');
const popupImageContent = document.querySelector('.popup__content_content_image');
const imageCaption = popupImageContent.querySelector('.popup__caption');
const closeButton = popupImageContent.querySelector('.popup__close');

const editAvatarIcon = document.querySelector('.edit__avatar');
const popupNewAvatar = document.querySelector('.popup_type_new-avatar');
const formElementProfile = document.querySelector('.popup_type_edit .popup__form');
const formElementAdd = document.querySelector('.popup_type_new-card .popup__form');
const formElementAvatar = document.querySelector('.popup_type_new-avatar .popup__form');
const editAvatarPen = document.querySelector('.icon__edit');

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

// Функция рендеринга карточек
const renderCards = (cardsData, userId) => {
    cardsData.forEach(card => {
        let deleteAbility = false;
        if (card.owner._id === userId) {
            deleteAbility = true;
        }
        let likesPlaced = false;
        if (card.likes.some((like) => like._id === userId)) {
            likesPlaced = true;
        }
        let cardElement = createCard (card, showPopupImage, addLike, deleteCard, deleteAbility, userId, likesPlaced);
        placesList.prepend(cardElement);
    });
};

getInitialData()
.then(([cardsData, userData]) => {
    const cards = cardsData;
    const user = userData;
    const userId = user._id; 

    renderCards(cards, userId);

    // Настраиваем профиль пользователя
    profileTitle.textContent = user.name;
    profileDescription.textContent = user.about;
    profileAvatar.setAttribute('style', `background-image: url(${user.avatar})`);
})
.catch(err => console.log('Ошибка: ', err));

// Открытие попапа редактирования профиля
openPopupProfile.addEventListener('click', () => {
    popupInputName.value=profileTitle.textContent;
    popupInputDescription.value=profileDescription.textContent;

    openModal(popupProfileEdit);
    clearValidation(formElementProfile, validationConfig);
});

// Открытие попапа создания новой карточки
openPopupCard.addEventListener('click', () => {
    openModal(popupNewCardCreation);
    clearValidation(formElementAdd, validationConfig);
}); 

formElementProfile.addEventListener('submit', handleProfileFormSubmit); 
formElementAdd.addEventListener('submit', addNewCard);  

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

// функция вывода Попап картинки по клику картинки
function showPopupImage(src, alt, capt) {

    popupImageContent.querySelector('.popup__image').src = src;
    popupImageContent.querySelector('.popup__image').alt = alt;
    imageCaption.textContent = capt;
  
    // Открываем модальное окно
    openModal(popupImage);
}

// Функция редактирования данных профиля
function handleProfileFormSubmit(evt) {
    evt.preventDefault(); 

    const saveButton = popupProfileEdit.querySelector(`${validationConfig.submitButtonSelector}`);
    saveButton.textContent = 'Сохранение...';
    setUserInfo(popupInputName.value, popupInputDescription.value)
    .then(() => {
        profileTitle.textContent = popupInputName.value;
        profileDescription.textContent = popupInputDescription.value;

        saveButton.textContent='Сохранить';
        closeModal(popupProfileEdit);
    });
};

// Функция добавление новой карточки.
function addNewCard(evt) {
    evt.preventDefault();
    const newCard = {
        name: placeInput.value,
        link: linkInput.value,
        _id: '0',
        likes: []
    };
    const saveButton = popupNewCardCreation.querySelector(`${validationConfig.submitButtonSelector}`);
    saveButton.textContent = 'Cохранение...';

    setNewCard(newCard)
    .then((card) => {
        newCard._id = card._id;
        newCard.likes = card.likes;
        const userId = card.owner._id;
        placesList.prepend (createCard (newCard, showPopupImage, addLike, deleteCard, true, userId, false));

        saveButton.textContent = 'Сохранить';
        closeModal(popupNewCardCreation);
        formElementAdd.reset();
    })
    .catch(err => console.log('Ошибка загрузки карточки: ', err));
};

// Редактирование аватара
editAvatarIcon.addEventListener('mouseover', () => {
    editAvatarPen.classList.add('icon__edit__active');
    profileAvatar.classList.add('profile__image__hover'); 
});

editAvatarIcon.addEventListener('mouseout', () => {
    editAvatarPen.classList.remove('icon__edit__active');
    profileAvatar.classList.remove('profile__image__hover');
});

editAvatarIcon.addEventListener('click', () => {
    openModal(popupNewAvatar);
    clearValidation(formElementAvatar, validationConfig);
});

// Функция редактирования аватара
formElementAvatar.addEventListener('submit', makeNewAvatar);

function makeNewAvatar(evt) {
    evt.preventDefault();

    const saveButton = popupNewAvatar.querySelector(`${validationConfig.submitButtonSelector}`);
    saveButton.textContent = 'сохранение...';
    const inputAvatarLink = document.querySelector('.popup_type_new-avatar .popup__input_type_url');

    setAvatar(inputAvatarLink.value)
    .then ((userData) => {
        profileAvatar.setAttribute('style', `background-image: url(${userData.avatar})`);

        saveButton.textContent='Сохранить';
        closeModal(popupNewAvatar);
        
        formElementAvatar.reset();
    });
};
