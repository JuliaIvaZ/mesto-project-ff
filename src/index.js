import './pages/index.css';
import { initialCards, createCard, deleteCard, addLike } from './cards.js';
import { openModal, closeModal, openImage } from './modal.js';

const placesList = document.querySelector('.places__list');  // DOM узлы
const openPopupProfile = document.querySelector('.profile__edit-button'); // Кнопка открытия попапа редактирование профила
const openPopupCard = document.querySelector('.profile__add-button'); // Кнопка открытия попапа добавления новой карточки
const popup = document.querySelector('.popup');

// Открытие попапов редактирования профиля и создания карточки по клику
openPopupProfile.addEventListener('click', () => {
    openModal('.popup_type_edit');
    document.querySelector('.popup__input_type_name').value = document.querySelector('.profile__title').textContent;
    document.querySelector('.popup__input_type_description').value = document.querySelector('.profile__description').textContent;
});
openPopupCard.addEventListener('click', () => {openModal('.popup_type_new-card')});

// Закрываем модальное окно при клике на оверлей (фон) и крестик
document.body.addEventListener('click', (evt) => {
    if (evt.target.matches('.popup__close')) {
        closeModal(evt.target.closest('.popup'));
    }
    if (evt.target.matches('.popup')) {
        closeModal(evt.target.closest('.popup'));
    }
});

// Добавление обработчика событий на клавишу Esc
document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        if (openedPopup) {
            closeModal(openedPopup);
        };
    };
});

// Вывод карточки на страницу
initialCards.forEach((item) => {
    const cardElement = createCard(item, deleteCard);
    placesList.append(cardElement);
});

// Редактирование данных профиля
const formElement = document.forms['edit-profile'];
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');

function handleFormSubmit(evt) {
    evt.preventDefault();
    document.querySelector('.profile__title').textContent = nameInput.value;
    document.querySelector('.profile__description').textContent = jobInput.value;
    evt.target.reset();
    closeModal(evt.target.closest('.popup'));
};
formElement.addEventListener('submit', handleFormSubmit);

// Добавление карточки на страницу
const formPlace = document.forms['new-place'];
const placeInput = formPlace.querySelector('.popup__input_type_card-name');
const linkInput = formPlace.querySelector('.popup__input_type_url');

function addNewCard(evt) {
    evt.preventDefault();
    const cardElement = createCard({
        name: placeInput.value, 
        link: linkInput.value}, 
        deleteCard, 
        addLike,
        openImage
    );
    placesList.prepend(cardElement);
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
const openPopupImage = document.querySelectorAll('.card__image'); // Кнопка открытия попапа с картинкой
openPopupImage.forEach((item) => {
    item.addEventListener('click', () => {
    const imageData = item;
    const imageTitle = item.closest('li').querySelector('.card__title').textContent;

    openModal('.popup_type_image');
    openImage(imageData, imageTitle);
    });
});