(()=>{"use strict";var e={915:(e,t,n)=>{e.exports=n.p+"156d07d84524cc942d68.jpg"},82:(e,t,n)=>{e.exports=n.p+"99b6e21b94798ec54759.jpg"},291:(e,t,n)=>{e.exports=n.p+"167b0005add1694393db.jpg"},874:(e,t,n)=>{e.exports=n.p+"50bb648b47735ffba9eb.jpg"},863:(e,t,n)=>{e.exports=n.p+"e2daa86be296ebffd99c.jpg"},809:(e,t,n)=>{e.exports=n.p+"d75cf55cc6dcd72e4e9a.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}n.m=e,n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",n.b=document.baseURI||self.location.href;var o=[{name:"Архыз",link:new URL(n(915),n.b)},{name:"Челябинская область",link:new URL(n(291),n.b)},{name:"Иваново",link:new URL(n(874),n.b)},{name:"Камчатка",link:new URL(n(863),n.b)},{name:"Холмогорский район",link:new URL(n(809),n.b)},{name:"Байкал",link:new URL(n(82),n.b)}];function r(e){e.target.classList.toggle("card__like-button_is-active")}function c(e){"Escape"===e.key&&u(document.querySelector(".popup_is-opened"))}function i(e){e.classList.add("popup_is-animated"),setTimeout((function(){e.classList.add("popup_is-opened")}),1),document.addEventListener("keydown",c)}function u(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c)}var p=document.querySelector(".places__list"),a=document.querySelector(".profile__edit-button"),d=document.querySelector(".profile__add-button"),l=document.querySelector(".profile__description"),s=document.querySelector(".profile__title"),_=document.querySelector(".popup__input_type_name"),f=document.querySelector(".popup__input_type_description"),v=document.querySelector(".popup_type_edit"),m=document.querySelector(".popup_type_new-card"),y=document.querySelectorAll(".popup"),b=document.forms["edit-profile"],S=document.forms["new-place"],q=S.querySelector(".popup__input_type_card-name"),L=S.querySelector(".popup__input_type_url"),g=document.querySelector(".popup_type_image"),E=document.querySelector(".popup__content_content_image"),x=E.querySelector(".popup__image"),k=E.querySelector(".popup__caption"),h=E.querySelector(".popup__close"),A=/^[a-zA-Zа-яА-я\s\-]{2,40}$/,w=/^[a-zA-Zа-яА-я\s\-]{2,200}$/,C=/^[a-zA-Zа-яА-я\s\-]{2,30}$/,j=function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("popup__input_invalid"),n.textContent="",n.classList.add("".concat(t.id,"-error_hidden"))},R=function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(t)?(e.classList.remove("button__inactive"),e.disabled=!1):(e.classList.add("button__inactive"),e.disabled=!0)};function U(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"prepend",n=function(e,t,n,o){var c=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),i=c.querySelector(".card__image");i.src=e.link,i.alt=e.name;var u=c.querySelector(".card__description"),p=u.querySelector(".card__like-button"),a=u.querySelector(".card__title");a.textContent=e.name;var d=c.querySelector(".card__delete-button");return i.addEventListener("click",(function(){o(i,a)})),d.addEventListener("click",(function(){return function(e){e.remove()}(c)})),p.addEventListener("click",r),c}(e,0,0,D);"prepend"!==t&&"append"!==t||p[t](n)}function D(e,t){x.src=e.src,x.alt=e.alt,k.textContent=t.textContent,i(g)}a.addEventListener("click",(function(){i(v),_.value=s.textContent,f.value=l.textContent,j(v,_),j(v,f);var e=Array.from(v.querySelectorAll(".popup__input")),t=v.querySelector(".popup__button");R(t,e)})),d.addEventListener("click",(function(){var e,t;i(m),e=S,t=S.querySelector(".popup__button"),Array.from(e.querySelectorAll(".popup__input")).forEach((function(e){e.value=""})),t.classList.add("button__inactive"),t.disabled=!0})),Array.from(document.querySelectorAll(".popup")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),Array.from(e.querySelectorAll(".popup__form")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){var t=Array.from(e.querySelectorAll(".popup__input")),n=e.querySelector(".popup__button");R(n,t),t.forEach((function(o){o.addEventListener("input",(function(){!function(e,t){var n=function(e){return e.validity.valueMissing?"Вы пропустили это поле.":e.validity.tooShort?"Минимальное количество символов: ".concat(e.minLength,". Длина текста сейчас: \n        ").concat(e.value.length," символ."):e.validity.typeMismatch?"Введите адрес сайта.":""}(t);"input_name"!==t.id||A.test(t.value)||(n="Можно использовать только буквы, дефисы и пробелы."),"input_description"!==t.id||w.test(t.value)||(n="Можно использовать только буквы, дефисы и пробелы."),"input_card_name"!==t.id||C.test(t.value)||(n="Можно использовать только буквы, дефисы и пробелы."),!t.validity.valid||n?function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add("popup__input_invalid"),o.textContent=n,o.classList.remove("".concat(t.id,"-error_hidden"))}(e,t,n):j(e,t)}(e,o),R(n,t)}))}))}(e)}))})),y.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-opened")&&u(e),t.target.classList.contains(h.classList)&&u(e)}))})),S.addEventListener("submit",(function(e){e.preventDefault(),U({name:q.value,link:L.value}),u(m),e.target.reset()})),o.forEach((function(e){U(e,"append")})),b.addEventListener("submit",(function(e){e.preventDefault(),s.textContent=_.value,l.textContent=f.value,e.target.reset(),u(v)}))})();