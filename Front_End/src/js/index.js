const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const signUpLink = document.querySelector(".signUp-link");
const btnPopUp = document.querySelector(".btnLogin-popUp");
const iconClose = document.querySelector(".icon-closer");


signUpLink.addEventListener("click", () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener("click", () => {
    wrapper.classList.remove('active');
});
btnPopUp.addEventListener("click", () => {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener("click", () => {
    wrapper.classList.remove('active-popup');
});