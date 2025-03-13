(()=>{"use strict";function e(e){"Escape"===e.key&&n(document.querySelector(".popup_is-opened"))}function t(t){t.classList.add("popup_is-opened"),setTimeout((function(){t.classList.add("popup_is-opened")}),1),document.addEventListener("keydown",e)}function n(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",e)}function o(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var r={baseURL:"https://mesto.nomoreparties.co/v1/wff-cohort-33",headers:{authorization:"07069f22-afde-49a4-88de-b3e1ba6e8b6f","Content-Type":"application/json"}};function c(e,t,n,o,r,c,a){var i=document.querySelector("#card-template").content.cloneNode(!0),u=i.querySelector(".places__item"),s=i.querySelector(".card__image"),l=i.querySelector(".likes__count"),d=i.querySelector(".card__title"),p=i.querySelector(".card__delete-button"),_=i.querySelector(".card__like-button");return l.textContent=e.likes.length,s.alt=e.name,s.src=e.link,d.textContent=e.name,r?p.addEventListener("click",(function(){return o(e._id,u)})):p.setAttribute("style","display: none;"),s.addEventListener("click",(function(){return t(s.src,s.alt,s.alt)})),a&&_.classList.add("card__like-button_is-active"),_.addEventListener("click",(function(){return n(e._id,_,l,c)})),console.log(i),i}function a(e,t){!function(e){fetch("".concat(r.baseURL,"/cards/").concat(e),{method:"DELETE",headers:get_headers})}(e),t.remove()}function i(e,t,n,o){evt.target.classList.contains("card__like-button_is-active")?(function(e){return fetch("".concat(r.baseURL,"/cards/likes/").concat(e),{method:"DELETE",headers:r.headers}).then((function(e){return e.json()}))}(e).then((function(e){n.textContent=e.likes.length})),t.classList.remove("card__like-button_is-active")):(function(e){return fetch("".concat(r.baseURL,"/cards/likes/").concat(e),{method:"PUT",headers:r.headers}).then((function(e){return e.json()}))}(e).then((function(e){n.textContent=e.likes.length})),t.classList.add("card__like-button_is-active"))}var u=function(e,t,n){var o=t.validationMessage;t.validity.valid?l(e,t,n):s(e,t,o,n)},s=function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.remove(o.errorClass)},l=function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.textContent="",o.classList.add(n.errorClass)},d=function(e,t,n){hasInvalidInput(t)?(e.classList.add(n.inactiveButtonClass),e.disabled=!0):(e.classList.remove(n.inactiveButtonClass),e.disabled=!1)};function p(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector));d(e,n,t),n.forEach((function(n){u(e,n,t)}))}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}document.querySelector(".page");var f,m=document.querySelector(".places__list"),y=document.querySelector(".profile__edit-button"),v=document.querySelector(".profile__add-button"),h=document.querySelector(".profile__description"),S=document.querySelector(".profile__title"),b=document.querySelector(".profile__image"),L=document.querySelector(".popup__input_type_name"),q=document.querySelector(".popup__input_type_description"),g=document.querySelector(".popup_type_edit"),C=document.querySelector(".popup_type_new-card"),k=document.querySelectorAll(".popup"),E=document.forms["new-place"],x=E.querySelector(".popup__input_type_card-name"),j=E.querySelector(".popup__input_type_url"),A=document.querySelector(".popup_type_image"),w=document.querySelector(".popup__content_content_image"),P=w.querySelector(".popup__caption"),U=w.querySelector(".popup__close"),R=document.querySelector(".edit__avatar"),T=document.querySelector(".popup_type_new-avatar"),B=document.querySelector(".popup_type_edit .popup__form"),I=document.querySelector(".popup_type_new-card .popup__form"),O=document.querySelector(".popup_type_new-avatar .popup__form"),D=document.querySelector(".icon__edit"),z={formSelector:"popup__form",inputSelector:"popup__input",submitButtonSelector:"popup__button",inactiveButtonClass:"button__inactive",inputErrorClass:"popup__input_invalid",errorClass:"input__error_hidden"};function N(e,n,o){b.src=e,b.alt=n,P.textContent=o,t(A)}f=z,Array.from(document.querySelectorAll(f.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);d(o,n,t),n.forEach((function(r){r.addEventListener("input",(function(){u(e,r,t),d(o,n,t)}))}))}(e,f)})),Promise.all([fetch("".concat(r.baseURL,"/cards"),{headers:{authorization:"".concat(r.headers.authorization)}}),fetch("".concat(r.baseURL,"/users/me"),{headers:{authorization:"".concat(r.headers.authorization)}})]).then((function(e){return Promise.all(e.map((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})))})).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,i=[],u=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=c.call(n)).done)&&(i.push(o.value),i.length!==t);u=!0);}catch(e){s=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw r}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],u=o[1],s=u._id;r.forEach((function(e){var t=!1;e.owner._id===s&&(t=!0);var n=!1;e.likes.some((function(e){return e._id===s}))&&(n=!0);var o=c(e,N,i,a,t,s,n);m.prepend(o)})),S.textContent=u.name,h.textContent=u.about,b.setAttribute("style","background-image: url(".concat(u.avatar,")"))})).catch((function(e){return console.log("Ошибка_44: ",e)})),y.addEventListener("click",(function(){L.value=S.textContent,q.value=h.textContent,t(g),p(B,z)})),v.addEventListener("click",(function(){t(C),p(I,z)})),B.addEventListener("submit",(function(e){e.preventDefault(),S.textContent=L.value,h.textContent=q.value;var t=g.querySelector("".concat(settingsValidation.submitButtonSelector));t.textContent="Сохранение...",fetch("".concat(r.baseURL,"/users/me"),{method:"PATCH",headers:r.headers,body:JSON.stringify({name:undefined,about:undefined})}).then((function(e){console.log(e)})).then(o).then((function(e){return e.ok?e.json():Promise.reject("Ошибка сохранения данных профиля: ".concat(e.status))})),t.textContent="Сохранить",n(g)})),I.addEventListener("submit",(function(e){e.preventDefault();var t,u={name:x.value,link:j.value,likes:[0],_id:cardId},s=C.querySelector("".concat(settingsValidation.submitButtonSelector));s.textContent="Cохранение...",(t=u,fetch("".concat(r.baseURL,"/cards"),{method:"POST",headers:r.headers,body:JSON.stringify({name:t.name,link:t.link})}).then((function(e){console.log(e)})).then(o)).then((function(e){return e.ok?e.json():Promise.reject("Ошибка создания новой карточки: ".concat(e.status))})),m.prepend(c(u,N,i,a,!0,userId,!1)),s.textContent="Сохранить",n(C),I.reset()})),k.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-opened")&&n(e),t.target.classList.contains(U.classList)&&n(e)}))})),R.addEventListener("mouseover",(function(){D.classList.add("icon__edit__active"),b.classList.add("profile__image__hover")})),R.addEventListener("mouseout",(function(){D.classList.remove("icon__edit__active"),b.classList.remove("profile__image__hover")})),R.addEventListener("click",(function(){t(T),p(O,settingsValidation)})),O.addEventListener("submit",(function(e){e.preventDefault();var t,c=T.querySelector("".concat(settingsValidation.submitButtonSelector));c.textContent="сохранение...",(t=document.querySelector(".popup_type_new-avatar .popup__input_type_url").value,fetch("".concat(r.baseURL,"/users/me/avatar"),{method:"PATCH",headers:r.headers,body:JSON.stringify({avatar:t})}).then((function(e){console.log(e)})).then(o)).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})),c.textContent="Сохранить",n(T),O.reset()}))})();