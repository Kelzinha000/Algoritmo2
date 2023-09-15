
        let numChin, ano

        do{
        numChin = Number(prompt("Digite o número de Chinchilas"))
        ano = Number(prompt("Digite o ano atual"))

       if(numChin < 2 || isNaN(numChin)){
        alert(`Digite um número válido ou maior ou igual a 2`)

      } if(ano === 0 || isNaN(ano)){
             alert("Digite um número válido")
       }
      

        } while(numChin < 2 || isNaN(numChin) && ano === 0 || isNaN(ano))

       
       
      for(let i = 0; i < numChin ; 1++){
          
      }
