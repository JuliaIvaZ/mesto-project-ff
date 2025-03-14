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
        body: JSON.stringify({
            name: userName,
            about: userAbout
        })
    })
    .then ((res) => {
        if (!res.ok) {
            throw new Error (`Ошибка редактирования профиля: ${res.status}`)
        }
        return res.json();
    });
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
    .then ((res) => {
        if (!res.ok) {
            throw new Error (`Ошибка создания карточки: ${res.status}`)
        }
        return res.json();
    });
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
    .then ((res) => {
        if (!res.ok) {
            throw new Error (`Ошибка изменения аватара: ${res.status}`)
        };
        return res.json();
    });
};

// Удаление своей карточки
const deleteUserCard = (cardId) => {
    return fetch (`${config.baseURL}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    })
    .then((res) => {
        if (!res.ok) {
          throw new Error(`Ошибка удаления карточки: ${res.status}`);
        }
        return res.json();
      });
};

// Постановка лайка
const setLike = (cardId) => {
    return fetch(`${config.baseURL}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: config.headers
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Ошибка постановки лайка: ${res.status}`);
        }
        return res.json();
      });
  };

// Удаление лайка
const removeLike = (cardId) => {
    return fetch (`${config.baseURL}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    })
    .then((res) => {
        if (!res.ok) {
          throw new Error(`Ошибка удаления лайка: ${res.status}`);
        }
        return res.json();
      });
  };

export { getInitialCards, setUserInfo, setNewCard, setAvatar, deleteUserCard, removeLike, setLike };


