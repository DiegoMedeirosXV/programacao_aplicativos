const prompt = require("prompt-sync")();

     let distancia, consumo_medio, preco_combustivel, tamanho_tanque;
     let valor_total_gasto, consumo_litro, qtd_tanques;

        distancia = Number(prompt("Digite a distancia: "));
        consumo_medio = Number(prompt("Digite o consumo medio do veiculo em km.l: "));
        preco_combustivel = Number(prompt("Digite o valor do Combustivel: "));

  valor_total_gasto = (distancia / consumo_medio) * preco_combustivel;
  consumo_litro = (valor_total_gasto / preco_combustivel);

  qtd_tanques = valor_total_gasto / (tamanho_tanque * preco_combustivel);

    console.log("Valor total gasto e de:", valor_total_gasto);
    console.log("Consumo em Litro e de:", consumo_litro);
   