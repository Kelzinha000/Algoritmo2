
        let num, divisores = 0 // variavel

       do{
          num = Number(prompt((`Digite um número`)))    // prompt abre a janela do navegador, prompt tipo texto, o Number identifica o valor do tipo numerico
          if(num === 0 || isNaN(num)){ // if sempre traz um resultado lógico, comparações e juntar comparaçõe para trazer resultados
             alert(`Digite um número válido`)

          }
        } while(num === 0 || isNaN(num))
        
        
        for(let i = 0; i<= num; i++){
            if(num%i ===0){                           // porcentagem = resto da divisão
                divisores++   // variavel contadora MOSTRA  a quatidade de vezes 
            }
        }
        
        if(divisores === 2){
            alert(`O número ${num} é primo`)
        }else{
            alert(`Não é primo`+num)
        }
   