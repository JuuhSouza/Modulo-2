/* let titulo = document.querySelector("h1");
titulo.innerHTML = "Jogo do número secreto";

let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Escolha um número entre 1 e 10";
 */

let listaDeNumeros = [];
let numerolimite = 10;
let numeroSecreto = 5;
let tentativas = 1
 
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
}

    function exibirMensagemIcinial(){
    exibirTextoNaTela("h1", "Jogo do numero secreto");
    exibirTextoNaTela("p", "Escolha um numero entre 1 e 10");
    }

function verificarChute(){
    let chute = document.querySelector("input").value;
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1? "tentativas" : "tentativa";
        let mensagemTentativas = `Você acertou o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("p", "O numero secreto é menor");
        }else{
            exibirTextoNaTela("p", "O numero secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
    /* console.log(chute == numeroSecreto); */
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numerolimite + 1);
    /* lista */
    let quantidadeElemtentosLista = listaDeNumeros.length;
    if(quantidadeElemtentosLista == numerolimite){
        listaDeNumeros = [];
    }

    if(listaDeNumeros.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumeros.push(numeroEscolhido);
        console.log(listaDeNumeros)
        return numeroEscolhido;
    }
    /* lista final */
}

function limparCampo(){
     chute = document.querySelector('input');
     chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemIcinial();
    tentativas = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true);
}










