import { get } from "jquery";

let userName, userAbout, userAvatar, userId, cohort;

const getUserInfo = () => {
    return fetch ('https://nomoreparties.co/v1/wff-cohort-31/users/me', {
        method: 'GET',
        headers: {
            authorization: '6c923aa8-3b4d-40ea-8d28-9c9e04b6301a',
            'Content-Type': 'application/json'
        }
    })
    .then(res => { 
        if (!res.ok) {
            throw new Error(`Ошибка: ${res.status}`);
        }
        return res.json() })
    .then(data => {
        console.log('Данные пользователя_66:  ', data);
        return data;
    })
    .catch(err => {
        console.log('Ошибка при получении данных:', err);
        throw err;
    });
};

const getCards = () => {
    return fetch ('https://nomoreparties.co/v1/wff-cohort-31/cards', {
        method: 'GET',
        headers: {
            authorization: '6c923aa8-3b4d-40ea-8d28-9c9e04b6301a',
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
    return fetch ('https://nomoreparties.co/v1/wff-cohort-31/users/me', {
        method: 'PATCH',
        headers: {
            authorization: '6c923aa8-3b4d-40ea-8d28-9c9e04b6301a',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            about: userAbout
        })
    });

};

const setNewCard = (cardName, cardLink) => {
    return fetch ('https://nomoreparties.co/v1/wff-cohort-31/cards', {
        method: 'POST',
        headers: {
            authorization: '6c923aa8-3b4d-40ea-8d28-9c9e04b6301a',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: cardName,
            link: cardLink
        })
    })
};

export { getUserInfo, getCards, setUserInfo, setNewCard };
