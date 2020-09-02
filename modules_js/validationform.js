const d = document;
export default function validationform(form) {
    const $inputsAccounts = d.querySelectorAll(`${form} [required]`);
    // console.log($inputsAccounts[3].id); // el id del input password
    // console.log($inputsLogin);   //nodeList
    const creatingspam = ($inputs) => {
        $inputs.forEach((input) => {
            const $span = d.createElement("span");
            $span.id = input.name;
            $span.textContent = input.title;
            $span.classList.add("contact-form-error", "none","wrap");
            input.insertAdjacentElement('afterend', $span);      
        });     
    }
    creatingspam($inputsAccounts);
    d.addEventListener('keyup', (e) => {
        if(e.target.matches("form [required]")) {
            let $input = e.target,
                pattern = $input.pattern;
            // 
            if (pattern && $input.value !== "") {   
                // Si existe atribut pattern y el valor del imput es diferente de vacio evalua....
                    let regex = new RegExp(pattern);
                    if (!regex.exec($input.value)) {
                            
                            d.getElementById($input.name).classList.add("is-active");
                            d.getElementById($input.name).style.color=`#fff`;
                            d.getElementById(`grup__${$input.name}`).classList.add("form__grup-incorrect");
                            d.getElementById(`grup__${$input.name}`).style.color=`var(--color-incorrect)`;
                            d.getElementById(`grup__${$input.name}`).classList.remove("form__grup-correct");
                            d.querySelector(`#grup__${$input.name} i`).classList.remove('fa-check-circle');
                            d.querySelector(`#grup__${$input.name} i`).classList.add('fa-times-circle');

                    } else {
                            d.getElementById($input.name).classList.remove("is-active");
                            d.getElementById(`grup__${$input.name}`).classList.add("form__grup-correct");
                            d.getElementById(`grup__${$input.name}`).style.color=`var(--color-correct)`;
                            d.getElementById(`grup__${$input.name}`).classList.remove("form__grup-incorrect");
                            d.querySelector(`#grup__${$input.name} i`).classList.add('fa-check-circle');
                            d.querySelector(`#grup__${$input.name} i`).classList.remove('fa-times-circle');
                            // let valueinput1 = $input.value;
                }   
                // si el nombre del imput es password2 
            } else if (e.target.name === "password2") {
                        let input1 = d.getElementById("inputpassword");
                        let input2 = d.getElementById("inputpassword2");        
                            d.getElementById($input.name).classList.remove("is-active");
                    if (input1.value !== input2.value  ) {
                            d.getElementById($input.name).classList.add("is-active");
                            d.getElementById($input.name).style.color=`#fff`;
                            d.getElementById(`grup__${$input.name}`).classList.add("form__grup-incorrect");
                            d.getElementById(`grup__${$input.name}`).style.color=`var(--color-incorrect)`;
                            d.getElementById(`grup__${$input.name}`).classList.remove("form__grup-correct");
                            d.querySelector(`#grup__${$input.name} i`).classList.remove('fa-check-circle');
                            d.querySelector(`#grup__${$input.name} i`).classList.add('fa-times-circle');
                        
                    }else if(input2.value === input1.value ) {
                            // Aqui son iguales
                            d.getElementById($input.name).classList.remove("is-active");
                            d.getElementById(`grup__${$input.name}`).classList.add("form__grup-correct");
                            d.getElementById(`grup__${$input.name}`).style.color=`var(--color-correct)`;
                            d.getElementById(`grup__${$input.name}`).classList.remove("form__grup-incorrect");
                            d.querySelector(`#grup__${$input.name} i`).classList.add('fa-check-circle');
                            d.querySelector(`#grup__${$input.name} i`).classList.remove('fa-times-circle');
                    } else if ($input.value !== "") {
                            d.getElementById($input.name).classList.add("is-active");
                            d.getElementById(`grup__${$input.name}`).classList.add("form__grup-incorrect");
                            d.getElementById(`grup__${$input.name}`).classList.remove("form__grup-correct");
                    }
                
                    // Si el valor de input es vacio
            }else if ($input.value === "") {
                            d.getElementById(`grup__${$input.name}`).classList.remove("form__grup-incorrect");
                            d.getElementById(`grup__${$input.name}`).classList.remove("form__grup-correct");
                            d.getElementById($input.name).classList.remove("is-active");
            } 
            
            // Si no tiene un atributo pattern
            if (!pattern) {
                if ($input.value === "") {
                    d.getElementById($input.name).classList.add("is-active");
                    // d.getElementById($input.name).classList.remove("is-active");
                } else {
                    d.getElementById($input.name).classList.remove("is-active");
                    // d.getElementById($input.name).classList.add("is-active");
                }
            }
        }            
    });
}
