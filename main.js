(()=>{"use strict";function e(e,t){e.remove()}function t(e,t){var n=t.cardId,r=t.setLike,o=t.removeLike,c=t.cardLikeCount;e.target.classList.contains("card__like-button_is-active")?o(n).then((function(t){e.target.classList.remove("card__like-button_is-active"),c.textContent=t.likes.length})).catch((function(e){console.log("Ошибка при снятии лайка: ",e)})):r(n).then((function(t){e.target.classList.add("card__like-button_is-active"),c.textContent=t.likes.length})).catch((function(e){console.log("Ошибка при постановке лайка: ",e)}))}function n(e){"Escape"===e.key&&o(document.querySelector(".popup_is-opened"))}function r(e){e.classList.add("popup_is-animated"),setTimeout((function(){e.classList.add("popup_is-opened")}),1),document.addEventListener("keydown",n)}function o(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",n)}var c="https://nomoreparties.co/v1/wff-cohort-33",i={authorization:"07069f22-afde-49a4-88de-b3e1ba6e8b6f","Content-Type":"application/json"};function a(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var u=function(e){return fetch("".concat(c,"/cards/likes/").concat(e),{method:"PUT",headers:i}).then(a)},l=function(e){return fetch("".concat(c,"/cards/likes/").concat(e),{method:"DELETE",headers:i}).then(a)},s=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){d(e,n,t),"input_card_name"===n.id&&(n.value="")})),p(n)?(r.classList.add(t.inactiveButtonClass),r.disabled=!0):(r.classList.remove(t.inactiveButtonClass),r.disabled=!1)},d=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.textContent="",r.classList.add(n.errorClass)},p=function(e){return!e||0===e.length||Array.from(e).some((function(e){return!e.validity.valid}))},_=function(e,t,n){p(t)?(e.classList.add(n.inactiveButtonClass),e.disabled=!0):(e.classList.remove(n.inactiveButtonClass),e.disabled=!1)};function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var m,y=document.querySelector(".places__list"),v=document.querySelector(".profile__edit-button"),S=document.querySelector(".profile__add-button"),h=document.querySelector(".profile__description"),L=document.querySelector(".profile__title"),k=document.querySelector(".profile__image"),b=document.querySelector(".popup__input_type_name"),q=document.querySelector(".popup__input_type_description"),C=document.querySelector(".popup_type_edit"),g=document.querySelector(".popup_type_new-card"),E=document.querySelectorAll(".popup"),x=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),A=(x.querySelector(".card__image"),x.querySelector(".card__title"),x.querySelector(".card__like-button"),x.querySelector(".card__delete-button"),document.forms["edit-profile"]),w=document.forms["new-place"],B=w.querySelector(".popup__input_type_card-name"),T=w.querySelector(".popup__input_type_url"),j=document.querySelector(".popup_type_image"),I=document.querySelector(".popup__content_content_image"),O=I.querySelector(".popup__image"),D=I.querySelector(".popup__caption"),P=I.querySelector(".popup__close"),N={formSelector:"popup__form",inputSelector:"popup__input",submitButtonSelector:"popup__button",inactiveButtonClass:"button__inactive",inputErrorClass:"popup__input_invalid",errorClass:"input__error_hidden"};(m=N)&&m.formSelector&&m.inputSelector&&m.submitButtonSelector?Array.from(document.querySelectorAll(m.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);_(r,n,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){var r=t.validationMessage;t.validity.valid?d(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.remove(r.errorClass)}(e,t,r,n)}(e,o,t),_(r,n,t)}))}))}(e,m)})):console.error("Неверные настройки валидации"),Promise.all([fetch("".concat(c,"/users/me"),{method:"GET",headers:i}).then(a),fetch("".concat(c,"/cards"),{method:"GET",headers:i}).then(a)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,i,a=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(a.push(r.value),a.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];L.textContent=o.name,h.textContent=o.about,k.src=o.avatar,G(c,o._id)})).catch((function(e){return console.log("Ошибка_44: ",e)}));var G=function(n,r){n.forEach((function(n){var o=function(e,t,n){var r=n.deleteCard,o=n.handleImageClick,c=n.addLike,i=n.setLike,a=n.removeLike,u=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),l=u.querySelector(".card__delete-button"),s=u.querySelector(".card__image"),d=u.querySelector(".card__description"),p=d.querySelector(".card__like-button"),_=d.querySelector(".card__like-count"),f=d.querySelector(".card__title");s.src=e.link,s.alt=e.name,f.textContent=e.name,e.likes=e.likes||[];var m=e._id;return _.textContent=e.likes.length,e.likes.some((function(e){return e._id===t}))&&p.classList.add("card__like-button_is-active"),s.addEventListener("click",(function(){o(s,f)})),p.addEventListener("click",(function(){return c(evt,{cardId:m,setLike:i,removeLike:a,cardLikeCount:_})})),e.owner._id!==t?l.style.display="none":l.addEventListener("click",(function(){return r(u,m)})),u}(n,r,{deleteCard:e,handleImageClick:J,addLike:t,setLike:u,removeLike:l});y.prepend(o)}))};function J(e,t){O.src=e.src,O.alt=e.alt,D.textContent=t.textContent,r(j)}v.addEventListener("click",(function(){b.value=L.textContent,q.value=h.textContent,r(C),s(A,N)})),S.addEventListener("click",(function(){r(g),s(w,N)})),E.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-opened")&&o(e),t.target.classList.contains(P.classList)&&o(e)}))})),w.addEventListener("submit",(function(e){e.preventDefault();var t,n,r={name:B.value,link:T.value};t=r.name,n=r.link,fetch("".concat(c,"/cards"),{method:"POST",headers:i,body:JSON.stringify({name:t,link:n})}).then(a),G(r,userData._id),o(g),e.target.reset()})),A.addEventListener("submit",(function(e){var t,n;e.preventDefault(),(t=b.value,n=q.value,fetch("".concat(c,"/users/me"),{method:"PATCH",headers:i,body:JSON.stringify({name:t,about:n})}).then(a)).then((function(e){L.textContent=e.name,h.textContent=e.about,o(C)})).catch((function(e){console.log("Ошибка при редактировании профиля: ",e)})),e.target.reset()}))})();