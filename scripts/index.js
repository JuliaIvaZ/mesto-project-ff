// @todo: Темплейт карточки
const defaultCard = document.querySelector('#card-template').content.querySelector('.card');

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
let cardData = {};

// @todo: Функция создания карточки
function createCard(cardData, deleteCard) {
    const card = defaultCard.cloneNode(true); 

    const cardImage = card.querySelector('.card__image');
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;

    const cardDeleteButton = card.querySelector('.card__delete-button');
    cardDeleteButton.addEventListener('click', () => deleteCard(card));

    const cardDescription = card.querySelector('.card__description');

    const cardTitle = cardDescription.querySelector('.card__title');
    cardTitle.textContent = cardData.name;

    const cardLikeButton = cardDescription.querySelector('.card__like-button');

    cardDescription.append(cardTitle, cardLikeButton);
    card.append(cardImage, cardDeleteButton, cardDescription);

    return card; 
}

// @todo: Функция удаления карточки
function deleteCard(card) {
    card.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
    cardData.link = item.link;
    cardData.name = item.name;
    const cardElement = createCard(cardData, deleteCard);
    placesList.append(cardElement);
});