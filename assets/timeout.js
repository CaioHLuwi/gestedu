const sessionTimeout = 10 * 60 * 1000; // 5 minutos

const warningTimeout = sessionTimeout - 60 * 1000; // coloca um warning de expiração por inatividade em 1 minuto

let warningTimer, logoutTimer;

function resetTimers(){
    clearTimeout(warningTimer);
    clearTimeout(logoutTimer);

    // Timer para exibir o aviso de inatividade
    warningTimer = setTimeout(() => {
        alert("Sua sessão irá expirar em 1 minuto. Verifique se está tudo salvo!");
    }, warningTimeout);

    // Timer para exibir o aviso de expiração da sessão e forçar o logout
    logoutTimer = setTimeout(() => {
        alert("Sua sessão expirou! Você será redirecionado para a tela de login.");
        window.location.href = "login.html";
    }, sessionTimeout);
}

document.addEventListener("mousemove", resetTimers);
document.addEventListener("keydown", resetTimers);

resetTimers();