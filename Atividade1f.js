const prompt = require("prompt-sync")();

  let total_conta, quantidade_clientes, valor_final;

    total_conta = Number(prompt("DIGITE O TOTAL DA CONTA: "));
    quantidade_clientes = Number(prompt("QUANTAS PESSOAS IRAM PAGAR?: "));

    valor_final = total_conta / quantidade_clientes;

    if (quantidade_clientes === 1) {
        console.log("O valor final da conta:", total_conta);
        
    } if (quantidade_clientes > 1) {
        console.log("CADA UM IRA PAGAR:", valor_final);
        
    } 
    if (total_conta === 0) {
        console.log("GRATIS");
        
    }
    
