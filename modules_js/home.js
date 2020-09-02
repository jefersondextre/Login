export default function home(Loginbtn,CreateAccountbtn,cancelbtn,bp) {
    const d = document;
    let $contLogin = d.querySelector(".cont_Login"),
        $contCreateAccount = d.querySelector(".cont_CreateAccount");
    
    d.addEventListener('click', (e) => {
        let width = window.matchMedia(bp)
        if (width) {
            if (e.target.matches(Loginbtn)) {
                $contLogin.style.opacity= 1;
                $contLogin.style.visibility= "visible";
                $contLogin.style.pointerEvents = "visible";
                
                $contLogin.style.transition = "opacity .5s ease-out";       
            } else if (e.target.matches(CreateAccountbtn)) {
                $contCreateAccount.style.opacity= 1;
                $contCreateAccount.style.visibility = "visible";
                $contCreateAccount.style.pointerEvents = "visible";
                $contCreateAccount.style.transition = "opacity .5s ease-out";         
            }   
            if (e.target.matches(cancelbtn)) {
                        $contLogin.style.opacity= 0;
                        $contLogin.style.visibility = "hidden";
                        $contLogin.style.pointerEvents = "none";
                $contCreateAccount.style.opacity= 0;
                $contCreateAccount.style.visibility = "hidden";
                $contCreateAccount.style.pointerEvents = "none";
          
            } 
           
        }
    });
    
    
}
