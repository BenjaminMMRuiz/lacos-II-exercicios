// # Exercício 2

// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

// let tabuada = Number(prompt(`Digite um numero para executar a tabuada: `))

// for(let i = 1; i <=10; i++){
// console.log(`${tabuada} x ${i} = ${tabuada*i}`)

// }

let tabuada = Number(prompt(`Digite um numero para executar a tabuada: `))

for(let mult in tabuada){

    mult = [1]

    console.log(`${tabuada} x ${mult} = ${tabuada*mult}`)

}


// **Utilize o for...in para resolver**


// Exemplo com entrada **`7`**:
// ```jsx
// 7
// 14
// 21
// 28
// 35
// 42
// 49
// 56
// 63
// 70
// ```