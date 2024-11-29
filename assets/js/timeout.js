const sessionTimeout = 10 * 60 * 1000; // 5 minutos

const warningTimeout = sessionTimeout - 60 * 1000; // coloca um warning de expiração por inatividade em 1 minuto

let warningTimer, logoutTimer;

function resetTimers(){
    clearTimeout(warningTimer);
    clearTimeout(logoutTimer);

    warningTimer = setTimeout(() => {
        alert("Sua sessão irá expirar em 1 minuto. Verifique se está tudo salvo!");
    }, warningTimeout);

    logoutTimer = setTimeout(() => {
        alert("Sua sessão expirou! Você será redirecionado para a tela de login.");
        window.location.href = "login.html";
    }, sessionTimeout);
}

document.addEventListener("mousemove", resetTimers);
document.addEventListener("keydown", resetTimers);

resetTimers();