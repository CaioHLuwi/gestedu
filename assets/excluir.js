    const formExcluir = document.querySelector("form[name=excluir]");

        /* Lógica de algoritmos: Buscar dados primeiro, depios exclui-los !!! */
        //Criamos uma função (subprograma) para buscar os dados no BD (xampp-MySQL)
        function buscarAluno(event, form){
            //Este comando é para prevenir o cancelamento de evento
            event.preventDefault();
            //variáveis para obter os dados digitados
            const ra  = parseInt(formExcluir.rmAluno.value);         
         
            if ( ra != "" ) {            
                    //Endereço do api que construimos
                    const URL = 'http://localhost/gest_edu/api/ler.php?RMAluno=' + ra;                   

                    fetch( URL , {method: 'GET'} ) //Método "GET"
                        //para transformar a resposta de texto para JSON
                        /*Uma Arrow function é exatamente como uma função/callback normal */   
                        .then(resp => resp.json())                                    
                        .then(data => mostrarResposta(data))
                        //Além disso podemos utilizar o método catch() para tratar erros.
                        //e a mensagem de erros estará console
                        .catch(erro => console.log(erro));            
            }
        }
        //Criamos uma função (subprograma) para excluir os dados no BD (xampp-MySQL)
        function excluirAluno(event, form){
            formExcluir.rmAluno.value = "";
            formExcluir.nomeAluno.value = "";
            formExcluir.cpfAluno.value = "";
            formExcluir.dataNascimentoAluno.value = "";   
            formExcluir.enderecoAluno = "";        
            formExcluir.telefoneAluno = "";    
            formExcluir.situacaoAluno = "";
            //Este comando é para prevenir o cancelamento de evanto
            event.preventDefault();
            //variáveis para obter os dados digitados
            const ra = parseInt(formExcluir.rmAluno.value);

            if ( ra != "" ) {            
                    //Endereço do api que construimos
                    const URL = 'http://localhost/gest_edu/api/deletar.php?RMAluno='+ra;                    

                     fetch( URL , {method: 'DELETE'} ) //Método "DELETE"
                        //para transformar a resposta de texto para JSON
                        /*Uma Arrow function é exatamente como uma função/callback normal */                                   
                        .then(data => mostrarRespostaDelete(data))
                        //Além disso podemos utilizar o método catch() para tratar erros.
                        //e a mensagem de erros estará console
                        .catch(erro => console.log(erro));            
            }
        }

        //Uma função para mostar uma mensagem e os dados buscados
        function mostrarResposta(data){
            console.log(data);       
            if(data.status != 200){
                alert("Aluno não encontrado!!!");
            } else {
                //Colocando os dados buscados nos campos do formulário para serem excluidos
                formExcluir.nomeAluno.value = data.information.Nome;
                formExcluir.cpfAluno.value = data.information.CPF;
                formExcluir.dataNascimentoAluno.value = data.information.DataNascimento;
                formExcluir.enderecoAluno.value = data.information.Endereco;
                formExcluir.telefoneAluno.value = data.information.Telefone;
                formExcluir.situacaoAluno.value = data.information.Situacao;            
            }
        }
        //Uma função para mostar uma mensagem e limpar os dados nos campos do formulário
        function mostrarRespostaDelete(data){        
            if(data.status == 204){
                alert("Dados excluído com sucesso!!!");
            } else {
                alert("Erro ao excluir!!!");
            }
            //limpar os dados nos campos do formulário   
        }        