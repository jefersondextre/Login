import home from "./modules_js/home.js"
import validationform from "./modules_js/validationform.js";
import envioForm from "./modules_js/envioForm.js"

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    home(".Login",".CreateAccount",".cancelLink","(max-width:1024px)");
    validationform('.formAccount');
    validationform('.form_Login');
    envioForm()
});
