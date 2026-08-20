/*
==========================================================
              SISTEMA TEMPORÁRIO DE LOGIN
==========================================================

ATENÇÃO:

Este código está sendo utilizado APENAS para testar o
funcionamento do cadastro e login enquanto o BACKEND e o
BANCO DE DADOS estão sendo desenvolvidos.

Por enquanto:
- Os dados do cadastro são salvos no localStorage.
- O login verifica os dados salvos no localStorage.
- Se o login estiver correto, o usuário é enviado para
  a página "home.html".

IMPORTANTE:
O localStorage NÃO será utilizado na versão final do site.

Quando o BACKEND estiver pronto, esta parte deverá ser
substituída pelas requisições para a API, que irá:

Cadastro:
HTML → JavaScript → API → Backend → Banco de Dados

Login:
HTML → JavaScript → API → Backend → Banco de Dados
                              ↓
                         Login válido
                              ↓
                          home.html

NÃO APAGAR ESTE CÓDIGO ainda.
Ele está sendo usado para testar o fluxo das páginas
até a integração com o backend ser concluída.

==========================================================
*/
// ============================
// CADASTRO
// ============================

const formCadastro = document.getElementById("formCadastro");

if (formCadastro) {

    formCadastro.addEventListener("submit", function(event) {

        event.preventDefault();

        const usuario = document.getElementById("usuario").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        const cadastro = {
            usuario: usuario,
            email: email,
            senha: senha
        };

        localStorage.setItem("cadastro", JSON.stringify(cadastro));

        alert("Cadastro realizado com sucesso!");

        window.location.href = "index.html";
    });
}


// ============================
// LOGIN
// ============================

const formLogin = document.getElementById("formLogin");

if (formLogin) {

    formLogin.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("emailLogin").value;
        const senha = document.getElementById("senhaLogin").value;

        const cadastroSalvo = localStorage.getItem("cadastro");

        if (!cadastroSalvo) {
            alert("Nenhum cadastro encontrado!");
            return;
        }

        const cadastro = JSON.parse(cadastroSalvo);

        if (email === cadastro.email && senha === cadastro.senha) {

            alert("Login realizado com sucesso!");
            window.location.href = "home.html";

        } else {

            alert("E-mail ou senha incorretos!");

        }
    });
}
// const text = document.getElementByld("Texto")
// const nome = document.getElementByld("nome")
// const email = document.getElementByld("email")
// const senha = document.getElementByld("senha")
// const message = document.getElementByld("message")

// function login() {
//     console.log(email.value);
//      console.log(senha.value);
// }



// if (email === "gs@example.com" && senha.value === "12345"){
//    message[0].innerText = "Login efetuado com sucesso!"
//    message[0].style.color = "green"
// }else {
//     message[0].innerText = "Login invalido!"
//    message[0].style.color = "red"


//    //setTimeout: função nativa do javascript, utilizada para programar uma execução após um periodo de tempo
//    //1000ms = 1 segundo
//    // () => {} função de seta ou arrow function
//    setTimeout(() =>{
//     message[0].innerText = "";
//    }, 2000)
// }


// const button = document.getElementById("btn")

// function alterarClasse(){
    
// DivMenu.classList.toggle("bntAtivo")

// }