// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const card = cardTemplate.querySelector('.card');

const cardDeleteButton = card.querySelector('.card__delete-button');
const cardImage = card.querySelector('.card__image');
const cardDescription = card.querySelector('.card__description');

const cardTitle = cardDescription.querySelector('.card__title');
const cardLikeButton = cardDescription.querySelector('.card__like-button');

const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки

function createCard(cardImage, cardTitle, deleteCard) {
    let cardContainer = document.createElement('li');
    cardContainer.classList.add('card');

    let containerImage = document.createElement('img');
    containerImage.classList.add('card__image');
    containerImage.src = cardImage.svg;

    let containerButton = document.createElement('button');
    containerButton.classList.add('card__delete-button');
    containerButton.addEventListener('click', deleteCard);

    let containerDescription = document.createElement('div');
    containerDescription.classList.add('card__description');

    let containerTitle = document.createElement('h2');
    containerTitle.classList.add('card__title');
    containerTitle.textContent = cardTitle.h2;

    let containerLikeButton = document.createElement('button');
    containerLikeButton.classList.add('card__like-button');

    containerDescription.append(containerTitle, containerLikeButton);
    cardContainer.append(containerImage, containerButton, containerDescription);

    cardDeleteButton.addEventListener('click', deleteCard);

    placesList.append(cardContainer);
}

// @todo: Функция удаления карточки

function deleteCard() {
    const deleteList = document.querySelector('.card');
    deleteList.remove();
}
// @todo: Вывести карточки на страницу

for (let i = 0; i < initialCards.length; i++) {
    cardImage.svg = initialCards[i].link;
    cardTitle.h2 = initialCards[i].name;
    createCard(cardImage, cardTitle, deleteCard);
}