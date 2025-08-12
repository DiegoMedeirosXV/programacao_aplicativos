let times = ['Coritiba', 'Athletico', 'Maringa', 'Operário', 'Londrina'];
times[1] = 'Rio Branco';
times.push('Paraná'); // insere elemento
times.pop(); // remove ultimo elemento
times.unshift('Cascavel'); // insere na primeira posição
times.shift(); // remove da primeira posição
console.log(times.length); // verifica o tamanho do array
console.log(times);
console.log(times.sort());
console.log(times);
console.log(times.reverse());



console.log(times.indexOf('Maringa'));
let email = 'ber@email'

if(!email.includes('@') || !email.includes('.com')){
    console.log('Preencher email corretamente');
}
let idade = -32;
if(idade <0 || idade > 130){
    console.log('Idade incorreta');
}

console.log(times.includes('Coritiba') || times.includes('Flamengo'));

console.log(times);


// ARRAYS BIDIMENSIONAIS / MATRIZES

let alunos = [
    ['João', 10],
    ['José', 6],
    ['Maria', 7.5]
]
console.log(`O aluno ${alunos[0][0]} tem ${alunos[0][1]} de nota`);

for (let i = 0; i < alunos.length; i++) {    
    console.log(`${alunos[i]}`);
    console.log(`${alunos[i][0]} tirou ${alunos[i][1]}`);
}