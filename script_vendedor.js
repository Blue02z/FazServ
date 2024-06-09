
let cadastrarBtn = document.querySelector(".btn-entrar")
let loginCamp = document.querySelector(".login-camp")
let like = document.querySelectorAll(".like");
let curtidas = document.querySelectorAll(".curtidas");
let btnMenu = document.querySelector(".menu-icon")
let menuAberto = document.querySelector(".menu-aberto")
let body = document.body
let btnEntrar = document.getElementById("btnEntrar")
curtidas.forEach((element, oi) => {
    like[oi].addEventListener("click", () =>{

        like[oi].classList.toggle("ativado")


        

        
    }) 
});

btnMenu.addEventListener("click", function(){
    menuAberto.classList.toggle("active")
    body.classList.toggle("active")
})

cadastrarBtn.addEventListener("click", function(){
    loginCamp.classList.add("active")
    body.classList.add("active")
})

btnEntrar.addEventListener("click", function(){
    loginCamp.classList.add("active")
    body.classList.add("active")
    menuAberto.classList.remove("active")
})
    