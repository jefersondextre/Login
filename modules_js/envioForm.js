const d = document;
export default function envioForm() {
    d.addEventListener('submit', () => {
        const $loader = d.querySelector(".cont_Loader-img");
        $loader.classList.remove('none');

        setTimeout(() => {
            const $loader = d.querySelector(".cont_Loader-img"),
                $messages = d.querySelector(".cont_Loader-messages"),
                $form_Login = d.querySelector(".form_Login"),
                $form_Account = d.querySelector(".form_Account")
                
                $loader.classList.add("none");
                $messages.classList.remove("none");
        
                $form_Login.reset();
                $form_Account.reset();
            setTinterval((e) => {
                $messages = d.querySelector(".cont_Loader-messages");
                // $messages.style.color = "#FFD868";
                // $messages.style.zindex = 1000;
                $messages.classList.add("none");
                
                $form_Login.reset();
                $form_Account.reset();
                } , 8000)

        }, 10000)

    })
}
