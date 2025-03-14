import { deleteUserCard, removeLike, setLike } from "./api";

// Функция создания карточки
function createCard (card, funcImg, funcLike, deleteCard, userId) {
  const defaultCard = document.querySelector('#card-template').content;  // Темплейт карточки
  const newCard = defaultCard.cloneNode(true); 

  const cardElement = newCard.querySelector('.places__item');
  const cardImage = newCard.querySelector('.card__image');
  const likesCount = newCard.querySelector('.likes__count');
    
  const cardTitle=newCard.querySelector('.card__title');
  const deleteButton=newCard.querySelector('.card__delete-button');                      
  const likeButton=newCard.querySelector('.card__like-button');

  likesCount.textContent = card.likes.length;

  cardImage.alt = card.name;
  cardImage.src = card.link;
  cardTitle.textContent = card.name;

  const deleteAbility = card.owner._id === userId;
  if (deleteAbility) {
    deleteButton.addEventListener('click', () => deleteCard(card._id, cardElement));
  } 
  else {
    deleteButton.setAttribute('style', 'display: none;');
  };
  
  const likesPlaced = card.likes.some((like) => like._id === userId)
  if (likesPlaced) {
    likeButton.classList.add('card__like-button_is-active');
  }

  cardImage.addEventListener('click', () => funcImg(cardImage.src, cardImage.alt, cardImage.alt)); 
  likeButton.addEventListener('click',() => funcLike(card._id, likeButton, likesCount, userId));

  return newCard;
};

// Функция удаления карточки 
function deleteCard(cardId, сardElement) {
  deleteUserCard(cardId)
  .then(() => {
    сardElement.remove(); // Удаляем карточку из DOM только после успешного удаления на сервере
  })
  .catch((err) => {
    console.error('Ошибка при удалении карточки:', err);
  });
}

 // Функция обработки лайка.
function addLike(cardId, buttonLike, likesCount, userId) {   
  const isLiked = buttonLike.classList.contains('card__like-button_is-active');

  const likeMethod = isLiked ? removeLike : setLike;
  likeMethod(cardId) 
        .then((card) => { 
          likesCount.textContent = card.likes.length; 
          buttonLike.classList.toggle('card__like-button_is-active');
        })
  .catch(err => console.log(err));
};


export { createCard, deleteCard, addLike }