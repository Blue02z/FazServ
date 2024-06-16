let btnMais = document.querySelector(".btn-mais")
let btnMenos = document.querySelector(".btn-menos")
let categoria1 = document.querySelector(".container-categorias")
let categoria2 = document.querySelector(".container-categorias2")
let cadastrarBtn = document.querySelector(".btn-entrar")
let loginCamp = document.querySelector(".login-camp")
let body = document.body
let btnMenu = document.querySelector(".menu-icon")
let menuAberto = document.querySelector(".menu-aberto")
let btnEntrar = document.getElementById("btnEntrar")
let notificacoes = document.querySelector(".noti-container")
let fodase = document.querySelector(".fodase")
let email = document.getElementById("email")
let senha = document.getElementById("senha")
let btnEnviar = document.getElementById("btn-enviar")
let form = document.form
let erro = document.getElementById("erro")
let menuEntrada = document.querySelector(".menuEntrada")
let userIcon = document.querySelector(".cunamata")
let userContainer = document.querySelector(".user-container")
let btnCadastrar = document.getElementById("btnCadastrar")



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


btnEntrar.addEventListener("click", function(){
    loginCamp.classList.add("active")
    body.classList.add("active")
    menuAberto.classList.remove("active")
})


btnMenu.addEventListener("click", function(){
    menuAberto.classList.toggle("active")
    body.classList.toggle("active")
})





fodase.addEventListener("click", function(){


    if(userContainer.classList.contains("active")){
        userContainer.classList.remove("active")
    }else{
        notificacoes.classList.toggle("active")
    }
})


function AtualizarHora(){
    let oi = erro.innerHTML = ""
    return oi;
    
}
AtualizarHora()
setInterval(AtualizarHora, 3500);

visibilidade.addEventListener("click", function(){
    if(senha.type === "password"){
        senha.setAttribute("type", "text")
        visibilidade.innerHTML = "visibility_off "

    }else{
        senha.setAttribute("type", "password")
        visibilidade.innerHTML = "visibility"
    }
    

})


btnEnviar.addEventListener("click", function(){
    if(senha.value == "adm123" && email.value == "admin123@gmail.com"){
        menuEntrada.classList.add("desactive")
        loginCamp.classList.remove("active")
        userIcon.classList.add("active")
        body.classList.remove("active")
        btnCadastrar.classList.add("desactive")

        btnEntrar.classList.add("desactive")
    }else{
        erro.innerHTML = `<p id="msgErro">Insira um E-mail ou senha válidos</p>`
        senha.value = ""
        email.value = ""
    }
    
})

email.addEventListener("keydown", function(){
    if(event.key === "Enter"){
        console.log("oii")
        btnEnviar.click()
    }
})

senha.addEventListener("keydown", function(){
    if(event.key === "Enter"){
        console.log("oii")
        btnEnviar.click()
    }
})




userIcon.addEventListener("click", function(){
    if(notificacoes.classList.contains("active")){
        notificacoes.classList.remove("active")
    }else{
        userContainer.classList.toggle("active")
    }
    
})