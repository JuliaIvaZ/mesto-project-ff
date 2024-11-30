// @todo: Темплейт карточки
const defaultCard = document.querySelector('#card-template').content.querySelector('.card');

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(item, deleteCard) {
    const card = defaultCard.cloneNode(true); 

    const cardImage = card.querySelector('.card__image');
    cardImage.src = item.link;
    cardImage.alt = item.name;

    const cardDeleteButton = card.querySelector('.card__delete-button');
    cardDeleteButton.addEventListener('click', () => deleteCard(card));

    const cardDescription = card.querySelector('.card__description');

    const cardTitle = cardDescription.querySelector('.card__title');
    cardTitle.textContent = item.name;

    const cardLikeButton = cardDescription.querySelector('.card__like-button');

    return card; 
}

// @todo: Функция удаления карточки
function deleteCard(card) {
    card.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
    const cardElement = createCard(item, deleteCard);
    placesList.append(cardElement);
});