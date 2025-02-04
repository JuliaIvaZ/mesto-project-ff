import './pages/index.css';
import { initialCards } from './initialCards.js';
import { createCard, deleteCard, addLike } from './cards.js';
import { openModal, closeModal, openImage } from './modal.js';

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

const formElement = document.forms['edit-profile'];

const formPlace = document.forms['new-place'];
const placeInput = formPlace.querySelector('.popup__input_type_card-name');
const linkInput = formPlace.querySelector('.popup__input_type_url');

const openPopupImage = document.querySelectorAll('.card__image');
const popupImage = document.querySelector('.popup_type_image');

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
        if (evt.target.classList.contains('popup__close')) {
            closeModal(popup);
        }
    })
});

// Добавление обработчика событий на клавишу Esc
export function handleEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        closeModal(openedPopup);
    }
};

const callbacks = {
    deleteCard,
    addLike,
    openImage
};

// Добавление карточки на страницу
function renderCard(item, method = 'prepend') {
    const cardElement = createCard(item);
    if (method === 'prepend' || method === 'append') {
        placesList[ method ](cardElement);
    }
};

// Вывод карточки на страницу
initialCards.forEach((item) => {
    renderCard(item, 'append');
});

// Редактирование данных профиля
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputName.value;
    profileDescription.textContent = popupInputDescription.value;
    evt.target.reset();
    closeModal(evt.target.closest('.popup'));
};

formElement.addEventListener('submit', handleFormSubmit);

function addNewCard(evt) {
    evt.preventDefault();
    const newCard = {
        name: placeInput.value,
        link: linkInput.value
    }
    renderCard(newCard);
    closeModal(evt.target.closest('.popup'));
    evt.target.reset();
};

formPlace.addEventListener('submit', addNewCard);

// Добавление лайка
placesList.addEventListener('click', (evt) => {
    if (evt.target.matches('.card__like-button')) {
        addLike(evt);
    };
});

// Открытие попапа с картинкой
openPopupImage.forEach((item) => {
    item.addEventListener('click', () => {
    const imageData = item;
    const imageTitle = item.closest('li').querySelector('.card__title').textContent;

    openModal(popupImage);
    openImage(imageData, imageTitle);
    })
});