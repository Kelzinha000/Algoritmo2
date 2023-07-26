// desclara todas as variaveis 
let nome, anoNascimento, anoAtual, idade

//2° variáveis que irão receber valor 
nome = prompt("Digite o seu nome: ")
anoNascimento = prompt("Digite o ano que você naceu: ")
anoAtual = prompt("Digite o ano atual: ")

//3° casting nas variaveis que possuem o valor numerico 
anoNascimento = parseInt(anoNascimento)
anoAtual = Number(anoAtual)

// Porcessar as variáveis que possuem valor 
idade = anoAtual - anoNascimento 

//5° Mostrar resultado
document.write(`Olá ${nome}, sua idade é ${idade} anos`)