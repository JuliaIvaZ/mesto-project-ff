import { deleteUserCard, removeLike, setLike } from "./api";

// Функция создания карточки
function createCard (card, funcImg, funcLike, deleteCard, deleteAbility, userId, likesPlaced) {
  const defaultCard = document.querySelector('#card-template').content;  //.querySelector('.card');  // Темплейт карточки
  const newCard = defaultCard.cloneNode(true); 

  const cardElement = newCard.querySelector('.places__item');
  const cardImage = newCard.querySelector('.card__image');
  const likesCount = newCard.querySelector('.likes__count');
    
  const cardTitle=newCard.querySelector('.card__title');
  const deleteButton=newCard.querySelector('.card__delete-button');                      
  const likeButton=newCard.querySelector('.card__like-button');

  likesCount.textContent = card.likes.length;

  cardImage.alt=card.name;
  cardImage.src=card.link;
  cardTitle.textContent=card.name;

  if (deleteAbility) {
    deleteButton.addEventListener('click', () => deleteCard(card._id, cardElement));
  } 
  else {
    deleteButton.setAttribute('style', 'display: none;');
  };

  cardImage.addEventListener('click', () => funcImg(cardImage.src, cardImage.alt, cardImage.alt));   

  if (likesPlaced) {
    likeButton.classList.add('card__like-button_is-active');
  }

  likeButton.addEventListener('click',() => funcLike(card._id, likeButton, likesCount, userId));

  return newCard;
};

// Функция удаления карточки 
function deleteCard(cardId, сardElement) {
  deleteUserCard(cardId);
  сardElement.remove();
}

 // Функция обработки лайка.
function addLike(cardId, buttonLike, likesCount, userId) {    //amountLikes -------> likesCount
  
  const isLiked = evt.target.classList.contains('card__like-button_is-active');

  if (isLiked) {
    removeLike(cardId)
    .then((card) => {
      likesCount.textContent = card.likes.length;
      //const likesCountServer=card.likes.length;
      //likesCount.textContent=likesCountServer;
    });
      buttonLike.classList.remove('card__like-button_is-active');
  } 
  else {
    setLike(cardId)
    .then((card) => {
      likesCount.textContent = card.likes.length;
      //const likesCountServer=card.likes.length;
      //likesCount.textContent=likesCountServer;
    });
      buttonLike.classList.add('card__like-button_is-active');
    }
};

export { createCard, deleteCard, addLike }