(()=>{"use strict";var e={915:(e,t,n)=>{e.exports=n.p+"156d07d84524cc942d68.jpg"},82:(e,t,n)=>{e.exports=n.p+"99b6e21b94798ec54759.jpg"},291:(e,t,n)=>{e.exports=n.p+"167b0005add1694393db.jpg"},874:(e,t,n)=>{e.exports=n.p+"50bb648b47735ffba9eb.jpg"},863:(e,t,n)=>{e.exports=n.p+"e2daa86be296ebffd99c.jpg"},809:(e,t,n)=>{e.exports=n.p+"d75cf55cc6dcd72e4e9a.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}n.m=e,n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",n.b=document.baseURI||self.location.href;var o=[{name:"Архыз",link:new URL(n(915),n.b)},{name:"Челябинская область",link:new URL(n(291),n.b)},{name:"Иваново",link:new URL(n(874),n.b)},{name:"Камчатка",link:new URL(n(863),n.b)},{name:"Холмогорский район",link:new URL(n(809),n.b)},{name:"Байкал",link:new URL(n(82),n.b)}];function r(e){e.target.classList.toggle("card__like-button_is-active")}function c(e){"Escape"===e.key&&u(document.querySelector(".popup_is-opened"))}function i(e){e.classList.add("popup_is-animated"),setTimeout((function(){e.classList.add("popup_is-opened")}),1),document.addEventListener("keydown",c)}function u(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c)}var a={baseUrl:"https://nomoreparties.co/v1/wff-cohort-31",headers:{authorization:"6c923aa8-3b4d-40ea-8d28-9c9e04b6301a","Content-Type":"application/json"}},p=document.querySelector(".places__list"),d=document.querySelector(".profile__edit-button"),l=document.querySelector(".profile__add-button"),s=document.querySelector(".profile__description"),_=document.querySelector(".profile__title"),f=document.querySelector(".popup__input_type_name"),m=document.querySelector(".popup__input_type_description"),v=document.querySelector(".popup_type_edit"),y=document.querySelector(".popup_type_new-card"),b=document.querySelectorAll(".popup"),L=document.forms["edit-profile"],q=document.forms["new-place"],S=q.querySelector(".popup__input_type_card-name"),g=q.querySelector(".popup__input_type_url"),h=document.querySelector(".popup_type_image"),E=document.querySelector(".popup__content_content_image"),k=E.querySelector(".popup__image"),x=E.querySelector(".popup__caption"),w=E.querySelector(".popup__close"),j=function(e,t){t.validity.valid?function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("popup__input_invalid"),n.textContent="",n.classList.add("".concat(t.id,"-error_hidden"))}(e,t):function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add("popup__input_invalid"),o.textContent=n,o.classList.remove("".concat(t.id,"-error_hidden"))}(e,t,t.validationMessage)},C=function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(t)?e.classList.remove("button__inactive"):e.classList.add("button__inactive")};function U(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"prepend",n=function(e,t,n,o){var c=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),i=c.querySelector(".card__image");i.src=e.link,i.alt=e.name;var u=c.querySelector(".card__description"),a=u.querySelector(".card__like-button"),p=u.querySelector(".card__title");p.textContent=e.name;var d=c.querySelector(".card__delete-button");return i.addEventListener("click",(function(){o(i,p)})),d.addEventListener("click",(function(){return function(e){e.remove()}(c)})),a.addEventListener("click",r),c}(e,0,0,A);"prepend"!==t&&"append"!==t||p[t](n)}function A(e,t){k.src=e.src,k.alt=e.alt,x.textContent=t.textContent,i(h)}fetch("".concat(a.baseUrl,"/cards"),{headers:a.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){})).catch((function(e){console.log(e)})),d.addEventListener("click",(function(){i(v),f.value=_.textContent,m.value=s.textContent,Array.from(document.querySelectorAll(".popup")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),Array.from(e.querySelectorAll(".popup__form")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){var t=Array.from(e.querySelectorAll(".popup__input")),n=e.querySelector(".popup__button");C(n,t),t.forEach((function(o){o.addEventListener("input",(function(){j(e,o),C(n,t)}))}))}(e)}))}))})),l.addEventListener("click",(function(){i(y)})),b.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-opened")&&u(e),t.target.classList.contains(w.classList)&&u(e)}))})),q.addEventListener("submit",(function(e){e.preventDefault(),U({name:S.value,link:g.value}),u(y),e.target.reset()})),o.forEach((function(e){U(e,"append")})),document.querySelectorAll(".popup__input").forEach((function(e){console.log("сработал эддивентлистнер"),e.addEventListener("input",(function(){console.log("Вошли в инпут"),j(e)})),j(e)})),L.addEventListener("submit",(function(e){e.preventDefault(),_.textContent=f.value,s.textContent=m.value,e.target.reset(),u(v)}))})();