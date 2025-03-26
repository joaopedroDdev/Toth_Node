
document.addEventListener("DOMContentLoaded", ()=>{

    function cadastrar() {
        let input_serie = document.querySelector("#txtSerie");
        let input_id_ano_letivo = document.querySelector("#slctAnoLetivo");
        let lista_validacao = [];

        if (input_serie.value === "") lista_validacao.push(input_serie.id);
        if (input_id_ano_letivo.value === "0") lista_validacao.push(input_id_ano_letivo.id);
        if(lista_validacao.length == 0){
            let obj = {
                serie : input_serie.value,
                id_ano_letivo : input_id_ano_letivo.value
            }

            fetch("/serie/cadastrar", {
                method :"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            })
            .then((resposta) => resposta.json())
            .then((dados) => {
                if(dados.ok) alert(dados.msg);
                window.location.href = '/serie';
            })
            .catch((erro) => console.error("erro:", erro));

        }else {
            validar_campos(lista_validacao);
        }
    }

    function atualizar() {
        let input_id = document.querySelector("#hidden_id");
        let input_serie = document.querySelector("#txtSerie");
        let input_id_ano_letivo = document.querySelector("#slctAnoLetivo");
        let lista_validacao = [];

        if (input_serie.value === "") lista_validacao.push(input_serie.id);
        if (input_id_ano_letivo.value === "0") lista_validacao.push(input_id_ano_letivo.id);
        if(lista_validacao.length == 0){
            let obj = {
                id: input_id.value,
                serie : input_serie.value,
                id_ano_letivo : input_id_ano_letivo.value,
            }

            fetch("/serie/editar", {
                method :"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            })
            .then((resposta) => resposta.json())
            .then((dados) => {
                if(dados.ok) alert(dados.msg);
                window.location.href = '/serie';
            })
            .catch((erro) => console.error("erro:", erro));

        }else {
            validar_campos(lista_validacao);
        }
    }

    let input_serie = document.querySelector("#hidden_serie").value;
    if (input_serie == "") 
        document.querySelector("#btn_cadastro").addEventListener("click", cadastrar);
    else
        document.querySelector("#btn_atualizar").addEventListener("click", atualizar);
});