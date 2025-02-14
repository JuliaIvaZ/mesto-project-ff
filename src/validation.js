// Регулярные выражения для проверки валидности поля
const nameRegex = /^[a-zA-Zа-яА-я\s\-]$/;     //{2,40}$/;
const descriptionRegex = /^[a-zA-Zа-яА-я\s\-]$/;       //{2,200}$/;
const cardRegex = /^[a-zA-Zа-яА-я\s\-]$/;      //{2,30}$/;

const clearValidation = (formElement, settings) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);

    inputList.forEach((inputElement) => {
        hideInputError(formElement, inputElement, settings); // Очищаем ошибки
        if (inputElement.id === 'input_card_name') {
            inputElement.value = '';
        }
    });

// Обновляем состояние кнопки
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

// Функция для отображения ошибки
const showInputError = (formElement, inputElement, errorMessage, settings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.remove(settings.errorClass);
};

// Функция для скрытия ошибки
const hideInputError = (formElement, inputElement, settings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(settings.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.add(settings.errorClass);
};

// Функция для проверки валидности поля
const checkInputValidity = (formElement, inputElement, settings) => {
    let errorMessage = inputElement.validationMessage;

// TODO:: Добавить проверку на соответствие регулярным выражениям    
     
    
    // Проверка на соответствие регулярным выражениям
    //if (inputElement.id === 'input_name' && !nameRegex.test(inputElement.value)) {
    //    errorMessage = inputElement.dataset.errorMessage;
   // }
   // if (inputElement.id === 'input_description' && !descriptionRegex.test(inputElement.value)) {
   //     errorMessage = inputElement.dataset.errorMessage;
   // }
   // if (inputElement.id === 'input_card_name' && !cardRegex.test(inputElement.value)) {
   //     errorMessage = inputElement.dataset.errorMessage;
   // }
  
    if (inputElement.validity.valid) {
      hideInputError(formElement, inputElement, settings);
    } else {
      showInputError(formElement, inputElement, errorMessage,settings);
    }
  };

// Функция для проверки наличия невалидных полей
const hasInvalidInput = (inputList) => {
    if (!inputList || inputList.length === 0) {
      return true; // Если список пуст, считаем, что есть невалидные поля
    }
    return Array.from(inputList).some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

// Функция для управления состоянием кнопки
const toggleButtonState = (buttonElement, inputList, settings) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(settings.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(settings.inactiveButtonClass); 
        buttonElement.disabled = false;
    };
};

// Функция для установки обработчиков событий
const setEventListeners = (formElement, settings) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);

    toggleButtonState(buttonElement, inputList, settings);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, settings);
            toggleButtonState(buttonElement, inputList, settings);
        });
    });
};

// Функция для включения валидации всех форм
const enableValidation = (settings) => {

    if (!settings || !settings.formSelector || !settings.inputSelector || !settings.submitButtonSelector) {
      console.error('Неверные настройки валидации');
      return;
    }
    const formList = Array.from(document.querySelectorAll(settings.formSelector));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        setEventListeners(formElement, settings);
    });
};

export { enableValidation, clearValidation };