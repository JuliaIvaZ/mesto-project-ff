(()=>{"use strict";function e(e){"Escape"===e.key&&n(document.querySelector(".popup_is-opened"))}function t(t){t.classList.add("popup_is-opened"),setTimeout((function(){t.classList.add("popup_is-opened")}),1),document.addEventListener("keydown",e)}function n(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",e)}var r={baseURL:"https://mesto.nomoreparties.co/v1/wff-cohort-33",headers:{authorization:"07069f22-afde-49a4-88de-b3e1ba6e8b6f","Content-Type":"application/json"}},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Ошибка при выполнении запроса";return e.ok?e.json():Promise.reject("".concat(t,": ").concat(e.status))},c=function(e){return fetch("".concat(r.baseURL,"/cards/likes/").concat(e),{method:"PUT",headers:r.headers}).then((function(e){return o(e,"Ошибка постановки лайка")}))},a=function(e){return fetch("".concat(r.baseURL,"/cards/likes/").concat(e),{method:"DELETE",headers:r.headers}).then((function(e){return o(e,"Ошибка удаления лайка")}))};function u(e,t,n,r,o){var c=document.querySelector("#card-template").content.cloneNode(!0),a=c.querySelector(".places__item"),u=c.querySelector(".card__image"),i=c.querySelector(".likes__count"),s=c.querySelector(".card__title"),l=c.querySelector(".card__delete-button"),d=c.querySelector(".card__like-button");return i.textContent=e.likes.length,u.alt=e.name,u.src=e.link,s.textContent=e.name,e.owner._id===o?l.addEventListener("click",(function(){return r(e._id,a)})):l.setAttribute("style","display: none;"),e.likes.some((function(e){return e._id===o}))&&d.classList.add("card__like-button_is-active"),u.addEventListener("click",(function(){return t(u.src,u.alt,u.alt)})),d.addEventListener("click",(function(){return n(e._id,d,i,o)})),c}function i(e,t){(function(e){return fetch("".concat(r.baseURL,"/cards/").concat(e),{method:"DELETE",headers:r.headers}).then((function(e){return o(e,"Ошибка удаления карточки")}))})(e).then((function(){t.remove()})).catch((function(e){console.error("Ошибка при удалении карточки:",e)}))}function s(e,t,n,r){(t.classList.contains("card__like-button_is-active")?a:c)(e).then((function(e){n.textContent=e.likes.length,t.classList.toggle("card__like-button_is-active")})).catch((function(e){return console.log(e)}))}var l=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.textContent="",r.classList.add(n.errorClass)},d=function(e,t,n){p(t)?(e.classList.add(n.inactiveButtonClass),e.disabled=!0):(e.classList.remove(n.inactiveButtonClass),e.disabled=!1)},p=function(e){return Array.from(e).some((function(e){return!e.validity.valid}))},_=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){l(e,n,t)})),d(r,n,t)};function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}document.querySelector(".page");var m,y=document.querySelector(".places__list"),v=document.querySelector(".profile__edit-button"),h=document.querySelector(".profile__add-button"),S=document.querySelector(".profile__description"),b=document.querySelector(".profile__title"),L=document.querySelector(".profile__image"),q=document.querySelector(".popup__input_type_name"),g=document.querySelector(".popup__input_type_description"),C=document.querySelector(".popup_type_edit"),E=document.querySelector(".popup_type_new-card"),k=document.querySelectorAll(".popup"),x=document.forms["new-place"],A=x.querySelector(".popup__input_type_card-name"),w=x.querySelector(".popup__input_type_url"),U=document.querySelector(".popup_type_image"),B=document.querySelector(".popup__content_content_image"),R=B.querySelector(".popup__caption"),T=B.querySelector(".popup__close"),j=document.querySelector(".edit__avatar"),O=document.querySelector(".popup_type_new-avatar"),D=document.querySelector(".popup_type_edit .popup__form"),P=document.querySelector(".popup_type_new-card .popup__form"),z=document.querySelector(".popup_type_new-avatar .popup__form"),M=document.querySelector(".icon__edit"),N={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"button__inactive",inputErrorClass:"popup__input_invalid",errorClass:"input__error_hidden"};function I(e,n,r){B.querySelector(".popup__image").src=e,B.querySelector(".popup__image").alt=n,R.textContent=r,t(U)}m=N,Array.from(document.querySelectorAll(m.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);d(r,n,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){var r=t.validationMessage;t.validity.patternMissmatch&&t.dataset.errorMessage&&(r=t.dataset.errorMessage),t.validity.valid?l(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.remove(r.errorClass)}(e,t,r,n)}(e,o,t),d(r,n,t)}))}))}(e,m)})),Promise.all([fetch("".concat(r.baseURL,"/cards"),{headers:{authorization:"".concat(r.headers.authorization)}}).then((function(e){return o(e,"Ошибка загрузки карточек")})),fetch("".concat(r.baseURL,"/users/me"),{headers:{authorization:"".concat(r.headers.authorization)}}).then((function(e){return o(e,"Ошибка загрузки данных профиля")}))]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];!function(e,t){e.forEach((function(e){var n=u(e,I,s,i,t);y.prepend(n)}))}(o,c._id),b.textContent=c.name,S.textContent=c.about,L.setAttribute("style","background-image: url(".concat(c.avatar,")"))})).catch((function(e){return console.log("Ошибка: ",e)})),v.addEventListener("click",(function(){q.value=b.textContent,g.value=S.textContent,t(C),_(D,N)})),h.addEventListener("click",(function(){t(E),_(P,N)})),D.addEventListener("submit",(function(e){e.preventDefault();var t,c,a=C.querySelector("".concat(N.submitButtonSelector));a.textContent="Сохранение...",(t=q.value,c=g.value,fetch("".concat(r.baseURL,"/users/me"),{method:"PATCH",headers:r.headers,body:JSON.stringify({name:t,about:c})}).then((function(e){return o(e,"Ошибка редактирования профиля")}))).then((function(e){b.textContent=e.name,S.textContent=e.about,n(C)})).catch((function(e){return console.error("Ошибка при обновлении профиля: ",e)})).finally((function(){return a.textContent="Сохранить"}))})),P.addEventListener("submit",(function(e){e.preventDefault();var t,c={name:A.value,link:w.value},a=E.querySelector("".concat(N.submitButtonSelector));a.textContent="Cохранение...",(t=c,fetch("".concat(r.baseURL,"/cards"),{method:"POST",headers:r.headers,body:JSON.stringify({name:t.name,link:t.link})}).then((function(e){return o(e,"Ошибка создания карточки")}))).then((function(e){var t=e.owner._id;y.prepend(u(e,I,s,i,t)),n(E),P.reset()})).catch((function(e){return console.log("Ошибка загрузки карточки: ",e)})).finally((function(){return a.textContent="Сохранить"}))})),k.forEach((function(e){e.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_is-opened")||t.target.classList.contains(T.classList))&&n(e)}))})),j.addEventListener("mouseover",(function(){M.classList.add("icon__edit__active"),L.classList.add("profile__image__hover")})),j.addEventListener("mouseout",(function(){M.classList.remove("icon__edit__active"),L.classList.remove("profile__image__hover")})),j.addEventListener("click",(function(){t(O),_(z,N)})),z.addEventListener("submit",(function(e){e.preventDefault();var t,c=O.querySelector("".concat(N.submitButtonSelector));c.textContent="сохранение...",(t=document.querySelector(".popup_type_new-avatar .popup__input_type_url").value,fetch("".concat(r.baseURL,"/users/me/avatar"),{method:"PATCH",headers:r.headers,body:JSON.stringify({avatar:t})}).then((function(e){return o(e,"Ошибка изменения аватара")}))).then((function(e){L.setAttribute("style","background-image: url(".concat(e.avatar,")")),n(O),z.reset()})).finally((function(){return c.textContent="Сохранить"}))}))})();