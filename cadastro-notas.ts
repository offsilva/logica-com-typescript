import readline = require('readline-sync')

console.clear()

const nomeAluno:string = readline.question('Informe seu nome: ')
const nota1:number = Number(readline.question('Informe a primeira nota: '))
const nota2:number = Number(readline.question('Informe a segunda nota: '))
const nota3:number = Number(readline.question('Informe a terceira nota: '))
const numeroFaltas:number = Number(readline.question('Informe a quanditade de faltas: '))
let situacao:string = ''

const media = (nota1 + nota2 + nota3) / 3

if (media >= 7 && numeroFaltas < 5) {
  situacao = 'Aprovado'
} else if (media >= 5 && media < 7 && numeroFaltas < 3) {
  situacao = 'Recuperação'
} else { 
  situacao = 'Reprovado'
}

console.log(`Olá, ${nomeAluno}! Sua média é de ${media.toFixed(1)}! e um total de ${numeroFaltas} faltas e sua situação é de ${situacao}!`)
	
