
    var perfil = ""; 
    function buscar(event, form){

        event.preventDefault();
        const login  = document.form1.txtLogin.value;
        const senha  = document.form1.txtSenha.value;
            
        const dados = { 
            login: login,
            senha: senha
        };

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados),
        };

        if (login != "" && senha != "") { 
                    const URL = 'http://localhost/gest_edu/api/login.php';                      
                    fetch(URL , options)                               
                    .then(response => response.json())
                    .then(data => mostrarResposta(data))
                    .catch(erro => console.log(erro));            
        }
    }
    function mostrarResposta(data){
        console.log(data);       
        if(data.status == 401){ 
            document.getElementById("mensagem").innerHTML =  data.message ;     
        } else {
            console.log(data.information);
            perfil = data.information.perfil ;
            if (perfil.toLowerCase().includes("admin")){ 
                location.href = "index.html";                    
            }
            else 
                location.href = "listaSec.html"; 
        }
    }