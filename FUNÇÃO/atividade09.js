
let nomeFun = [], salario = [], tempo = []


for(let i = 0; i < 5; i++){
    nomeFun[i] = prompt(`Digite o seu nome`)

}

for(let i = 0; i < 5; i++){
    salario[i] = prompt(`Digite o seu salário `)
}

for(let i = 0; i < 5; i++){
    tempo[i] = prompt(`Digite o tempo de serviço`)
}   



document.write(`${nomeFun} <br>`)
document.write(`${salario} <br>`)
document.write(`${tempo} <br>`)

//Faça um programa que preencha três vetores com cinco posições cada. O primeiro vetor receberá os nomes de cinco funcionários; o segundo e o terceiro vetor receberão, 
//respectivamente, o salário e o tempo de serviço de cada um. Mostre um primeiro relatório apenas com os nomes dos funcionários que não terão aumento; mostre o segundo 
//relatório apenas com os nomes e novos salários dos funcionários que terão aumento. Sabe-se que os funcionários que terão direito ao aumento são aqueles que possuem 
//tempo de serviço superior a cinco anos ou salário inferior a R$400,00. Sabe-se ainda que, se o funcionário satisfazer às duas condições anteriores, tempo de serviço 
//e salário, o aumento será de 35%; para o funcionário que satisfazer apenas à condição tempo de serviço, o aumento será de 25%; para aquele que satisfazer apenas à 
//condição salário, o aumento será de 15%

