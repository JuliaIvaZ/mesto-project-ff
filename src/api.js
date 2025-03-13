function getData (res) {
    if (!res.ok)
        return Promise.reject(`Ошибка: ${res.status}`)
    return res.json();
};

const config = {
    baseURL: 'https://mesto.nomoreparties.co/v1/wff-cohort-33',
    headers: {
      authorization: '07069f22-afde-49a4-88de-b3e1ba6e8b6f',
      'Content-Type': 'application/json'
    }
  }
  
const getInitialCards = () => {
      return Promise.all([
        fetch(`${config.baseURL}/cards`, {
          headers: {
            authorization: `${config.headers.authorization}`
          }
        }),
        fetch(`${config.baseURL}/users/me`, {
          headers: {
            authorization: `${config.headers.authorization}`
          }
        })
      ])
  }

  // Редактирование профиля
const setUserInfo = (userName, userAbout) => {
   return fetch (`${config.baseURL}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
//        {      authorization: `${config.headers.authorization}`,
//            'Content-Type': `${config.headers['Content-Type']}`
//        },
        body: JSON.stringify({
            name: userName,
            about: userAbout
        })
    })
    .then ((data) => {
        console.log(data)})
    .then(getData);
};

//  export const fetchRedProfile = () => {
//    const nameInput = document.querySelector('.popup__input_type_name');
//    const jobInput = document.querySelector('.popup__input_type_description');
//    return fetch(`${config.baseUrl}/users/me`, {
//        method: 'PATCH',
//        headers: {
//          authorization: `${config.headers.authorization}`,
//          'Content-Type': `${config.headers['Content-Type']}`
//        },
//        body: JSON.stringify({
//          name: `${nameInput.value}`,
//          about: `${jobInput.value}`
//        })
//      })
//  }

// Создание новой карточки
const setNewCard = (card) => {
    return fetch (`${config.baseURL}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: card.name,
            link: card.link
        })
    })
    .then ((data) => {
        console.log(data)})
    .then(getData);
};

//  export const fetchAddNewCard = () => {
//    const placeName=document.querySelector('.popup__input_type_card-name');
//    const linkCard=document.querySelector('.popup__input_type_url');
//    return fetch(`${config.baseUrl}/cards`, {
//        method: 'POST',
//        headers: {
//          authorization: `${config.headers.authorization}`,
//          'Content-Type': `${config.headers['Content-Type']}`
//        },
//        body: JSON.stringify({
//          name: `${placeName.value}`,
//          link: `${linkCard.value}`
//        })
//      })
//  }

// Изменение аватара
const setAvatar = (avatarLink) => {
    return fetch (`${config.baseURL}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: avatarLink
        })
    })
    .then ((data) => {
        console.log(data)})
    .then(getData);
};

//  export const fetchRedAvatar = () => {
//    const inputAvatarLink=document.querySelector('.popup_type_new-avatar .popup__input_type_url');
//    return fetch(`${config.baseUrl}/users/me/avatar`, {
//        method: 'PATCH',
//        headers: {
//          authorization: `${config.headers.authorization}`,
//          'Content-Type': `${config.headers['Content-Type']}`
//        },
//        body: JSON.stringify({
//          avatar: `${inputAvatarLink.value}`,
//        })
//      })
//  }

// Удаление своей карточки
const deleteUserCard = (cardId) => {
    return fetch (`${config.baseURL}/cards/${cardId}`, {
        method: 'DELETE',
        headers: get_headers
    })
};


// Постановка лайка
const setLike = (cardId) => {
    return fetch (`${config.baseURL}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: config.headers
    })
    .then((res) => {
        return res.json();
    })
};

// Удаление лайка
const removeLike = (cardId) => {
    return fetch (`${config.baseURL}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    })
    .then((res) => {
        return res.json();
    })
};

export { getInitialCards, setUserInfo, setNewCard, setAvatar, deleteUserCard, removeLike, setLike };


