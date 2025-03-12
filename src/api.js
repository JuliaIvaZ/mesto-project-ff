//const BASE_URL = 'https://nomoreparties.co/v1/wff-cohort-33';
//const get_headers = {
//    authorization: '07069f22-afde-49a4-88de-b3e1ba6e8b6f',
//    'Content-Type': 'application/json'
//};

//function getData (res) {
//    if (!res.ok)
//        return Promise.reject(`Ошибка: ${res.status}`)
//    return res.json();
//};


import { makeCard } from './cards.js';


const config = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/wff-cohort-33',
    headers: {
      authorization: '07069f22-afde-49a4-88de-b3e1ba6e8b6f',
      'Content-Type': 'application/json'
    }
  }
  
  export const getInitialCards = () => {
      return Promise.all([
        fetch(`${config.baseUrl}/cards`, {
          headers: {
            authorization: `${config.headers.authorization}`
          }
        }),
        fetch(`${config.baseUrl}/users/me`, {
          headers: {
            authorization: `${config.headers.authorization}`
          }
        })
      ])
  }

  export const fetchRedProfile = () => {
    const nameInput = document.querySelector('.popup__input_type_name');
    const jobInput = document.querySelector('.popup__input_type_description');
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: {
          authorization: `${config.headers.authorization}`,
          'Content-Type': `${config.headers['Content-Type']}`
        },
        body: JSON.stringify({
          name: `${nameInput.value}`,
          about: `${jobInput.value}`
        })
      })
  }

  export const fetchAddNewCard = () => {
    const placeName=document.querySelector('.popup__input_type_card-name');
    const linkCard=document.querySelector('.popup__input_type_url');
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: {
          authorization: `${config.headers.authorization}`,
          'Content-Type': `${config.headers['Content-Type']}`
        },
        body: JSON.stringify({
          name: `${placeName.value}`,
          link: `${linkCard.value}`
        })
      })
  }

  export const fetchRedAvatar = () => {
    const inputAvatarLink=document.querySelector('.popup_type_new-avatar .popup__input_type_url');
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
          authorization: `${config.headers.authorization}`,
          'Content-Type': `${config.headers['Content-Type']}`
        },
        body: JSON.stringify({
          avatar: `${inputAvatarLink.value}`,
        })
      })
  }

// Редактирование профиля
//const setUserInfo = (userName, userAbout) => {
//   return fetch (`${BASE_URL}/users/me`, {
//        method: 'PATCH',
//        headers: get_headers,
//        body: JSON.stringify({
//            name: userName,
//            about: userAbout
//        })
//    })
//    .then ((data) => {
//        console.log(data)})
//    .then(getData);
//};

// Создание новой карточки
//const setNewCard = (cardName, cardLink) => {
//    return fetch (`${BASE_URL}/cards`, {
//        method: 'POST',
//        headers: get_headers,
//        body: JSON.stringify({
//            name: cardName,
//            link: cardLink
//        })
//    })
//    .then ((data) => {
//        console.log(data)})
//    .then(getData);
//};

// Удаление своей карточки
//const deleteUserCard = (cardId) => {
//    return fetch (`${BASE_URL}/cards/${cardId}`, {
//        method: 'DELETE',
//        headers: get_headers
//    })
//    .then(getData);
//};

// Постановка лайка
//const setLike = (cardId) => {
//    return fetch (`${BASE_URL}/cards/likes/${cardId}`, {
//        method: 'PUT',
//        headers: get_headers
//    })
//    .then(getData);
//};

// Удаление лайка
//const removeLike = (cardId) => {
//    return fetch (`${BASE_URL}/cards/likes/${cardId}`, {
//        method: 'DELETE',
//        headers: get_headers
//    })
//    .then(getData)
//};

//export { getUserInfo, getCards, setUserInfo, setNewCard, deleteUserCard, setLike, removeLike };

//const getUserInfo = () => {
//    return fetch ('https://nomoreparties.co/v1/wff-cohort-31/users/me', {
//        method: 'GET',
//        headers: {
//            authorization: '6c923aa8-3b4d-40ea-8d28-9c9e04b6301a',
//            'Content-Type': 'application/json'
//        }
//    })
//    .then(res => { 
//        if (!res.ok) {
//            throw new Error(`Ошибка: ${res.status}`);/
//        }
//        return res.json() })
//    .then(data => {
//        console.log('Данные пользователя_33:  ', data);
//        return data;
//    })
//    .catch(err => {
//        console.log('Ошибка при получении данных:', err);
//        throw err;
//    });
//};

//const getCards = () => {
//    return fetch ('https://nomoreparties.co/v1/wff-cohort-31/cards', {
//        method: 'GET',
//        headers: {
//            authorization: '6c923aa8-3b4d-40ea-8d28-9c9e04b6301a',
//            'Content-Type': 'application/json'
//        }
//    })
//    .then(res => { 
//        if (!res.ok) {
//            throw new Error(`Ошибка: ${res.status}`);
//        }
//        return res.json() })
//    .then(data => {
//            console.log('Данные пользователя:', data); // Проверяем данные
//            return data;
//        })
//    .catch(err => {
//        console.log('Ошибка при получении данных:', err);
//        throw err;
//    });
//};
