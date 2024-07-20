let username = document.querySelector(".username");
let password = document.querySelector(".password");
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let h1 = document.querySelector("h1");

button1.addEventListener("click", function (event) {
    event.preventDefault();

    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);

    username.value = "";
    password.value = "";
});

button2.addEventListener("click", function (event) {
    event.preventDefault();

    if (username.value === localStorage.getItem("username") && password.value === localStorage.getItem("password")) {
        h1.textContent = username.value;
    }      
    
    username.value = "";
    password.value = "";
});

button3.addEventListener("click", function (event) {
    event.preventDefault();

    localStorage.removeItem("username");
    localStorage.removeItem("password");

    username.value = "";
    password.value = "";

    h1.textContent = "Foydalanuvchi yo'q";
});