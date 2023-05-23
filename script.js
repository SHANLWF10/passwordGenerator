// program to generate random strings

let clear = document.getElementById('clear');

let copy = document.getElementById('copy');

let btn = document.getElementById('create');

let password = document.getElementById('password');

btn.addEventListener('click', ()=>{

// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$#_';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

    password.innerHTML = generateString(12);
});

// copy the generated password

copy.addEventListener('click', ()=>{
    if(password.innerHTML !== "Generate Random Password" && password.innerHTML === ""){
        navigator.clipboard.writeText(password.innerHTML)
    }else{
        password.innerHTML = "Generate Random Password"
    }
});

// clear the password field

clear.addEventListener('click', ()=>{
    password.innerHTML = "";
});