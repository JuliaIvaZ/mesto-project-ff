(()=>{"use strict";function e(e){"Escape"===e.key&&n(document.querySelector(".popup_is-opened"))}function t(t){t.classList.add("popup_is-opened"),setTimeout((function(){t.classList.add("popup_is-opened")}),1),document.addEventListener("keydown",e)}function n(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",e)}var o={baseURL:"https://mesto.nomoreparties.co/v1/wff-cohort-33",headers:{authorization:"07069f22-afde-49a4-88de-b3e1ba6e8b6f","Content-Type":"application/json"}};function r(e,t,n,o,r,c,a){var i=document.querySelector("#card-template").content.cloneNode(!0),u=i.querySelector(".places__item"),s=i.querySelector(".card__image"),l=i.querySelector(".likes__count"),d=i.querySelector(".card__title"),p=i.querySelector(".card__delete-button"),_=i.querySelector(".card__like-button");return l.textContent=e.likes.length,s.alt=e.name,s.src=e.link,d.textContent=e.name,r?p.addEventListener("click",(function(){return o(e._id,u)})):p.setAttribute("style","display: none;"),s.addEventListener("click",(function(){return t(s.src,s.alt,s.alt)})),a&&_.classList.add("card__like-button_is-active"),_.addEventListener("click",(function(){return n(e._id,_,l,c)})),i}function c(e,t){(function(e){return fetch("".concat(o.baseURL,"/cards/").concat(e),{method:"DELETE",headers:o.headers}).then((function(e){if(!e.ok)throw new Error("Ошибка удаления карточки: ".concat(e.status));return e.json()}))})(e).then((function(){t.remove()})).catch((function(e){console.error("Ошибка при удалении карточки:",e)}))}function a(e,t,n,r){t.classList.contains("card__like-button_is-active")?function(e){return fetch("".concat(o.baseURL,"/cards/likes/").concat(e),{method:"DELETE",headers:o.headers}).then((function(e){if(!e.ok)throw new Error("Ошибка удаления лайка: ".concat(e.status));return e.json()}))}(e).then((function(e){n.textContent=e.likes.length,t.classList.remove("card__like-button_is-active")})):function(e){return fetch("".concat(o.baseURL,"/cards/likes/").concat(e),{method:"PUT",headers:o.headers}).then((function(e){if(!e.ok)throw new Error("Ошибка постановки лайка: ".concat(e.status));return e.json()}))}(e).then((function(e){n.textContent=e.likes.length,t.classList.add("card__like-button_is-active")}))}var i=function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.textContent="",o.classList.add(n.errorClass)},u=function(e,t,n){s(t)?(e.classList.add(n.inactiveButtonClass),e.disabled=!0):(e.classList.remove(n.inactiveButtonClass),e.disabled=!1)},s=function(e){return!e||0===e.length||Array.from(e).some((function(e){return!e.validity.valid}))},l=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);n.forEach((function(n){i(e,n,t),"input_card_name"===n.id&&(n.value="")})),s(n)?(o.classList.add(t.inactiveButtonClass),o.disabled=!0):(o.classList.remove(t.inactiveButtonClass),o.disabled=!1)};function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}document.querySelector(".page");var p,_=document.querySelector(".places__list"),f=document.querySelector(".profile__edit-button"),m=document.querySelector(".profile__add-button"),v=document.querySelector(".profile__description"),y=document.querySelector(".profile__title"),h=document.querySelector(".profile__image"),S=document.querySelector(".popup__input_type_name"),b=document.querySelector(".popup__input_type_description"),L=document.querySelector(".popup_type_edit"),q=document.querySelector(".popup_type_new-card"),E=document.querySelectorAll(".popup"),k=document.forms["new-place"],C=k.querySelector(".popup__input_type_card-name"),g=k.querySelector(".popup__input_type_url"),w=document.querySelector(".popup_type_image"),x=document.querySelector(".popup__content_content_image"),A=x.querySelector(".popup__caption"),j=x.querySelector(".popup__close"),B=document.querySelector(".edit__avatar"),U=document.querySelector(".popup_type_new-avatar"),R=document.querySelector(".popup_type_edit .popup__form"),T=document.querySelector(".popup_type_new-card .popup__form"),O=document.querySelector(".popup_type_new-avatar .popup__form"),P=document.querySelector(".icon__edit"),D={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"button__inactive",inputErrorClass:"popup__input_invalid",errorClass:"input__error_hidden"};function z(e,n,o){x.querySelector(".popup__image").src=e,x.querySelector(".popup__image").alt=n,A.textContent=o,t(w)}p=D,Array.from(document.querySelectorAll(p.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);u(o,n,t),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){var o=t.validationMessage;t.validity.valid?i(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.remove(o.errorClass)}(e,t,o,n)}(e,r,t),u(o,n,t)}))}))}(e,p)})),Promise.all([fetch("".concat(o.baseURL,"/cards"),{headers:{authorization:"".concat(o.headers.authorization)}}),fetch("".concat(o.baseURL,"/users/me"),{headers:{authorization:"".concat(o.headers.authorization)}})]).then((function(e){return Promise.all(e.map((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})))})).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,i=[],u=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=c.call(n)).done)&&(i.push(o.value),i.length!==t);u=!0);}catch(e){s=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw r}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],u=o[1];!function(e,t){e.forEach((function(e){var n=!1;e.owner._id===t&&(n=!0);var o=!1;e.likes.some((function(e){return e._id===t}))&&(o=!0);var i=r(e,z,a,c,n,t,o);_.prepend(i)}))}(i,u._id),y.textContent=u.name,v.textContent=u.about,h.setAttribute("style","background-image: url(".concat(u.avatar,")"))})).catch((function(e){return console.log("Ошибка_44: ",e)})),f.addEventListener("click",(function(){S.value=y.textContent,b.value=v.textContent,t(L),l(R,D)})),m.addEventListener("click",(function(){t(q),l(T,D)})),R.addEventListener("submit",(function(e){e.preventDefault();var t,r,c=L.querySelector("".concat(D.submitButtonSelector));c.textContent="Сохранение...",(t=S.value,r=b.value,fetch("".concat(o.baseURL,"/users/me"),{method:"PATCH",headers:o.headers,body:JSON.stringify({name:t,about:r})}).then((function(e){if(console.log(e),!e.ok)throw new Error("Ошибка редактирования профиля: ".concat(e.status));return e.json()}))).then((function(e){y.textContent=S.value,v.textContent=b.value,c.textContent="Сохранить",n(L)}))})),T.addEventListener("submit",(function(e){e.preventDefault();var t,i={name:C.value,link:g.value,_id:"0",likes:[]},u=q.querySelector("".concat(D.submitButtonSelector));u.textContent="Cохранение...",(t=i,fetch("".concat(o.baseURL,"/cards"),{method:"POST",headers:o.headers,body:JSON.stringify({name:t.name,link:t.link})}).then((function(e){if(console.log("Ответ от сервера: ",e),!e.ok)throw new Error("Ошибка создания карточки: ".concat(e.status));return e.json()}))).then((function(e){i._id=e._id,i.likes=e.likes;var t=e.owner._id;_.prepend(r(i,z,a,c,!0,t,!1)),u.textContent="Сохранить",n(q),T.reset()})).catch((function(e){return console.log("Ошибка загрузки карточки: ",e)}))})),E.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-opened")&&n(e),t.target.classList.contains(j.classList)&&n(e)}))})),B.addEventListener("mouseover",(function(){P.classList.add("icon__edit__active"),h.classList.add("profile__image__hover")})),B.addEventListener("mouseout",(function(){P.classList.remove("icon__edit__active"),h.classList.remove("profile__image__hover")})),B.addEventListener("click",(function(){t(U),l(O,D)})),O.addEventListener("submit",(function(e){e.preventDefault();var t,r=U.querySelector("".concat(D.submitButtonSelector));r.textContent="сохранение...",(t=document.querySelector(".popup_type_new-avatar .popup__input_type_url").value,fetch("".concat(o.baseURL,"/users/me/avatar"),{method:"PATCH",headers:o.headers,body:JSON.stringify({avatar:t})}).then((function(e){if(console.log("Ответ от сервера: ",e),!e.ok)throw new Error("Ошибка изменения аватара: ".concat(e.status));return e.json()}))).then((function(e){h.setAttribute("style","background-image: url(".concat(e.avatar,")")),r.textContent="Сохранить",n(U),O.reset()}))}))})();