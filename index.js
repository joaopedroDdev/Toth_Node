
const express = require("express");
const express_EJS_Layout = require("express-ejs-layouts");


const app = express();

app.use("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extende: true}));

app.use(express_EJS_Layout);
app.use("layout", "./layout_view.ejs");


app.listen(5000, ()=>{
    console.log("sistema em execição no localhost:5000")
})