const prompt = require("prompt-sync")();

let desconto = 15;
let produto = 120;
let ValorDesconto;
let ValorSemiFinal;
let Taxa;
console.log("O produto vale,", produto); 

ValorDesconto = (produto * desconto) / 100;

console.log("Ganhou um desconto de:", ValorDesconto);

ValorSemiFinal = produto - ValorDesconto;

Taxa = ValorSemiFinal + 10;

console.log("Valor com desconto é de", ValorSemiFinal , "mais a taxa de entrega de 10 reais fica,", Taxa);

console.log("VALOR FINAL DO PEDIDO:", Taxa);




