let medicamento, valorMed, promocao

medicamento = prompt("Informe o medicamento")
valorMed = Number(prompt("Digite o valor do medicamento"))

promocao = Math.floor(valorMed * 2)


document.write(`O valor do descontro é ${promocao}`)