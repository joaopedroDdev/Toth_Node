
document.addEventListener("DOMContentLoaded", ()=>{

    function excluir(e, disc_id, nome_Disc, linha){

        if(typeof disc_id == "undefined" && typeof nome_Disc == "undefined" ){
            disc_id = this.dataset.id;
            nome_Disc = this.dataset.name;
            linha = this.parentElement.parentElement;
        } 
        
        let obj = {
            id: disc_id
        };

        if (confirm(`Deseja realmente EXCLUIR a Disciplina ${nome_Disc}`)) {
            fetch("/disciplina/excluir",{
               method:"POST",
               headers:{
                    "Content-Type":"application/json"
               },
               body: JSON.stringify(obj)
            })
            .then((resposta) => resposta.json())
            .then((dados)=>{
                if(dados.ok) {
                    alert(`a Disciplina ${nome_Disc} foi excluida!`);
                    linha.style.transition = '.5s';
                    linha.style.opacity = '0';
                    setTimeout(()=> linha.remove(), 500);
                }
                else alert("Erro ao excluir a Disciplina");
            })
            .catch((erro) => console.error("erro:" ,erro));    
        }
    }

    function selecionar_todos() {
        let check_box_all = document.querySelector("#ckTodos");
        let check_list = document.querySelectorAll(".check_del");
        if(check_box_all.checked){
            check_list.forEach(ck_item => {
                ck_item.checked = check_box_all.checked;
            });
        } else{
            for (let ck_item of check_list) {
                ck_item.checked = check_box_all.checked;
            }
        }
    }

    function excluir_selecionados() {
        let disc_id;
        let nome_Disc;
        let check_list = document.querySelectorAll(".check_del");

        if (check_list.length > 0) {
            check_list.forEach(ck_item => {
                disc_id = ck_item.dataset.id;
                nome_Disc = ck_item.dataset.name;
                let linha = ck_item.parentElement.parentElement;
                if(ck_item.checked){ excluir(0, disc_id, nome_Disc, linha); }
            });        
        } else { alert("Não há item para ser excluído")}

        let check_box_all = document.querySelector("#ckTodos");
        check_box_all.checked = false;
    }

    let botoes_excluir = document.querySelectorAll(".btn.btn-danger.excluir");
    botoes_excluir.forEach(e => {
       e.addEventListener("click", excluir); 
    });

    let check_todos = document.querySelector("#ckTodos");
    check_todos.addEventListener("click", selecionar_todos);

    let botao_excluir_todos = document.querySelector("#btnExcluirSelecionados");
    botao_excluir_todos.addEventListener("click", excluir_selecionados); 
})