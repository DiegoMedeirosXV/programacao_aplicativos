// FOR
let frutas = ["banana", "morango", "uva", "maçã", "melancia", "abacate"];

console.log(frutas[1]);

for(let contador = 0; contador<= 5; contador++){
    console.log(contador);
    console.log(frutas[contador]);
    console.log(`A fruta ${frutas[contador]} está na posição ${contador}`);
    console.log("A fruta", frutas[contador] + " está na posição", contador);
}

for(let i = 10; i >=0; i--){
 if(i == 10) {
     console.log("Iniciando contagem regressiva...");
 }   
    console.log(i);
 if(i == 0){
     console.log("Booooooom");
 }
}




// FOREACH
let protagonistas = ['Naruto', 'Luffy', 'Sung-jin-woo', 'Goku', 'Ash'];

protagonistas.forEach(function(element, index){
    console.log(element);
    console.log(index);
});

// WHILE
let contador = 1;
console.log('WHILE');
while(contador <= 3){
    console.log('O contador é menor ou igual a 3');
    console.log(contador);
    contador++;
}
console.log('------------');

// DO WHILE
console.log('DO WHILE');
let contadorrr = 1;
do{
    console.log('O contador é menor ou igual a 3');
    console.log(contadorrr);
    contadorrr++;
} while(contadorrr <= 3);
console.log('--------');