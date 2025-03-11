(()=>{"use strict";var e="https://mesto.nomoreparties.co/v1/wff-cohort-33",t={authorization:"07069f22-afde-49a4-88de-b3e1ba6e8b6f","Content-Type":"application/json"};function n(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var o=function(o){return fetch("".concat(e,"/cards/likes/").concat(o),{method:"PUT",headers:t}).then(n)},r=function(o){return fetch("".concat(e,"/cards/likes/").concat(o),{method:"DELETE",headers:t}).then(n)},c=document.querySelector("#card-template").content;function i(e,t,n){(t.classList.contains("card__like-button_is-active")?r:o)(n).then((function(n){t.classList.toggle("card__like-button_is-active"),e.textContent=n.likes.length})).catch((function(e){console.log("Ошибка при постановке лайка: ",e)}))}function u(e,t,n,o,r){var i=c.querySelector(".card").cloneNode(!0),u=i.querySelector(".card__image"),a=p.querySelector(".card__title"),l=p.querySelector(".card__like-button"),s=i.querySelector(".card__delete-button"),d=p.querySelector(".card__like-count"),p=i.querySelector(".card__description");return u.src=e.link,u.alt=e.name,a.textContent=e.name,d.textContent=e.likes.length,e.owner._id===t?s.addEventListener("click",(function(){return n(i,e._id)})):s.remove(),l.addEventListener("click",(function(){return o(d,l,e._id)})),e.likes.some((function(e){return e._id===t}))&&l.classList.add("card__like-button_is-active"),u.addEventListener("click",(function(){return r(e.link,e.name)})),i}function a(e){"Escape"===e.key&&s(document.querySelector(".popup_is-opened"))}function l(e){e.classList.add("popup_is-animated"),setTimeout((function(){e.classList.add("popup_is-opened")}),1),document.addEventListener("keydown",a)}function s(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",a)}var d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(t)?(e.disabled=!1,e.classList.remove(n.inactiveButtonClass)):(e.disabled=!0,e.classList.add(n.inactiveButtonClass))};function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var _,f=document.querySelector(".places__list"),m=document.querySelector(".profile__edit-button"),y=document.querySelector(".profile__add-button"),v=(document.querySelector(".popup__close"),document.querySelector(".profile__description")),S=document.querySelector(".profile__title"),h=document.querySelector(".profile__image"),q=document.querySelector(".popup__input_type_name"),b=document.querySelector(".popup__input_type_description"),C=document.querySelector(".popup_type_edit"),g=document.querySelector(".popup_type_new-card"),L=(C.querySelector(".popup__form"),document.querySelectorAll(".popup")),E=(document.querySelector('.popup__form[name="new-place"]'),document.querySelector(".profile__image img")),k=(document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),document.forms["edit-profile"]),x=document.forms["new-place"],A=x.querySelector(".popup__input_type_card-name"),w=x.querySelector(".popup__input_type_url"),T=document.querySelector(".popup_type_image"),j=document.querySelector(".popup__content_content_image"),O=(j.querySelector(".popup__image"),j.querySelector(".popup__caption")),P=j.querySelector(".popup__close"),B=null;_={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"button__inactive",inputErrorClass:"popup__input_invalid",errorClass:"input__error_hidden"},Array.from(document.querySelectorAll(_.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);d(o,n,t),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.classList.add(n.errorClass),o.textContent=""}(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.remove(o.errorClass)}(e,t,t.validationMessage,n)}(e,r,t),d(o,n,t)}))}))}(e,_)})),Promise.all([fetch("".concat(e,"/users/me"),{method:"GET",headers:t}).then(n),fetch("".concat(e,"/cards"),{method:"GET",headers:t}).then(n)]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,i,u=[],a=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(o=c.call(n)).done)&&(u.push(o.value),u.length!==t);a=!0);}catch(e){l=!0,r=e}finally{try{if(!a&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw r}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],c=o[1];S.textContent=r.name,v.textContent=r.about,h.src=r.avatar,B=r._id,M(c,r._id)})).catch((function(e){console.log("Ошибка: ",e)}));var M=function(e,t){e.forEach((function(e){var n=u(e,t,deleteCard,i,N);f.append(n)}))};function N(e,t){T.src=e,T.alt=t,O.textContent=t,l(imagePopup)}m.addEventListener("click",(function(){q.value=S.textContent,b.value=v.textContent,l(C)})),y.addEventListener("click",(function(){l(g)})),L.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-opened")&&s(e),t.target.classList.contains(P.classList)&&s(e)}))})),x.addEventListener("submit",(function(o){o.preventDefault();var r=x.querySelector(".popup__button");r.textContent="Сохранение...";var c,a,l={name:A.value,link:w.value};(c=l.name,a=l.link,fetch("".concat(e,"/cards"),{method:"POST",headers:t,body:JSON.stringify({name:c,link:a})}).then(n)).then((function(e){var t=u(e,B,deleteCard,i,N);f.prepend(t),s(g),x.reset()})).catch((function(e){console.log("Ошибка при добавлении карточки: ",e)})).finally((function(){r.textContent="Сохранить"}))})),k.addEventListener("submit",(function(o){o.preventDefault();var r,c,i=q.value,u=b.value,a=formElement.querySelector(".popup__button");a.textContent="Сохранение...",(r=i,c=u,fetch("".concat(e,"/users/me"),{method:"PATCH",headers:t,body:JSON.stringify({name:r,about:c})}).then(n)).then((function(e){S.textContent=e.name,v.textContent=e.about,E.src=e.avatar,s(C)})).catch((function(e){console.log("Ошибка при редактировании профиля: ",e)})).finally((function(){a.textContent="Сохранить"}))}))})();