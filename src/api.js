//import { get } from "jquery";

//let userName, userAbout, userAvatar, userId, cohort;

const getUserInfo = () => {
    return fetch ('https://nomoreparties.co/v1/wff-cohort-33/users/me', {
        method: 'GET',
        headers: {
            authorization: '07069f22-afde-49a4-88de-b3e1ba6e8b6f',
            'Content-Type': 'application/json'
        }
    })
    .then(res => { 
        if (!res.ok) {
            throw new Error(`Ошибка: ${res.status}`);
        }
        return res.json() })
    .then(data => {
        console.log('Данные пользователя_00:  ', data);
        return data;
    })
    .catch(err => {
        console.log('Ошибка при получении данных:', err);
        throw err;
    });
};

const getCards = () => {
    return fetch ('https://nomoreparties.co/v1/wff-cohort-33/cards', {
        method: 'GET',
        headers: {
            authorization: '07069f22-afde-49a4-88de-b3e1ba6e8b6f',
            'Content-Type': 'application/json'
        }
    })
    .then(res => { 
        if (!res.ok) {
            throw new Error(`Ошибка: ${res.status}`);
        }
        return res.json() })
    .then(data => {
            console.log('Данные пользователя:', data); // Проверяем данные
            return data;
        })
    .catch(err => {
        console.log('Ошибка при получении данных:', err);
        throw err;
    });
};

const setUserInfo = (userName, userAbout) => {
    return fetch ('https://nomoreparties.co/v1/wff-cohort-33/users/me', {
        method: 'PATCH',
        headers: {
            authorization: '07069f22-afde-49a4-88de-b3e1ba6e8b6f',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            about: userAbout
        })
    });

};

const setNewCard = (cardName, cardLink) => {
    return fetch ('https://nomoreparties.co/v1/wff-cohort-33/cards', {
        method: 'POST',
        headers: {
            authorization: '07069f22-afde-49a4-88de-b3e1ba6e8b6f',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: cardName,
            link: cardLink
        })
    })
};

const setLike = (cardId) => {
    return fetch (`https://nomoreparties.co/v1/wff-cohort-33/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: {
            authorization: '07069f22-afde-49a4-88de-b3e1ba6e8b6f'
        }
    })
    .then ((res) => {
        if (!res.ok) {
            throw new Error(`Ошибка постановки лайка_1: ${res.status}`);
        }
        return res.json()
    })
    .catch (err => console.log(err));
};

const removeLike = (cardId) => {
    return fetch (`https://nomoreparties.co/v1/wff-cohort-33/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: {
            authorization: '07069f22-afde-49a4-88de-b3e1ba6e8b6f'
        }
    })
    .then ((res) => {
        if (!res.ok) {
            throw new Error(`Ошибка снятия лайка_1: ${res.status}`);
        }
        return res.json()
    })
    .catch (err => console.log(err));
};

export { getUserInfo, getCards, setUserInfo, setNewCard, setLike, removeLike };
