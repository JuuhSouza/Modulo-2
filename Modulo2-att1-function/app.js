/* 1 - H1 */
let titulo = document.querySelector("h1");
titulo.innerHTML =  "Hora do Desafio!";

/* 2 - Botão */
function consoleClick(){
    console.log("O botão foi clicado");
}

/* 3 - alert */
function consoleAlert(){
    alert("Eu amo JS");
}

/* 4 - Cidade Prompt */
function CidadePrompt(){
    let cidade = prompt("Digite uma cidade")
    alert (`Estive em ${cidade} e lembrei de você`)
}

/* 5 - Soma */
function soma(){
    let n1 = parseInt(prompt("Digite um numero para começar a soma : "));
    let n2 = parseInt(prompt("Digite outro numero para concluir a soma : "));
    let resultado = n1 + n2;
    alert(`A soma desses números é : ${resultado}`);
}
