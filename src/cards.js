

export {  makeCard, putLikeCard, funcDelBut }

// @todo: Функция создания карточки

function makeCard (name, link, funcImg, funcLike, funcDelCard, amountLike, availabilityDelete, cardId, userId, likeIsLiked) {
    const template=document.querySelector('#card-template').content;
    const newCard=template.cloneNode(true);
    const cardElement=newCard.querySelector('.places__item');
    const cardImage=newCard.querySelector('.card__image');
    const amountLikes=newCard.querySelector('.amount__likes');
    amountLikes.textContent=amountLike;
    cardImage.alt=name;
    cardImage.src=link;
    const cardTitle=newCard.querySelector('.card__title');
    cardTitle.textContent=name;
    const deleteButton=newCard.querySelector('.card__delete-button');
    if (availabilityDelete) {
        deleteButton.addEventListener('click', () => funcDelCard(cardId, cardElement));
    } else {
        deleteButton.setAttribute('style', 'display: none;');
    };
    cardImage.addEventListener('click', () => funcImg(cardImage.src, cardImage.alt, cardImage.alt));                         
    const buttonLike=newCard.querySelector('.card__like-button');
    if (likeIsLiked) {
        buttonLike.classList.add('card__like-button_is-active');
    }
    buttonLike.addEventListener('click',() => funcLike(cardId, buttonLike, amountLikes, userId));
    return newCard;
};

// @todo: Функция удаления карточки 

function funcDelBut(cardId, сardElement) {
    fetch(`https://mesto.nomoreparties.co/v1/wff-cohort-33/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: '07069f22-afde-49a4-88de-b3e1ba6e8b6f',
        }  
    });
    сardElement.remove();
}

 // Функция обработки лайка.

 function putLikeCard(cardId, buttonLike, amountLikes, userId) {
    if (buttonLike.classList.contains('card__like-button_is-active')) {
        fetch(`https://mesto.nomoreparties.co/v1/wff-cohort-33/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: {
              authorization: '07069f22-afde-49a4-88de-b3e1ba6e8b6f',
            }  
        }).then((response) => {
            return response.json();
          }).then((card) => {
            const amountLikeServer=card.likes.length;
            amountLikes.textContent=amountLikeServer;
          });
        buttonLike.classList.remove('card__like-button_is-active');


    } else {
        fetch(`https://mesto.nomoreparties.co/v1/wff-cohort-33/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: {
              authorization: '07069f22-afde-49a4-88de-b3e1ba6e8b6f',
            }  
        }).then((response) => {
            return response.json();
          }).then((card) => {
            const amountLikeServer=card.likes.length;
            amountLikes.textContent=amountLikeServer;
          });
        buttonLike.classList.add('card__like-button_is-active');
    }

    
}



// Функция удаления карточки
//function deleteCard(card, cardId) {
//  card.remove();
//};

// Добавление лайка
//function addLike(evt, {cardId, setLike, removeLike, cardLikeCount}) {
//  const isLiked = evt.target.classList.contains('card__like-button_is-active');

//  if (isLiked) {
//    removeLike(cardId)
//    .then(newData => {
//      evt.target.classList.remove('card__like-button_is-active');
//      cardLikeCount.textContent = newData.likes.length;
//    })
//    .catch((err) => {
//      console.log('Ошибка при снятии лайка: ',err);
//    });
//  } else {
//    setLike(cardId)
//    .then(newData => {
//      evt.target.classList.add('card__like-button_is-active');
//      cardLikeCount.textContent = newData.likes.length;
//    })
//    .catch((err) => {
//      console.log('Ошибка при постановке лайка: ',err);
//    });
//  }
//  //evt.target.classList.toggle('card__like-button_is-active');
//}

// Функция создания карточки 
//function createCard(element, userId, {deleteCard, handleImageClick, addLike, setLike,removeLike}) {     //openModal, closeModal, handleImageClick, popupImage}) {

//  const defaultCard = document.querySelector('#card-template').content.querySelector('.card');  // Темплейт карточки
//  const card = defaultCard.cloneNode(true); 
//  const cardDeleteButton = card.querySelector('.card__delete-button');
//  const cardImage = card.querySelector('.card__image');
//  const cardDescription = card.querySelector('.card__description');
//  const cardLikeButton = cardDescription.querySelector('.card__like-button');
//  const cardLikeCount = cardDescription.querySelector('.card__like-count');
//  const cardTitle = cardDescription.querySelector('.card__title');
  
//  cardImage.src = element.link;
//  cardImage.alt = element.name;
//  cardTitle.textContent = element.name;
//  element.likes = element.likes || [];
//  const cardId = element._id;

//  cardLikeCount.textContent = element.likes.length;
//  if (element.likes.some(like => like._id === userId)) {
//    cardLikeButton.classList.add('card__like-button_is-active');
//  };

//  cardImage.addEventListener('click', () => {
//    handleImageClick(cardImage, cardTitle);
//  });

//  cardLikeButton.addEventListener('click', () => addLike(evt, {cardId, setLike, removeLike, cardLikeCount}));
//  if (element.owner._id !== userId) {
//    cardDeleteButton.style.display = 'none';
//  } else {
//    cardDeleteButton.addEventListener('click', () => deleteCard(card, cardId));
//  }
  
//  return card; 
//};

//export { createCard, deleteCard, addLike };