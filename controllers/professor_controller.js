
class Professor_Controller {

    listar_home(req, resp){
        resp.render("professor/professor_home_view.ejs", { layout: false});
    }
}

module.exports = Professor_Controller;