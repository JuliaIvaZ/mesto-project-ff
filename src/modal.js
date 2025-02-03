// Функция открытия модального окна
function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    if (modal) 
    {
        modal.classList.add('popup_is-opened');
        
    };
};

function closeModal(modalSelector) {
    document.querySelectorAll(modalSelector).forEach((modal) => {
        modal.classList.remove('popup_is-opened');
    });
};

export {openModal, closeModal};