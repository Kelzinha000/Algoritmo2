
   
        // desafio Exercicio 06 - Zé Ciço - Carlos 05/09

        // let vet = []

        // for(let i =0 ; i < 3; i++){
        //     vet [i] = Number(prompt(`Digite um número`))

        //     for(let i = 1; i > vet; i--){
                
        //         vet = i--
        //     }
        //         document.write(`${vet} <br>`)
              
        // }

        
        let vetor  = []
        let aux

        for(let i = 0 ; i < 10 ; i++){
         vetor[i] =  Number(prompt("Digite um valor para o índice"))
         
      }
      
      // console.log(vetor.sort((a,b) => b-a)) no valor crescente é a - b

      document.write(`Array antes da ordenação  ${vetor} <br>`)

      // i e j é o valor que estamos colocando pra pecorrer, esse valores sempre vão represenat os indices de seus valores

      for(let i = 0; i < 4; i++){
        // algoritmo sequencial 
            for(let j = 0; j < 4; j++){                  // aux = a ,        a = b           e         b = aux
               if(vetor[j] < vetor [j+1]){
                aux = vetor[j] 
                vetor[j] = vetor[j+1]
                vetor[j+1] = aux
             }
         }
    }
    document.write(`Array Depois da ordenação  ${vetor} <br>`)
    