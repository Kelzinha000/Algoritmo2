let modeloVeiculo, precoVeiculo, valorEntrada, valorParcela

modeloVeiculo = prompt("Digite o modelo do veículo:")
precoVeiculo = parseFloat(prompt("Digite o valor do veículo:"))

valorEntrada = precoVeiculo / 2 //(*0.50)
valorParcela = precoVeiculo / 12

document.write(`O veiculo ${modeloVeiculo} <br> possui um valor de  ${precoVeiculo}  <br>  A entrada  é  ${valorEntrada} e o resto do pagamento é 12xR$${valorParcela.toFixed(2)}`)

// alt Z para escrever mais na mesma linha 
// <br> quebrar linha