const prompt = require("prompt-sync")();

let nota1, nota2, nota3, resultado;

                     console.log("PROGRAMA PARA CALCULAR NOTA ENTRE 0 A 10");
                     

nota1 = Number(prompt("Digite a primeira nota: "));
   nota2 = Number(prompt("Digite a segunda nota: "));
      nota3 = Number(prompt("Digite a terceira nota: "));
      resultado = (nota1 + nota2 + nota3) / 3; 
      if (resultado >= 7.0) {
            console.log("Aprovado");
            
      } else{
        console.log("Reprovado");
        
      }