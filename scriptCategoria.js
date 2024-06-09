let cadastrarBtn = document.querySelector(".btn-entrar")
let loginCamp = document.querySelector(".login-camp")
let body = document.body
let btnMenu = document.querySelector(".menu-icon")
let menuAberto = document.querySelector(".menu-aberto")
let btnEntrar = document.getElementById("btnEntrar")

cadastrarBtn.addEventListener("click", function(){
    loginCamp.classList.add("active")
    body.classList.add("active")
})

btnMenu.addEventListener("click", function(){
    menuAberto.classList.toggle("active")
    body.classList.toggle("active")
})

btnEntrar.addEventListener("click", function(){
    loginCamp.classList.add("active")
    body.classList.add("active")
    menuAberto.classList.remove("active")
})

