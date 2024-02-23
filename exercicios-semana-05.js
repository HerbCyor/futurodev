// exercicio 01

let frutas1 = ['banana', 'maçã', 'tomate']
console.log(frutas1[1])

// exercicio 01 - desafio
const prompt = require('prompt-sync')()

let frutas2 = []
for (let i = 0; i < 3; i++) {
    frutas2.push(prompt("digite o nome da fruta: "))
}

console.log(frutas2[1])

// exercicio 02
frutas2.push("goiaba")
frutas2.shift()
console.log(frutas2)

//exercicio 03
const numeros = [1, 2, 3, 4, 5]

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

// exercicio 03 - desafio

const numeros2 = []
for (let i = 0; i < 5; i++) {
    numeros2.push(parseInt(prompt("adicione um numero ao array: ")))
}

// exercicio 04
let initialValue = 0
let soma = numeros2.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
console.log(soma)

// exercicio 05
const numerosOrdenados = [...numeros2].sort()
console.log(numerosOrdenados)

// exercicio 06
const pares = numerosOrdenados.filter((numero => (numero % 2 == 0)))
console.log(pares)

// exercicio 07
const quadrados = numeros2.map((x) => x ** 2)
console.log(quadrados)