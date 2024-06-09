let like = document.querySelectorAll(".like");
let curtidas = document.querySelectorAll(".curtidas");


curtidas.forEach((element, oi) => {
    like[oi].addEventListener("click", () =>{

        like[oi].classList.toggle("ativado")


        

        
    }) 
});

