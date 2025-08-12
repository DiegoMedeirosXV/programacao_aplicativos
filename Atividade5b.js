const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite primeiro numero: "));
let num2 = Number(prompt("Digite o segundo numero: "));



// DIVISORIA    // CHAMANDO A FUNCAO
let MultiplicacaoResultado = Multiplicacao(num1, num2);
let ResultadoDivisao = divisao(num1, num2);
let ResultadoSubtracao = subtracao(num1, num2);
let ResultadoSoma = somar(num1, num2);




// PRINTA O NUMERO NA TELA
console.log(`Multiplicacao entre os numeros é: ${MultiplicacaoResultado}`);
console.log(`Soma entre os numeros é: ${ResultadoSoma}`);
console.log(`Subtracao entre os numeros é: ${ResultadoSubtracao}`);
console.log(`Divisao entre os numeros é: ${ResultadoDivisao}`);







// DECLARANDO A FUNÇÃO

//SOMA
function somar(num1, num2) {
    
     return num1 + num2;   
}

//SUBTRACAO
    function subtracao(num1, num2) {
        return num1 - num2;
        
    }

//DIVISAO
    function divisao(num1, num2) {
        return num1 / num2;
        
    }    

//MULTIPLICACAO
    function Multiplicacao(num1, num2) {
        return num1 * num2;
    }