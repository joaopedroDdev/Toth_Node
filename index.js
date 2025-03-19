
const express = require("express");
const express_EJS_Layout = require("express-ejs-layouts");
const router_Home = require("./routes/home_router");
const router_Login = require("./routes/login_router");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.use(express_EJS_Layout);
app.set("layout", "./layout_home_view.ejs");

app.use("/",router_Home);
app.use("/login",router_Login);


app.listen(5000, ()=>{
    console.log("sistema em execução no localhost:5000");
})