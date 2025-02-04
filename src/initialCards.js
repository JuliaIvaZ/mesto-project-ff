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

export { initialCards };