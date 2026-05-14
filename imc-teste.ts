import readline = require('readline-sync')

console.clear()

const nomePessoa:string = readline.question('Informe seu nome: ')
const peso:number = Number(readline.question('Informe seu peso: '))
const altura:number = Number(readline.question('Informe sua altura: '))
let situacao:string =  '' 

const imc = ( peso / (altura * altura))

if (imc < 18.5) {
 situacao = 'baixo peso'
} else if (imc < 24.9) {
 situacao = 'peso normal'
} else if (imc < 29.9) {
 situacao = 'excesso de peso'
} else if (imc < 34.9) {
 situacao = 'obesidade classe 1'
} else if (imc < 39.9) {
 situacao = 'obesidade classe 2'
} else if (imc >= 40.0) {
 situacao = 'obesidade classe 3'
}

console.log(`Olá, ${nomePessoa}! Seu IMC é de ${imc.toFixed(1)} logo você está ${situacao}!`)
