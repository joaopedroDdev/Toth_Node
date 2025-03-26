
class Professor_Controller {

    listar_home(req, resp){
        resp.render("professor/professor_home_view.ejs", { layout: "layout_professor_home.ejs"});
    }
}

