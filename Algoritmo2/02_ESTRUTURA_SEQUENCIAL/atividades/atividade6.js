/*Um supermercado está com uma promoção –
Para aumentar suas vendas no setor de
higiene, cada etiqueta de produto deve
exibir uma mensagem anunciando 50% de
desconto (para um item) na compra de três
unidades do produto. Elaborar um programa
que leia descrição e preço de um produto.
Após, apresente as mensagens indicando a
promoção. */ 

let nomeProduto, precoProduto, desconto, valorFinal 

nomeProduto = prompt("Digite o ome do produto")
precoProduto = Number(prompt("Digite o preco do produto "))

desconto = (precoProduto/2).toFixed(2)
valorFinal = ((precoProduto*3) - desconto).toFixed(2)

alert(`O valor com o desconto ${valorFinal}`)