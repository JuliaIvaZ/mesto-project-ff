
// Функция удаления карточки
function deleteCard(card) {
  card.remove();
};

// Функция создания карточки 
function createCard(item) {

  const defaultCard = document.querySelector('#card-template').content.querySelector('.card');  // Темплейт карточки
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
};

// Добавление лайка
function addLike(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

export { createCard, deleteCard, addLike };