    const formExcluir = document.querySelector("form[name=excluir]");

        function buscarAluno(event, form){
            event.preventDefault();
            const ra  = parseInt(formExcluir.rmAluno.value);         
         
            if ( ra != "" ) {            
                    const URL = 'http://localhost/gest_edu/api/ler.php?RMAluno=' + ra;                   

                    fetch( URL , {method: 'GET'} )
                        .then(resp => resp.json())                                    
                        .then(data => mostrarResposta(data))
                        .catch(erro => console.log(erro));            
            }
        }
        function excluirAluno(event, form){
            formExcluir.rmAluno.value = "";
            formExcluir.nomeAluno.value = "";
            formExcluir.cpfAluno.value = "";
            formExcluir.dataNascimentoAluno.value = "";   
            formExcluir.enderecoAluno = "";        
            formExcluir.telefoneAluno = "";    
            formExcluir.situacaoAluno = "";

            event.preventDefault();
            const ra = parseInt(formExcluir.rmAluno.value);

            if ( ra != "" ) {            
                    const URL = 'http://localhost/gest_edu/api/deletar.php?RMAluno='+ra;                    

                     fetch( URL , {method: 'DELETE'} )                        
                        .then(data => mostrarRespostaDelete(data))
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