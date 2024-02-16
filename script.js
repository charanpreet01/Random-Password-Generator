let passwordBox = document.querySelector("#password");

let lengthPass = document.querySelector("#length");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const digits = "0123456789";
const symbols = "@<>/_-#";
const allChar = upperCase + lowerCase + digits + symbols;

let generatePassword = () => {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];

    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];

    password += digits[Math.floor(Math.random() * digits.length)];

    password += symbols[Math.floor(Math.random() * symbols.length)];


    let length = parseInt(lengthPass.value);

    while (length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    passwordBox.value = password;
}

document.querySelector("button").addEventListener("click", generatePassword)

// copy the password
let copyPassword = () => {
    passwordBox.select();
    document.execCommand("copy");
}

document.querySelector(".display img").addEventListener("click", copyPassword);