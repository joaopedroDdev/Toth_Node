const Turma_Model = require("../models/turma_model");

class Turma_Controller{
    
    async listar_view(req, resp){
        let turma_M = new Turma_Model();
        let lista_turmas = await turma_M.listar();
        resp.render("serie/listar_serie.ejs", { layout: "layout_admin_home.ejs", lista_turmas});
    }

    async cadastrar_turma(req, resp){
        if(req.body.turma == "",req.body.id_serie == "0"){
            resp.send({
                ok:false,
                msg: "Campo incompleto"
            })
            return;
        }
        
            let turma_M = new Turma_Model();
            turma_M.turma = req.body.turma;
            turma_M.id_serie = req.body.id_serie;

            let lista_turma = [];

            lista_turma = await turma_M.inserir();
            if(lista_turma){
                resp.send({
                ok: true,
                msg: "Turma Cadastrada com Sucesso!"
            })
        }
            else{
                resp.send({
                    ok:false,
                    msg:"Erro ao Inserir Turma"
                })
            }
        }
    }
    




module.exports = Turma_Controller;