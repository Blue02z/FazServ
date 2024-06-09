let like = document.querySelectorAll(".like");
let curtidas = document.querySelectorAll(".curtidas");
let btnMenu = document.querySelector(".menu-icon")
let menuAberto = document.querySelector(".menu-aberto")
let body = document.body

curtidas.forEach((element, oi) => {
    like[oi].addEventListener("click", () =>{

        like[oi].classList.toggle("ativado")


        

        
    }) 
});

btnMenu.addEventListener("click", function(){
    menuAberto.classList.toggle("active")
    body.classList.toggle("active")
})