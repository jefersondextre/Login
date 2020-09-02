const d = document;
export default function compararPassword() {
    const form = document.querySelector(".formAccount");
    const inputs = document.querySelectorAll("#formAccount input");
    // const validarinputs = (e) => {
    //     const expObj = {
    //         password : /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
    //         password2 : /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
    //     }
    //     // console.log(e.target.name);  //          password
    //     // console.log(e.target.value);  
    //     // console.log(expObj["password"]);  //     /^[A-Za-zÑñÁáÉéÍíÓóÚúÜüs]+$/
    //     switch (e.target.name) {    
    //         case "password":
    //                 if (expObj["password"].test(e.target.value)) {
    //                     document.getElementById("grup__password").classList.remove('form__grup-incorrect');
    //                     document.getElementById("grup__password").classList.add('form__grup-correct');
    //                     document.querySelector("#grup__password i").classList.add('fa-check-circle')
    //                     document.querySelector("#grup__password i").classList.remove('fa-times-circle')
                        
    //                 } else {
    //                     document.getElementById("grup__password").classList.add('form__grup-incorrect');
    //                     document.getElementById("grup__password").classList.remove('form__grup-correct');
    //                     document.querySelector("#grup__password i").classList.add('fa-times-circle')
    //                     document.querySelector("#grup__password i").classList.remove('fa-check-circle')
    //                 }
    //                 validarPassword2();
    //                 break;
    //             case "password2":
    //                 if (expObj["password2"].test(e.target.value)) {
    //                     document.getElementById("grup__password").classList.remove('form__grup-incorrect');
    //                     document.getElementById("grup__password").classList.add('form__grup-correct');
    //                     document.querySelector("#grup__password i").classList.add('fa-check-circle')
    //                     document.querySelector("#grup__password i").classList.remove('fa-times-circle')
                        
    //                 } else {
    //                     document.getElementById("grup__password").classList.add('form__grup-incorrect');
    //                     document.getElementById("grup__password").classList.remove('form__grup-correct');
    //                     document.querySelector("#grup__password i").classList.add('fa-times-circle')
    //                     document.querySelector("#grup__password i").classList.remove('fa-check-circle')
    //                 }           
    //                 break;
    //     }        
    // }
    const validarPassword2 = () => {
        const psw1 = document.getElementById("inputpassword");
        const psw2 = document.getElementById("inputpassword2");

        if (psw1.value !== psw2.value) {
            console.log('No son iguales');
            document.getElementById("grup__password2").classList.add('form__grup-incorrect');
            document.getElementById("grup__password2").classList.remove('form__grup-correct');
            document.querySelector("#grup__password2 i").classList.add('fa-times-circle')
            document.querySelector("#grup__password2 i").classList.remove('fa-check-circle')
        } else {
            document.getElementById("grup__password2").classList.remove('form__grup-incorrect');
            document.getElementById("grup__password2").classList.add('form__grup-correct');
            document.querySelector("#grup__password2 i").classList.remove('fa-times-circle')
            document.querySelector("#grup__password2 i").classList.add('fa-check-circle')
        }
    }

    // inputs.forEach((input) => {
    //         input.addEventListener('keyup',validarinputs)
    //         input.addEventListener('blur',validarinputs)
    // })
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });

}
