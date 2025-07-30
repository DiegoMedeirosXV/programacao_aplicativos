const prompt = require("prompt-sync")();

 let n1;

 n1 = Number(prompt("Digite um numero: "));

  if (n1 % 2 === 0) {
    console.log("Numero e Par!");
  } else{
    console.log("Numero e Impar");
    
  }