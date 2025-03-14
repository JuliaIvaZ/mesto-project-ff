// Функция для проверки валидности поля
const checkInputValidity = (formElement, inputElement, settings) => {
  let errorMessage = inputElement.validationMessage;
  if (inputElement.validity.patternMissmatch && inputElement.dataset.errorMessage) {
    errorMessage = inputElement.dataset.errorMessage;
  } else if (inputElement.validity.tooShort) {
    errorMessage = `Минимальное количество символов: ${inputElement.minLength}. 
    Длина текста сейчас: ${inputElement.value.length} символ${inputElement.value.length === 1 ? '' : 'а'}.`;
  }

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
  errorElement.classList.remove(settings.errorClass); 
};

// Функция для скрытия ошибки
const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.add(settings.errorClass); 
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

// Функция для проверки наличия невалидных полей
const hasInvalidInput = (inputList) => {
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

// Функция для включения валидации всех форм
const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, settings);
  });
};

const clearValidation = (formElement, settings) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);

    inputList.forEach((inputElement) => {
        hideInputError(formElement, inputElement, settings); 
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