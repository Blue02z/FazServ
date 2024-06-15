
let cadastrarBtn = document.querySelector(".btn-entrar")
let loginCamp = document.querySelector(".login-camp")
let like = document.querySelectorAll(".like");
let curtidas = document.querySelectorAll(".curtidas");
let btnMenu = document.querySelector(".menu-icon")
let menuAberto = document.querySelector(".menu-aberto")
let body = document.body
let btnEntrar = document.getElementById("btnEntrar")
let textinho = document.getElementById("textinho")
let submitBtn = document.querySelector(".submit-btn")
let textCamp = document.querySelector(".text-camp")
let minimizar = document.querySelector(".minimizar")
let chatOpen = document.querySelector(".chat-open")
let campoChat = document.querySelector(".campo-chat")
let sla = document.querySelector(".user-chat-open")
let maximizar = document.querySelector(".maximizar")
let btnChat = document.querySelector(".btn-chat")
let visibilidade = document.getElementById("visibilidade")
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
    inn
    menuAberto.classList.remove("active")
})




function AtualizarHora(){
    let date = new Date();
    let hora = String(date.getHours()).padStart(2, 0)
    let min = String(date.getMinutes()).padStart(2, 0)
    let horaFormatada = hora + ":" + min
    return horaFormatada;
    
}



AtualizarHora()
setInterval(AtualizarHora, 1000);




submitBtn.addEventListener("click", function(){

    texto = textinho.value

    if(texto === "" || texto === null){
        console.log("nou")
    }else{
        textCamp.innerHTML += `<div class="texto">
        <p>${texto}</p>
    </div>
    
    <div class="hora"> <p> ${AtualizarHora()}</P> </div>
    `
    console.log(texto)
    }
    
    textinho.value = ""

    
})


    textinho.addEventListener("keydown", function(){
        if(event.key === "Enter"){
            console.log("oii")
            submitBtn.click()
        }
    })


minimizar.addEventListener("click", function(){
    chatOpen.style = "display:none;"
    sla.classList.add("active")
})

maximizar.addEventListener("click", function(){
    chatOpen.style = "display:flex;"
    sla.classList.remove("active")
})

btnChat.addEventListener("click", function(){
    campoChat.classList.add("active")
} )


visibilidade.addEventListener("click", function(){
    if(senha.type === "password"){
        senha.setAttribute("type", "text")
        visibilidade.innerHTML = "visibility_off "

    }else{
        senha.setAttribute("type", "password")
        visibilidade.innerHTML = "visibility"
    }
    

})