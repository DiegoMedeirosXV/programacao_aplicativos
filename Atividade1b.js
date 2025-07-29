const prompt = require("prompt-sync")();

   let numeroA = Number(prompt("Digite um numero: "));
   let numeroB = Number(prompt("Digite segundo numero: "));
   
      console.log("Soma dos numeros: ", numeroA + numeroB);
      console.log("Subtracao dos numeros: ", numeroA - numeroB);
      console.log("Multiplicacao dos numeros: ", numeroA * numeroB);
   
        if (numeroB === 0) {
      console.log("Nao foi possivel dividir por zero");
      
      }
       else{
         let divisao = numeroA / numeroB;
         console.log("A divisão entre os numeros é: ", divisao);
      }
