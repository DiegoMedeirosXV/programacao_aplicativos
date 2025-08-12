// IF ELSE SWITCH


let frequencia = 74;

if(nota >= 7 && frequencia >= 75){
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

if(nota >= 7){
    if(frequencia >= 75){
        console.log("Aprovado");
    } else{
        console.log("Reprovado por frequência");
    }
} else{
    console.log("Reprovado por nota");
}



let horario = 08;
let mensagem = horario >= 12 && horario <= 18 ? "Aberto" : "Fechado";


if(horario >= 12 && horario <=18){
    mensagem = "Aberto"
} else {
    mensagem = "fechado"
}

let nota = 5.9;

if(nota >= 9){
    console.log("Voce tirou A");
} else if(nota >= 8){
    console.log("Voce tirou B");
} else if (nota >= 7){
    console.log("Voce tirou C");
} else if (nota >= 6){
    console.log("Você tirou D");
} else {
    console.log("Voce tirou E");
}

// switch

let direcao = 1;
switch(direcao){
    case 1: 
        console.log("Andar para cima");
        break;
    case 2:
        console.log("Andar para a esquerda");
        break;
    case 3:
        console.log("Andar para baixo");
        break;
    case 4:
        console.log("Andar para a direita");
    default:
        console.log("Não andar");
}