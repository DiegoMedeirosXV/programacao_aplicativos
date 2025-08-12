const prompt = require("prompt-sync")();


let nome1 = prompt("Digite primeiro nome: ");
let nome2 = prompt("Digite segundo nome: ");
let nome3 = prompt("Digite terceiro nome: ");

saudacao(nome1);
saudacao(nome2);
saudacao(nome3);

function saudacao(parametro1) {
    console.log(`Olá ${parametro1}! Seja bem-vindo(a)`);
    
}

