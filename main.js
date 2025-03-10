(()=>{"use strict";function e(e,t){e.remove()}function t(e,t){var n=t.cardId,o=t.setLike,r=t.removeLike,c=t.cardLikeCount;e.target.classList.contains("card__like-button_is-active")?r(n).then((function(t){e.target.classList.remove("card__like-button_is-active"),c.textContent=t.likes.length})).catch((function(e){console.log("Ошибка при снятии лайка: ",e)})):o(n).then((function(t){e.target.classList.add("card__like-button_is-active"),c.textContent=t.likes.length})).catch((function(e){console.log("Ошибка при постановке лайка: ",e)}))}function n(e){"Escape"===e.key&&r(document.querySelector(".popup_is-opened"))}function o(e){e.classList.add("popup_is-animated"),setTimeout((function(){e.classList.add("popup_is-opened")}),1),document.addEventListener("keydown",n)}function r(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",n)}var c=function(e){return fetch("https://nomoreparties.co/v1/wff-cohort-33/cards/likes/".concat(e),{method:"PUT",headers:{authorization:"07069f22-afde-49a4-88de-b3e1ba6e8b6f"}}).then((function(e){if(!e.ok)throw new Error("Ошибка постановки лайка_1: ".concat(e.status));return e.json()})).catch((function(e){return console.log(e)}))},a=function(e){return fetch("https://nomoreparties.co/v1/wff-cohort-33/cards/likes/".concat(e),{method:"DELETE",headers:{authorization:"07069f22-afde-49a4-88de-b3e1ba6e8b6f"}}).then((function(e){if(!e.ok)throw new Error("Ошибка снятия лайка_1: ".concat(e.status));return e.json()})).catch((function(e){return console.log(e)}))},i=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);n.forEach((function(n){u(e,n,t),"input_card_name"===n.id&&(n.value="")})),l(n)?(o.classList.add(t.inactiveButtonClass),o.disabled=!0):(o.classList.remove(t.inactiveButtonClass),o.disabled=!1)},u=function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.textContent="",o.classList.add(n.errorClass)},l=function(e){return!e||0===e.length||Array.from(e).some((function(e){return!e.validity.valid}))},s=function(e,t,n){l(t)?(e.classList.add(n.inactiveButtonClass),e.disabled=!0):(e.classList.remove(n.inactiveButtonClass),e.disabled=!1)};function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var p,f,_=document.querySelector(".places__list"),m=document.querySelector(".profile__edit-button"),v=document.querySelector(".profile__add-button"),y=document.querySelector(".profile__description"),h=document.querySelector(".profile__title"),S=document.querySelector(".profile__image"),b=document.querySelector(".popup__input_type_name"),k=document.querySelector(".popup__input_type_description"),L=document.querySelector(".popup_type_edit"),q=document.querySelector(".popup_type_new-card"),g=document.querySelectorAll(".popup"),C=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),E=(C.querySelector(".card__image"),C.querySelector(".card__title"),C.querySelector(".card__like-button"),C.querySelector(".card__delete-button"),document.forms["edit-profile"]),w=document.forms["new-place"],x=w.querySelector(".popup__input_type_card-name"),A=w.querySelector(".popup__input_type_url"),j=document.querySelector(".popup_type_image"),T=document.querySelector(".popup__content_content_image"),B=T.querySelector(".popup__image"),I=T.querySelector(".popup__caption"),z=T.querySelector(".popup__close"),O={formSelector:"popup__form",inputSelector:"popup__input",submitButtonSelector:"popup__button",inactiveButtonClass:"button__inactive",inputErrorClass:"popup__input_invalid",errorClass:"input__error_hidden"};(p=O)&&p.formSelector&&p.inputSelector&&p.submitButtonSelector?Array.from(document.querySelectorAll(p.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);s(o,n,t),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){var o=t.validationMessage;t.validity.valid?u(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.remove(o.errorClass)}(e,t,o,n)}(e,r,t),s(o,n,t)}))}))}(e,p)})):console.error("Неверные настройки валидации"),Promise.all([fetch("https://nomoreparties.co/v1/wff-cohort-33/users/me",{method:"GET",headers:{authorization:"07069f22-afde-49a4-88de-b3e1ba6e8b6f","Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Ошибка: ".concat(e.status));return e.json()})).then((function(e){return console.log("Данные пользователя_00:  ",e),e})).catch((function(e){throw console.log("Ошибка при получении данных:",e),e})),fetch("https://nomoreparties.co/v1/wff-cohort-33/cards",{method:"GET",headers:{authorization:"07069f22-afde-49a4-88de-b3e1ba6e8b6f","Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Ошибка: ".concat(e.status));return e.json()})).then((function(e){return console.log("Данные пользователя:",e),e})).catch((function(e){throw console.log("Ошибка при получении данных:",e),e}))]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=c.call(n)).done)&&(i.push(o.value),i.length!==t);u=!0);}catch(e){l=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],c=o[1];h.textContent=r.name,y.textContent=r.about,S.src=r.avatar,f=r._id,D(c,r._id)})).catch((function(e){return console.log("Ошибка_44: ",e)}));var D=function(n,o){n.forEach((function(n){var r=function(e,t,n){var o=n.deleteCard,r=n.handleImageClick,c=n.addLike,a=n.setLike,i=n.removeLike,u=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),l=u.querySelector(".card__delete-button"),s=u.querySelector(".card__image"),d=u.querySelector(".card__description"),p=d.querySelector(".card__like-button"),f=d.querySelector(".card__like-count"),_=d.querySelector(".card__title");s.src=e.link,s.alt=e.name,_.textContent=e.name,e.likes=e.likes||[];var m=e._id;return f.textContent=e.likes.length,e.likes.some((function(e){return e._id===t}))&&p.classList.add("card__like-button_is-active"),s.addEventListener("click",(function(){r(s,_)})),p.addEventListener("click",(function(){return c(evt,{cardId:m,setLike:a,removeLike:i,cardLikeCount:f})})),e.owner._id!==t?l.style.display="none":l.addEventListener("click",(function(){return o(u,m)})),u}(n,o,{deleteCard:e,handleImageClick:N,addLike:t,setLike:c,removeLike:a});_.prepend(r)}))};function N(e,t){B.src=e.src,B.alt=e.alt,I.textContent=t.textContent,o(j)}m.addEventListener("click",(function(){o(L),b.value=h.textContent,k.value=y.textContent,i(E,O)})),v.addEventListener("click",(function(){o(q),i(w,O)})),g.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-opened")&&r(e),t.target.classList.contains(z.classList)&&r(e)}))})),w.addEventListener("submit",(function(e){e.preventDefault();var t,n,o={name:x.value,link:A.value};t=o.name,n=o.link,fetch("https://nomoreparties.co/v1/wff-cohort-33/cards",{method:"POST",headers:{authorization:"07069f22-afde-49a4-88de-b3e1ba6e8b6f","Content-Type":"application/json"},body:JSON.stringify({name:t,link:n})}),D(o,f),r(q),e.target.reset()})),E.addEventListener("submit",(function(e){var t,n;e.preventDefault(),h.textContent=b.value,y.textContent=k.value,t=b.value,n=k.value,fetch("https://nomoreparties.co/v1/wff-cohort-33/users/me",{method:"PATCH",headers:{authorization:"07069f22-afde-49a4-88de-b3e1ba6e8b6f","Content-Type":"application/json"},body:JSON.stringify({name:t,about:n})}),console.log("Новые данные пользователя:",b.value,k.value),e.target.reset(),r(L)}))})();