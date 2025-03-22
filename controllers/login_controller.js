
class Login_Controller{
    carregar_pagina(req,resp){
        resp.render("home/login_view.ejs",{
            
        })
    }

    logar(req, resp){

    }

}

module.exports = Login_Controller;