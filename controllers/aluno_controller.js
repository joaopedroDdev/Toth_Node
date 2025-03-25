
class Aluno_Controller {

    listar_home(req, resp){
        resp.render("aluno/aluno_home_view.ejs", { layout: "layout_aluno_home.ejs"});
    }
}

module.exports = Aluno_Controller;