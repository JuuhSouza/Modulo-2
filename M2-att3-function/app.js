/* 1 - IMC */
function calculandoIMC(altura, peso){
  let imc = peso / (altura * 2);
  console.log(`Seu imc é de ${imc}`);
}
calculandoIMC(1.63, 64);

/* 2 - Valor fatorial não consegui entender muito*/
function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }
  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }
  return fatorial;
}

let numero = 8;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

/* 3 - Conversor dolar */
function converterDolarParaReal(valorDolar) {
  let cotacao = 4.80;
  let valorEmReais = valorDolar * cotacao;
  return valorEmReais.toFixed(2); /* retorna com 2 casas decimais */
}

/* 4 - area e perimetro */
function mostrarAreaEPerimetro(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);
  alert(`Área da sala: ${area} metros quadrados`);
  alert(`Perímetro da sala: ${perimetro} metros`);
}

/* 5 -  área e o perímetro */
function mostrarAreaEPerimetroCircular(raio) {
  let pi = 3.14;
  let area = pi * (raio ** 2);
  let perimetro = 2 * pi * raio;
  alert(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
  alert(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

/* 6 - tabuada */
function tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    alert(`A tabuada de ${numero} x ${i} = ${resultado}`);
  }
}
let numero2 = 4;
tabuada(numero2);