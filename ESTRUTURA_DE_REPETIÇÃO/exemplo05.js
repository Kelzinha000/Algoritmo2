let conta, valorConta, contador = 1, valorTotal
let  sair = false

do{
  nomeConta = prompt("Informe o tipo da conta:")
  valorConta = Number(prompt("Digite o valor da conta:"))
  document.write(`Conta -> ${nomeConta} : R$${valorConta.toFixed(2)}`)

  valorTotal =  valorTotal + valorConta;
  console.log(valorTotal)
  document.write(`<br>------------------------<br>`)
  document.write(`valor total: ${valorTotal}`)
  
  sair = confirm("Deseja cadastrar outra conta?")
  if(sair){
    continue
  }else{
    alert(`Você saiu da aplicação!`)
  }

}while(true);