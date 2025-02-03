import './pages/index.css';
import { initialCards, createCard, deleteCard } from './cards.js';
import { openModal, closeModal } from './modal.js';

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

// Закрытие попапов
document.body.addEventListener('click', (evt) => {
    if (evt.target.matches('.popup__close')) {
        closeModal('.popup');  
    };
});

// Добавление обработчика событий на клавишу Esc
document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
        if (document.querySelector('.popup_is-opened')) {
            closeModal('.popup');
            popup.removeEventListener('keydown', () => {});
        };
    };
});

// Вывод карточки на страницу
initialCards.forEach((item) => {
    const cardElement = createCard(item, deleteCard);
    placesList.append(cardElement);
});

// Находим форму в DOM
const formElement = document.forms['edit-profile'];

// Находим поля формы в DOM
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');

// Обработчик «отправки» формы
function handleFormSubmit(evt) {
    evt.preventDefault();

    document.querySelector('.profile__title').textContent = nameInput.value;
    document.querySelector('.profile__description').textContent = jobInput.value;

// Закрываем модальное окно
    closeModal('.popup');
};

// Прикрепляем обработчик к форме
formElement.addEventListener('submit', handleFormSubmit);

// Находим форму в DOM
const formPlace = document.forms['new-place'];

// Находим поля формы в DOM
const placeInput = formPlace.querySelector('.popup__input_type_card-name');
const linkInput = formPlace.querySelector('.popup__input_type_url');

// Обработчик «отправки» формы
function addNewCard(evt) {
    evt.preventDefault();

    const cardElement = createCard({name: placeInput.value, link: linkInput.value}, deleteCard);
    placesList.prepend(cardElement);

// Закрываем модальное окно
    closeModal('.popup');

    evt.target.reset();
};

// Прикрепляем обработчик к форме
formPlace.addEventListener('submit', addNewCard);