
class Home_Controller{
    home(req,resp){
        resp.render("home/home_view.ejs")
    }

    sobre(req, resp){
        resp.render("home/sobre_view.ejs")
    }

    contato(req, resp){
        resp.render("home/contato_view.ejs")
    }

    eventos(req, resp){
        resp.render("home/eventos_view.ejs")
    }
}

module.exports = Home_Controller;