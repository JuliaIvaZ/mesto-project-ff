// Функция удаления карточки
function deleteCard(card) {
  card.remove();
};

// Добавление лайка
function addLike(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

// Функция создания карточки 
function createCard(element, userId, {openModal, closeModal, handleImageClick, popupImage}) {

  const defaultCard = document.querySelector('#card-template').content.querySelector('.card');  // Темплейт карточки
  const card = defaultCard.cloneNode(true); 

  const cardImage = card.querySelector('.card__image');
  cardImage.src = element.link;
  cardImage.alt = element.name;

  const cardDescription = card.querySelector('.card__description');
  const cardLikeButton = cardDescription.querySelector('.card__like-button');
  const cardTitle = cardDescription.querySelector('.card__title');
  cardTitle.textContent = element.name;

  //const cardClosePopupButton = popupImage.querySelector('.popup__close');
  const cardDeleteButton = card.querySelector('.card__delete-button');

  cardImage.addEventListener('click', () => {
    handleImageClick(cardImage, cardTitle);
  });
  cardDeleteButton.addEventListener('click', () => deleteCard(card));
  cardLikeButton.addEventListener('click', addLike);
  
  return card; 
};

export { createCard, deleteCard, addLike };