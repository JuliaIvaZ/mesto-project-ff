const config = {
    baseURL: 'https://mesto.nomoreparties.co/v1/wff-cohort-33',
    headers: {
      authorization: '07069f22-afde-49a4-88de-b3e1ba6e8b6f',
      'Content-Type': 'application/json'
    }
  }

  // Функция для обработки ответа
const handleResponse = (res, errorMessage = 'Ошибка при выполнении запроса') => {
  if (res.ok) {
    return res.json(); // Если ответ успешный, возвращаем JSON
  }
  return Promise.reject(`${errorMessage}: ${res.status}`); // Если ответ не успешный, возвращаем ошибку
};

const getCards = () => {
  return fetch(`${config.baseURL}/cards`, {
    headers: {
      authorization: `${config.headers.authorization}`
    },
  }).then((res) => handleResponse(res, 'Ошибка загрузки карточек'));
};

const getUserInfo = () => {
  return fetch(`${config.baseURL}/users/me`, {
    headers: {
      authorization: `${config.headers.authorization}`
    },
  }).then((res) => handleResponse(res, 'Ошибка загрузки данных профиля'));
};
  
const getInitialData = () => {
  return Promise.all([getCards(), getUserInfo()])
};

  // Редактирование профиля
const setUserInfo = (userName, userAbout) => {
  return fetch (`${config.baseURL}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: userName,
      about: userAbout
    })
  })
  .then ((res) => handleResponse(res, 'Ошибка редактирования профиля'));
};

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
  .then ((res) => handleResponse(res, 'Ошибка создания карточки'));
};

// Изменение аватара
const setAvatar = (avatarLink) => {
  return fetch (`${config.baseURL}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarLink
    })
  })
  .then ((res) => handleResponse(res, 'Ошибка изменения аватара'));
};

// Удаление своей карточки
const deleteUserCard = (cardId) => {
    return fetch (`${config.baseURL}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    })
    .then((res) => handleResponse(res, 'Ошибка удаления карточки'));
};

// Постановка лайка
const setLike = (cardId) => {
    return fetch(`${config.baseURL}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: config.headers
    })
      .then((res) => handleResponse(res, 'Ошибка постановки лайка'));
  };

// Удаление лайка
const removeLike = (cardId) => {
    return fetch (`${config.baseURL}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    })
    .then((res) => handleResponse(res, 'Ошибка удаления лайка'));
  };

export { getInitialData, setUserInfo, setNewCard, setAvatar, deleteUserCard, removeLike, setLike };


