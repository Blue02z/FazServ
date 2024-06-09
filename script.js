let btnMais = document.querySelector(".btn-mais")
let btnMenos = document.querySelector(".btn-menos")
let categoria1 = document.querySelector(".container-categorias")
let categoria2 = document.querySelector(".container-categorias2")
let cadastrarBtn = document.querySelector(".btn-entrar")
let loginCamp = document.querySelector(".login-camp")
let body = document.body
let btnMenu = document.querySelector(".menu-icon")
let menuAberto = document.querySelector(".menu-aberto")

btnMais.addEventListener("click", function(){
    categoria1.classList.add("off")
    categoria2.classList.add("active")

})


btnMenos.addEventListener("click", function(){
    categoria1.classList.remove("off")
    categoria2.classList.remove("active")

})

cadastrarBtn.addEventListener("click", function(){
    loginCamp.classList.add("active")
    body.classList.add("active")
})

btnMenu.addEventListener("click", function(){
    menuAberto.classList.toggle("active")
    body.classList.toggle("active")
})