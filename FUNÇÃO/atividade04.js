// usuario vai passra por parametro de uma função as nota1, nota 2 e nota 3 ( A -0 arimetica ou P - ponderada)
// pesos 5, 3 ,2. criar uma função que valida as notas 

/*
let  media, resultado

media = prompt(`Digite A - Média aritmética e P - Média Ponderaada`)
n1 = Number(prompt(`Digite a nota 1:`))
n12= Number(prompt(`Digite a nota 2:`))
n3 = Number(prompt(`Digite a nota 3:`))

function notas(n1,n2,n3){
  if(media === "A"){
    resultado = (n1 + n2 +n3)/ 3
    return resultado
    
    
  } if(media === "P"){
    resultado = (n1 * 5 + n2 * 3 + n3 *2 ) / (5+3+ 2)
    return resultado
}

  }


  document.write(`Sua média aritmética é ${resultado}`)
  document.write(`Sua média Ponderada é ${resultado}`)
  */

// CORREÇÃO - Atividade do Carlos 14/09


let nota1 , nota2, nota3, opcao, media
const peso1 = 5, peso2 = 3 , peso3 = 2

do {
nota1 = Number(prompt(`Digite a nota 1:`))
validaNota(nota1)
}while(nota1 < 0  || nota1 > 10 || isNaN(nota1))


do{
nota2 = Number(prompt(`Digite a nota 2:`))
validaNota(nota2)
}while (nota2 < 0  || nota2 > 10 || isNaN(nota2))

do {
nota3 = Number(prompt(`Digite a nota 3:`))
validaNota(nota3)
}while(nota3 < 0  || nota3 > 10 || isNaN(nota3))


do {
opcao = prompt(`Digite  \nA - Média aritmética e \nP - Média Ponderaada`)
opcao = opcao.toUpperCase()
if(opcao != `A` && opcao != `P` &&  (opcao.length > 2 && opcao.length < 0 )){}
}while(opcao != '' )



function valida_media ( nota1, nota2, nota3){
    if(opcao === 'A'){
     return nota1 + nota2 + nota3 / 3
    }else{
        return((nota1+peso1)+ (nota2 * peso2)+ (nota3*peso3))/ (peso1+peso2+peso3)
    }
} // correta
console.log(media)

// function validaNota (nota){
//     if(nota < 0  || nota > 10 || isNaN(nota))
//   alert(`Nota inválida`)
//   return
// }else if { 
//     alert(`nota vádlida`)
//     return
// }

// console.log(calcular_media(nota1, nota2, nota3))