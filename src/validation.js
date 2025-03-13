//const checkInputValidity = (formElement, inputElement, arr) => {
//  if (inputElement.validity.patternMismatch) {
      // встроенный метод setCustomValidity принимает на вход строку
      // и заменяет ею стандартное сообщение об ошибке
//    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
//  } 
//  else {
          // если передать пустую строку, то будут доступны
          // стандартные браузерные сообщения
//    inputElement.setCustomValidity("");
//  }
//  if (!inputElement.validity.valid) {
      // теперь, если ошибка вызвана регулярным выражением,
      // переменная validationMessage хранит наше кастомное сообщение
//    showInputError(formElement, inputElement, inputElement.validationMessage, arr);
//  } 
//  else {
//    hideInputError(formElement, inputElement, arr);
//  }
//};


// Функция для проверки валидности поля
const checkInputValidity = (formElement, inputElement, settings) => {
  let errorMessage = inputElement.validationMessage;
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, settings);
  } else {
    showInputError(formElement, inputElement, errorMessage,settings);
  }
};

// Функция для отображения ошибки
const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.remove(settings.errorClass);  // ------> .add(settings.errorClass);????????
};

// Функция для скрытия ошибки
const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.add(settings.errorClass);     // ------> .remove(settings.errorClass);?????????
};
  
// функция активации и деактивации кнопки сохранить
//function toggleButtonState(formElement, inputList, settings) {
//  const saveButton = formElement.querySelector(settings.submitButtonSelector);
//  const element = inputList.some((inputElement) => {
      // Если поле не валидно, колбэк вернёт true
      // Обход массива прекратится и вся функция
//    return inputElement.validity.patternMismatch || !inputElement.validity.valid;
//  });
// if (element === true) {
//    saveButton.setAttribute('disabled', true);
//    saveButton.classList.add(settings.inactiveButtonClass);
//  } 
//  else {
//    saveButton.setAttribute('enabled', true);
//    saveButton.classList.remove(settings.inactiveButtonClass);
//  }
//};

// Функция для управления состоянием кнопки
const toggleButtonState = (buttonElement, inputList, settings) => {
  const saveButton = buttonElement.querySelector(settings.submitButtonSelector);
  if (hasInvalidInput(inputList)) {
    saveButton.classList.add(settings.inactiveButtonClass);
    saveButton.disabled = true;
  } else {
    saveButton.classList.remove(settings.inactiveButtonClass); 
    saveButton.disabled = false;
  };
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

//function setEventListeners(formElement, arr) {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
//  const inputList = Array.from(formElement.querySelectorAll(arr.inputSelector));
    // Обойдём все элементы полученной коллекции
//  inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
//    inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
//      checkInputValidity(formElement, inputElement, arr);
//      toggleButtonState(formElement, inputList, arr);
//    });
//  });
//}; 

// Функция для включения валидации всех форм
const enableValidation = (settings) => {
//    if (!settings || !settings.formSelector || !settings.inputSelector || !settings.submitButtonSelector) {
//      console.error('Неверные настройки валидации');
//      return;
//    }
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, settings);
  });
};
  
//function enableValidation(arr) {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
//  const formList = Array.from(document.querySelectorAll(arr.formSelector));
    // Переберём полученную коллекцию
//  formList.forEach((formElement) => {
      // Для каждой формы вызовем функцию setEventListeners,
      // передав ей элемент формы
//    setEventListeners(formElement, arr);
//  });
//};
  
// Функция обнуления поля ошибок при закрытии модального окна
  
//function clearValidation(formElement, arr) {
//  const inputList = Array.from(formElement.querySelectorAll(arr.inputSelector));
//  toggleButtonState(formElement, inputList, arr);
//  inputList.forEach((inputElement) => {
//    checkInputValidity(formElement, inputElement, arr);
//  });    
//};

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



export { enableValidation, clearValidation };