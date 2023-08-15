let valorTempo, tempoUso, valorUso, valorPagar

 valorTempo = Number(prompt("Digite o valor a ser pago a cada 15 minutos: "))
 tempoUso = Number(prompt("Digite tempo de uso (min):"))
 
  

 valorUso = (tempoUso)/15
 valorPagar = valorUso*valorTempo
 

 console.log(valorUso, valorPagar)
