const BASE_URL = 'https://nomoreparties.co/v1/wff-cohort-33';
const get_headers = {
    authorization: '07069f22-afde-49a4-88de-b3e1ba6e8b6f',
    'Content-Type': 'application/json'
};

function getData (res) {
    if (!res.ok)
        return Promise.reject(`Ошибка: ${res.status}`)
    return res.json();
};

// Данные пользователя
const getUserInfo = () => {
    return fetch (`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: get_headers
    })
    .then ((data) => {
        console.log(data)})
    .then(getData)
   
};

// Получение карточек
const getCards = () => {
    return fetch (`${BASE_URL}/cards`, {
        method: 'GET',
        headers: get_headers
    })
    .then(getData)
};

// Редактирование профиля
const setUserInfo = (userName, userAbout) => {
    return fetch (`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: get_headers,
        body: JSON.stringify({
            name: userName,
            about: userAbout
        })
    })
    .then ((data) => {
        console.log(data)})
    .then(getData);
};

// Создание новой карточки
const setNewCard = (cardName, cardLink) => {
    return fetch (`${BASE_URL}/cards`, {
        method: 'POST',
        headers: get_headers,
        body: JSON.stringify({
            name: cardName,
            link: cardLink
        })
    })
    .then ((data) => {
        console.log(data)})
    .then(getData);
};

// Удаление своей карточки
const deleteUserCard = (cardId) => {
    return fetch (`${BASE_URL}/cards/${cardId}`, {
        method: 'DELETE',
        headers: get_headers
    })
    .then(getData);
};

// Постановка лайка
const setLike = (cardId) => {
    return fetch (`${BASE_URL}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: get_headers
    })
    .then(getData);
};

// Удаление лайка
const removeLike = (cardId) => {
    return fetch (`${BASE_URL}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: get_headers
    })
    .then(getData)
};

export { getUserInfo, getCards, setUserInfo, setNewCard, deleteUserCard, setLike, removeLike };


  