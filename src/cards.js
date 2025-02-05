// Функция удаления карточки
function deleteCard(card) {
  card.remove();
};

// Добавление лайка
function addLike(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

// Функция создания карточки 
function createCard(item, openModal, closeModal, openImage, popupImage) {

  const defaultCard = document.querySelector('#card-template').content.querySelector('.card');  // Темплейт карточки
  const card = defaultCard.cloneNode(true); 

  const cardImage = card.querySelector('.card__image');
  cardImage.src = item.link;
  cardImage.alt = item.name;

  const cardDescription = card.querySelector('.card__description');
  const cardLikeButton = cardDescription.querySelector('.card__like-button');
  const cardTitle = cardDescription.querySelector('.card__title');
  cardTitle.textContent = item.name;

  const cardClosePopupButton = popupImage.querySelector('.popup__close');
  const cardDeleteButton = card.querySelector('.card__delete-button');

  cardImage.addEventListener('click', () => {
    openModal(cardImage);
    openImage(cardImage, cardTitle);
  });
  cardDeleteButton.addEventListener('click', () => deleteCard(card));
  cardLikeButton.addEventListener('click', addLike);
  cardClosePopupButton.addEventListener('click', () => closeModal(popupImage));

  return card; 
};

export { createCard, deleteCard, addLike };