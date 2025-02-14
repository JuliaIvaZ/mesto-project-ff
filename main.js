(()=>{"use strict";function e(e){"Escape"===e.key&&n(document.querySelector(".popup_is-opened"))}function t(t){t.classList.add("popup_is-animated"),setTimeout((function(){t.classList.add("popup_is-opened")}),1),document.addEventListener("keydown",e)}function n(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",e)}var o,r,c,i,u,a=function(){return fetch("https://nomoreparties.co/v1/wff-cohort-31/users/me",{method:"GET",headers:{authorization:"6c923aa8-3b4d-40ea-8d28-9c9e04b6301a","Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Ошибка: ".concat(e.status));return e.json()})).then((function(e){o=e.name,r=e.about,c=e.avatar,i=e._id,u=e.cohort,console.log(o,r,c,i,u)})).catch((function(e){throw console.log("Ошибка при получении данных:",e),e}))},l=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);n.forEach((function(n){s(e,n,t),"input_card_name"===n.id&&(n.value="")})),p(n)?(o.classList.add(t.inactiveButtonClass),o.disabled=!0):(o.classList.remove(t.inactiveButtonClass),o.disabled=!1)},s=function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.textContent="",o.classList.add(n.errorClass)},p=function(e){return!e||0===e.length||Array.from(e).some((function(e){return!e.validity.valid}))},d=function(e,t,n){p(t)?(e.classList.add(n.inactiveButtonClass),e.disabled=!0):(e.classList.remove(n.inactiveButtonClass),e.disabled=!1)};function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var _,m=document.querySelector(".places__list"),y=document.querySelector(".profile__edit-button"),v=document.querySelector(".profile__add-button"),S=document.querySelector(".profile__description"),h=document.querySelector(".profile__title"),b=(document.querySelector(".profile__image"),document.querySelector(".popup__input_type_name")),q=document.querySelector(".popup__input_type_description"),L=document.querySelector(".popup_type_edit"),E=document.querySelector(".popup_type_new-card"),g=document.querySelectorAll(".popup"),C=document.querySelector("#card-template").content.cloneNode(!0).children[0],w=C.querySelector(".card__image"),A=C.querySelector(".card__title"),k=C.querySelector(".card__like-button"),x=C.querySelector(".card__delete-button"),B=document.forms["edit-profile"],j=document.forms["new-place"],T=j.querySelector(".popup__input_type_card-name"),D=j.querySelector(".popup__input_type_url"),I=(document.querySelector(".popup_type_image"),document.querySelector(".popup__content_content_image")),O=(I.querySelector(".popup__image"),I.querySelector(".popup__caption"),I.querySelector(".popup__close")),z={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"button__inactive",inputErrorClass:"popup__input_invalid",errorClass:"input__error_hidden"};(_=z)&&_.formSelector&&_.inputSelector&&_.submitButtonSelector?Array.from(document.querySelectorAll(_.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);d(o,n,t),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){var o=t.validationMessage;t.validity.valid?s(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.remove(o.errorClass)}(e,t,o,n)}(e,r,t),d(o,n,t)}))}))}(e,_)})):console.error("Неверные настройки валидации"),a().then((function(e){e&&function(e){profileTitle.textContent=e.name,profileDescription.textContent=e.about,profileAvatar.src=e.avatar}(e)})).catch((function(e){return console.log("Ошибка: ",e)})),Promise.all([a(),fetch("https://nomoreparties.co/v1/cohortId/cards",{method:"GET",headers:{authorization:"6c923aa8-3b4d-40ea-8d28-9c9e04b6301a","Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Ошибка: ".concat(e.status));return e.json()})).catch((function(e){throw console.log("Ошибка при получении данных:",e),e}))]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,i,u=[],a=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(o=c.call(n)).done)&&(u.push(o.value),u.length!==t);a=!0);}catch(e){l=!0,r=e}finally{try{if(!a&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw r}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],c=o[1],i=r._id;G(c,i)})).catch((function(e){throw console.log("Ошибка:",e),e}));var G=function(e,t){e.forEach((function(e){var n=M(e,t);m.prepend(n)}))},M=function(e,t){return w.src=e.link,w.alt=e.name,A.textContent=e.name,e.owner._id!==t&&(x.style.display="none"),e.likes.some((function(e){return e._id===t}))&&k.classList.add("card__like-button_active"),k.addEventListener("click",(function(){return N(e._id)})),x.addEventListener("click",(function(){return P(e._id)})),C},N=function(e){console.log("Лайк на карточке с ID:",e)},P=function(e){console.log("Удаление карточки с ID:",e)};y.addEventListener("click",(function(){t(L),b.value=h.textContent,q.value=S.textContent,l(B,z)})),v.addEventListener("click",(function(){t(E),l(j,z)})),g.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-opened")&&n(e),t.target.classList.contains(O.classList)&&n(e)}))})),j.addEventListener("submit",(function(e){e.preventDefault();var t={name:T.value,link:D.value};renderCard(t),n(E),e.target.reset()})),B.addEventListener("submit",(function(e){e.preventDefault(),h.textContent=b.value,S.textContent=q.value,e.target.reset(),n(L)}))})();