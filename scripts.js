const text = document.getElementByld("Texto")
const nome = document.getElementByld("nome")
const email = document.getElementByld("email")
const senha = document.getElementByld("senha")
const message = document.getElementByld("message")

function login() {
    console.log(email.value);
     console.log(senha.value);
}



if (email === "gs@example.com" && senha.value === "12345"){
   message[0].innerText = "Login efetuado com sucesso!"
   message[0].style.color = "green"
}else {
    message[0].innerText = "Login invalido!"
   message[0].style.color = "red"


   //setTimeout: função nativa do javascript, utilizada para programar uma execução após um periodo de tempo
   //1000ms = 1 segundo
   // () => {} função de seta ou arrow function
   setTimeout(() =>{
    message[0].innerText = "";
   }, 2000)
}


const button = document.getElementById("btn")

function alterarClasse(){
    
DivMenu.classList.toggle("bntAtivo")

}