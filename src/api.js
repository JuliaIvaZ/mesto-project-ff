const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-31',
    headers: {
      authorization: '6c923aa8-3b4d-40ea-8d28-9c9e04b6301a',
      'Content-Type': 'application/json'
    }
  };

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
        userName = data.name;
        userAbout = data.about;
        userAvatar = data.avatar;
        userId = data._id;
        cohort = data.cohort;

        console.log(userName, userAbout, userAvatar, userId, cohort);
    })
    .catch(err => {
        console.log('Ошибка при получении данных:', err);
        throw err;
    });
};

const userUpdateProfile = (data) => {
    profileTitle.textContent = data.name;
    profileDescription.textContent = data.about;
    profileAvatar.src = data.avatar;
};

export { getUserInfo, userUpdateProfile };



  
const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }