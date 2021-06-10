const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
//const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick() {
    console.log("hello", loginInput.value);
    console.log("click!!!");
}

loginButton.addEventListener("click", onLoginBtnClick);