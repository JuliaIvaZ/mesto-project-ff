// Функция удаления карточки
function deleteCard(card, cardId) {
  card.remove();
};

// Добавление лайка
function addLike(evt, {cardId, setLike, removeLike, cardLikeCount}) {
  const isLiked = evt.target.classList.contains('card__like-button_is-active');

  if (isLiked) {
    removeLike(cardId)
    .then(newData => {
      evt.target.classList.remove('card__like-button_is-active');
      cardLikeCount.textContent = newData.likes.length;
    })
    .catch((err) => {
      console.log('Ошибка при снятии лайка: ',err);
    });
  } else {
    setLike(cardId)
    .then(newData => {
      evt.target.classList.add('card__like-button_is-active');
      cardLikeCount.textContent = newData.likes.length;
    })
    .catch((err) => {
      console.log('Ошибка при постановке лайка: ',err);
    });
  }
  //evt.target.classList.toggle('card__like-button_is-active');
}

// Функция создания карточки 
function createCard(element, userId, {deleteCard, handleImageClick, addLike, setLike,removeLike}) {     //openModal, closeModal, handleImageClick, popupImage}) {

  const defaultCard = document.querySelector('#card-template').content.querySelector('.card');  // Темплейт карточки
  const card = defaultCard.cloneNode(true); 
  const cardDeleteButton = card.querySelector('.card__delete-button');
  const cardImage = card.querySelector('.card__image');
  const cardDescription = card.querySelector('.card__description');
  const cardLikeButton = cardDescription.querySelector('.card__like-button');
  const cardLikeCount = cardDescription.querySelector('.card__like-count');
  const cardTitle = cardDescription.querySelector('.card__title');
  
  cardImage.src = element.link;
  cardImage.alt = element.name;
  cardTitle.textContent = element.name;
  element.likes = element.likes || [];
  const cardId = element._id;

  cardLikeCount.textContent = element.likes.length;
  if (element.likes.some(like => like._id === userId)) {
    cardLikeButton.classList.add('card__like-button_is-active');
  };

  cardImage.addEventListener('click', () => {
    handleImageClick(cardImage, cardTitle);
  });

  cardLikeButton.addEventListener('click', () => addLike(evt, {cardId, setLike, removeLike, cardLikeCount}));
  if (element.owner._id !== userId) {
    cardDeleteButton.style.display = 'none';
  } else {
    cardDeleteButton.addEventListener('click', () => deleteCard(card, cardId));
  }
  
  return card; 
};

export { createCard, deleteCard, addLike };