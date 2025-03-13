import './pages/index.css';

import { openModal, closeModal } from './modal.js';
import { createCard, deleteCard, addLike } from './cards.js'; // createCard -> makeCard
import { enableValidation, clearValidation } from './validation.js';
import { getInitialCards, setUserInfo, setNewCard, setAvatar, deleteUserCard, removeLike, setLike} from './api.js';

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
    formSelector: 'popup__form',
    inputSelector: 'popup__input',
    submitButtonSelector: 'popup__button',
    inactiveButtonClass: 'button__inactive',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'input__error_hidden'
};

enableValidation(validationConfig); 

//Promise.all([getUserInfo(), getCards()])
//    .then (([userData, cardsData]) => {

//        profileTitle.textContent = userData.name;
//        profileDescription.textContent = userData.about;
//        profileAvatar.src = userData.avatar;

//        renderCards(cardsData, userData._id);
//    })
//    .catch(err => console.log('Ошибка_44: ', err));

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

//        let cardElement = createCard(card, userId, {
//            deleteCard, handleImageClick, addLike, setLike,removeLike //openModal, closeModal, handleImageClick, popupImage
//        });
        placesList.prepend(cardElement);
    });
};

getInitialCards()
.then((responses) => {
    return Promise.all(responses.map(response => {
        if (response.ok) {
            return response.json(); 
        } else {
            return Promise.reject(`Ошибка: ${response.status}`);
        }
    }));
})
.then(([cardsData, userData]) => {
    const cards = cardsData;
    const user = userData;
    const userId = user._id;  // _id пользователя

    cards.forEach(card => {
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

//   cards.forEach(card => {console.log(card._id)});

//    renderCards(cards, userId);
  // Рендерим карточки с учетом состояния лайков и удаления -------> смотри renderCards
//  cards.forEach(card => {
//    let availabilityDelete=false;
//    if (card.owner._id === userId) {
//      availabilityDelete=true;
//    }
//    let likeIsLiked=false;
//    if (card.likes.some((like) => like._id === userId)) {
//      likeIsLiked=true;
//    }
//    const c = makeCard(     -------> смотри cardElement в renderCards
//      card.name, card.link, showPopupImage, putLikeCard, funcDelBut, 
//      card.likes.length, availabilityDelete, card._id, userId, likeIsLiked
//    );
//    placesList.append(c);
//  });

  // Настраиваем профиль пользователя
    profileTitle.textContent = user.name;
    profileDescription.textContent = user.about;
    profileAvatar.setAttribute('style', `background-image: url(${user.avatar})`);
})
.catch(err => console.log('Ошибка_44: ', err));
//.catch(err => {
  // Обрабатываем ошибку
//  alert(err);
//});

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

//addListener(popupProfileEdit); 
//addListener(popupNewCardCreation);
//addListener(popupImage);
//addListener(popupNewAvatar);

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
  profileAvatar.src=src;
  profileAvatar.alt=alt;
  imageCaption.textContent=capt;
  openModal(popupImage);
}

// Функция редактирования данных профиля
function handleProfileFormSubmit(evt) {
    evt.preventDefault(); 
    profileTitle.textContent = popupInputName.value;
    profileDescription.textContent = popupInputDescription.value;

    const saveButton = popupProfileEdit.querySelector(`${validationSettings.submitButtonSelector}`);
    saveButton.textContent = 'Сохранение...';
    setUserInfo()
    .then((res) => {
        if (res.ok) {
            return res.json(); 
        } 
        else {
            return Promise.reject(`Ошибка сохранения данных профиля: ${res.status}`);
        }
    });
    saveButton.textContent='Сохранить';
    closeModal(popupProfileEdit);
}

// Функция добавление новой карточки.
function addNewCard(evt) {
    evt.preventDefault();
    const newCard = {
        name: placeInput.value,
        link: linkInput.value,
        _id: '0',
        likes: []
    };
    const saveButton = popupNewCardCreation.querySelector(`${validationSettings.submitButtonSelector}`);
    saveButton.textContent = 'Cохранение...';

    setNewCard(newCard)
    .then((res) => {
        if (res.ok) {
            return res.json(); 
        } 
        else {
            return Promise.reject(`Ошибка создания новой карточки: ${res.status}`);
        }
    })
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
}

// Функция, чтобы повесить слушатели
//function addListener(arg) {
//  const closeButton=arg.closeButton;   //querySelector('.popup__close');
//  closeButton.addEventListener('click', () => {
//    closeModal(arg);
//  });
//  arg.addEventListener('mousedown', (evt) => {
//    if (evt.target.classList.contains('popup')) {
//      closeModal(arg);
//    }
//  })
//}

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
    clearValidation(formElementAvatar, validationSettings);
});

// Функция редактирования аватара
formElementAvatar.addEventListener('submit', makeNewAvatar);

function makeNewAvatar(evt) {
    evt.preventDefault();
    const saveButton = popupNewAvatar.querySelector(`${validationSettings.submitButtonSelector}`);
    saveButton.textContent = 'сохранение...';
    const inputAvatarLink = document.querySelector('.popup_type_new-avatar .popup__input_type_url');
    setAvatar(inputAvatarLink.value)
    .then((res) => {
        if (res.ok) {
            return res.json(); 
        } else {
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        }
    });
    saveButton.textContent='Сохранить';
    closeModal(popupNewAvatar);
    formElementAvatar.reset();
};

//});

//import './pages/index.css';
//import { initialCards } from './initialCards.js';
//import { createCard, deleteCard, addLike } from './cards.js';
//import { openModal, closeModal} from './modal.js';
//import { getUserInfo, getCards, setUserInfo, setNewCard, setLike, removeLike } from './api.js';
//import { enableValidation, clearValidation } from './validation.js';


// Закрываем модальное окно при клике на оверлей (фон) и крестик
//popups.forEach((popup) => {
//    popup.addEventListener('mousedown', (evt) => {
//        if (evt.target.classList.contains('popup_is-opened')) {
//            closeModal(popup);
//        }
//        if (evt.target.classList.contains(closeButton.classList)) {
//            closeModal(popup);
//        };
//    });
//});



//newPlaceForm.addEventListener('submit', addNewCard);



//profileForm.addEventListener('submit', handleProfileFormSubmit);

// Функция для заполнения модального окна данными картинки
//function handleImageClick(image, title) {
//    imageContent.src = image.src;
//    imageContent.alt = image.alt;
//   imageCaption.textContent = title.textContent;
//    openModal(popupImage);
//};



////const createCard = (card, userId) => {

////    cardImage.src = card.link;
////    cardImage.alt = card.name;
////    cardTitle.textContent = card.name;

    // Проверяем, является ли текущий пользователь владельцем карточки
////    if (card.owner._id !== userId) {
////        deleteButton.style.display = 'none'; // Скрываем кнопку удаления, если пользователь не владелец
////    }

    // Проверяем, лайкнул ли текущий пользователь карточку
////    const isLiked = card.likes.some(like => like._id === userId);
////    if (isLiked) {
////        likeButton.classList.add('card__like-button_active');
////    }

    // Добавляем обработчики событий для кнопок
////    likeButton.addEventListener('click', () => handleLike(card._id));
////    deleteButton.addEventListener('click', () => handleDelete(card._id));

////    return cardElement;
////};

//const handleLike = (cardId) => {
//    console.log('Лайк на карточке с ID:', cardId);
    // Здесь можно добавить логику для отправки запроса на сервер
//};

//const handleDelete = (cardId) => {
//    console.log('Удаление карточки с ID:', cardId);
    // Здесь можно добавить логику для отправки запроса на сервер
//};

// Редактирование данных профиля
//function handleProfileFormSubmit(evt) {
//    evt.preventDefault();
//    profileTitle.textContent = popupInputName.value;
//    profileDescription.textContent = popupInputDescription.value;

//    setUserInfo(popupInputName.value, popupInputDescription.value);
//    console.log('Новые данные пользователя:', popupInputName.value, popupInputDescription.value);

//    evt.target.reset();
//    closeModal(popupProfileEdit);
//};
// Функция редактирования профайла с помощью формы

