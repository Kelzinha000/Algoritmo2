let precoQuilo, consumo, valorPagar 

precoQuilo = Number(prompt("Digite o valor do kilo "))
consumo = Number(prompt("Consumo do cliente em (gr)"))

valorPagar = consumo * (precoQuilo/1000)

document.write(`O valor a pagar R$${valorPagar}`)