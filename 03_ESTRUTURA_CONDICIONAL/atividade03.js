
        let valorSaque, nota10, nota50, nota100, resto1, resto2, resto3 

        ValorSaque = Number(prompt("Digite o valor do saque:"))

        if(valorSaque%10 != 0 ){
            alert("ERRO!!  Notas disponíveis  R$100, R$50, R$10")
            location.reload()
        } 


        nota100 = valorSaque / 100
        resto = valorSaque % 100

        nota50 = Math.floor(resto/50)
        resto = resto % 50 

        nota10 = Math.floor(resto/10) 
        resto = resto % 10 

        if(nota100 > 0){
           document.write(`Notas de R$100: ${nota100}`)
        } else if (nota50 > 0){
             document.write(`Notas de R$50: ${nota50}`)
        } else if (nota10 > 0){
            document.write(`Notas de R$10: ${nota10}`)

        }

        //alert(`notas 100 ${nota100} - resto ${resto}`)








       /* if (saque = 10){
            
            alert(`saldo retirado ${saque}`)

        }else if(saque > 50){
            alert(`saldo retirado ${saque}`)

        }else if(saque > 100){

            alert(`saldo retirado ${saque}`)

        }*/

