const tela = require("readline-sync")
// perguntas:
const nome:string = tela.question("Qual é o seu nome? ")
const ano_nasc:number = tela.question("Qual seu ano de nascimento? ")
const idade:number =  2025 - ano_nascimento

console.log('Olá, '+ nome +' a sua idade é '+ idade + ' anos.')
