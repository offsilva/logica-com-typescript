import readline = require('readline-sync')

console.clear()

const nomeAluno:string = readline.question('Informe seu nome: ')
const nota1:number = Number(readline.question('Informe a primeira nota: '))
const nota2:number = Number(readline.question('Informe a segunda nota: '))
const nota3:number = Number(readline.question('Informe a terceira nota: '))
let situacao:string = ''

const media = (nota1 + nota2 + nota3) / 3

if (media >= 7) {
   situacao = 'Aprovado'
} else { 
   situacao = 'Reprovado'
}

console.log('Olá, ${nomeAluno}! Sua média é de ${media.to.Fixed(2)} e sua situação é de ${situacao}')
	
