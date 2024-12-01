const formLogin = document.querySelector('form[name="login"]');
let loginField = formLogin.querySelector('input[name="loginField"]');
let passwordField = formLogin.querySelector('input[name="passwordField"]');
let warningSpace = document.querySelector('#login-message');
let passwordIcon = document.querySelector('#seePassword');
let buttonLogin = document.querySelector('#buttonLogin');

var perfil = "";

async function loginRequest(URL, optionsRequest) {
    let request = await fetch(URL, optionsRequest);
    let response = await request.json();
    mostrarResposta(response);
}

function fazerLogin(event) {

    event.preventDefault();
    const login = loginField.value;
    const senha = passwordField.value;

    const dados = {
        login: login,
        senha: senha
    };

    const optionsRequest = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados),
    };

    if (login != "" && senha != "") {
        const URL = 'http://localhost/gest_edu/api/login.php';
        loginRequest(URL, optionsRequest);
    } else { 
        warningSpace.style.display = 'flex';
        warningSpace.innerHTML = '<span> <i class="fa-solid fa-circle-exclamation"></i> Insira o seu usuário e senha </span>';
    }
}
function mostrarResposta(data) {
    console.log(data.status);
    if (data.status === 401) {
        warningSpace.innerHTML = `<span> <i class="fa-solid fa-triangle-exclamation"></i> ${data.message} </span>`
    } else {
        warningSpace.classList.replace('login-warning', 'login-sucess')
        warningSpace.innerHTML = `<span> Login efetuado com sucesso! </span>`;
        buttonLogin.style.backgroundColor = 'green';


        setTimeout(() => {

            perfil = data.information.perfil;
            if (perfil.toLowerCase().includes("universidade")) {
                location.href = "home.html";
            }
            else
                location.href = "home.html";
        }, 3000)
    }
}

function mostraSenha() {

    if(passwordField.getAttribute('type') === "password") {
        passwordField.setAttribute('type', 'text');
        passwordIcon.classList.remove('fa-eye');
        passwordIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.setAttribute('type', 'password');
        passwordIcon.classList.remove('fa-eye-slash');
        passwordIcon.classList.add('fa-eye');
    }   
}

passwordIcon.addEventListener("click", mostraSenha);

