const ArkhyzImage = new URL('./images/arkhyz.jpg', import.meta.url);
const ChelyabinskImage = new URL('./images/chelyabinsk-oblast.jpg', import.meta.url);
const IvanovoImage = new URL ('./images/ivanovo.jpg', import.meta.url);
const KamchatkaImage = new URL ('./images/kamchatka.jpg', import.meta.url);
const KholmogorskyRayonImage = new URL ('./images/kholmogorsky-rayon.jpg', import.meta.url);
const BaikalImage = new URL ('./images/baikal.jpg', import.meta.url);

const initialCards = [
    {
      name: "Архыз",
      link: ArkhyzImage
    },
    {
      name: "Челябинская область",
      link: ChelyabinskImage
    },
    {
      name: "Иваново",
      link: IvanovoImage
    },
    {
      name: "Камчатка",
      link: KamchatkaImage
    },
    {
      name: "Холмогорский район",
      link: KholmogorskyRayonImage
    },
    {
      name: "Байкал",
      link: BaikalImage
    }
];

// @todo: Функция удаления карточки
function deleteCard(card) {
  card.remove();
};

// @todo: Функция создания карточки 
function createCard(item, deleteCard) {
  
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

export { initialCards, createCard, deleteCard };