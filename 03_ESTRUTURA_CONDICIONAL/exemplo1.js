
     let valor1 , valor2

valor1 = Number(prompt("Informe o primeiro valor "))
valor2 = Number(prompt("Informe o segundo valor "))

// validação
if(valor1 === 0 || isNaN(valor1)){          // || isNaN() dá a gareantia que não irá receber outro tipo de dado a não ser numero
    alert(`Valor ${valor1} não é válido para o sistema`)
    location.reload()                       // para a pagina recarregar até receber o valor certo
}else if(valor2 === 0 || isNanN(valor2)){
    alert(`Valor ${valor1} não é válido para o sistema`)
    location.reload()
} else if(valor2 ===0 || isNaN(valor2)){
    alert(`Valor ${valor2} não é válido para o sistema`)
    location.reload()  // recarregar a pagina até receber um valor certo
}

// lógica
if(valor1>valor2){
     alert(`${valor1} é maior que ${valor2}`)
}else if(valor2>valor1){
    alert(`${valor2} é maior que ${valor1}`)
}else{
    alert(`Não é possível fazer a operação ou a comparação entre os valores ${valor1} - ${valor2}`)  
    location.reload()
}
  