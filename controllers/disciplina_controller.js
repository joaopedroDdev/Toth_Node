const Disciplina_Model = require("../models/disciplina_model");

class Disciplina_Controller{

    async listar_view(req, resp){
        let disciplina_M = new Disciplina_Model();
        let lista_disciplina = await disciplina_M.listar();
        resp.render("disciplina/listar_disciplina.ejs", { layout: "layout_admin_home.ejs", lista_disciplina});
    }

    listar_cadastro(req, resp){
        let disciplina_para_alterar = undefined;
        resp.render("disciplina/cadastrar_view.ejs", { layout: "layout_admin_home.ejs", disciplina_para_alterar} );
    }

    async cadastrar_disciplina(req, resp) {
        if(req.body.nome == "" && req.body.carga_horaria == "0"){
            resp.send({
                ok : false,
                msg: "Campo incompleto"
            })
            return;
        }

        let disciplina_M = new Disciplina_Model();
        disciplina_M.nome = req.body.nome;
        disciplina_M.carga_horaria = req.body.carga_horaria;


        let lista_disciplina = [];

        lista_disciplina = await disciplina_M.inserir();
        if(lista_disciplina){
            resp.send({
                ok : true,
                msg: "Disciplina cadastrada com sucesso"
            })
        } else{            
            resp.send({
                ok : false,
                msg: "Erro ao inserir a Disciplina"
            })
        }
    }
    
    async excluir_disciplina(req, resp){
        let disciplina_M = new Disciplina_Model();
        disciplina_M.id = req.body.id;

        let lista_disciplina = await disciplina_M.excluir();
        if(lista_disciplina){
            resp.send({
                ok : true
            })
        } else{            
            resp.send({
                ok : false
            })
        }
    }

    async listar_editar(req, resp){
        const id = req.params.id;
        let disciplina_M = new Disciplina_Model();
        let disciplina_para_alterar = await disciplina_M.obter(id);
        disciplina_para_alterar = disciplina_para_alterar[0];

        resp.render("disciplina/cadastrar_view.ejs", { layout: "layout_admin_home.ejs", disciplina_para_alterar});
    }

    async editar_disciplina(req, resp) {
        if(req.body.nome == "" && req.body.carga_horaria == "0"){
            resp.send({
                ok : false,
                msg: "Campo incompleto"
            })
            return;
        }

        let disciplina_M = new Disciplina_Model();
        disciplina_M.id =  req.body.id;
        disciplina_M.nome = req.body.nome;
        disciplina_M.carga_horaria = req.body.carga_horaria;

        let lista_disciplina = [];

        lista_disciplina = await disciplina_M.atualizar();
        if(lista_disciplina){
            resp.send({
                ok : true,
                msg: "Disciplina cadastrado com sucesso"
            })
        } else{            
            resp.send({
                ok : false,
                msg: "Erro ao inserir o Disciplina"
            })
        }
    }
}

module.exports = Disciplina_Controller;