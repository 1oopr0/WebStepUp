const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
