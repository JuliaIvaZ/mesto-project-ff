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
        console.log('Данные пользователя_33:  ', data);
        return data;
    })
    .catch(err => {
        console.log('Ошибка при получении данных:', err);
        throw err;
    });
};

//const userUpdateProfile = (data) => {
//    profileTitle.textContent = data.name;
//    profileDescription.textContent = data.about;
//    profileAvatar.src = data.avatar;
//    profileId = data._id;
//    profileCohort = data.cohort;
//};

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


export { getUserInfo, getCards };
