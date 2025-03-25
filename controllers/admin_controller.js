
class Admin_Controller {

    listar_home(req, resp){
        resp.render("admin/admin_home_view.ejs", { layout: "layout_admin_home.ejs"});
    }
}

module.exports = Admin_Controller;