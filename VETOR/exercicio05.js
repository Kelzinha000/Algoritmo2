
        // Exercicio 5 - Zé Ciço - Carlos  05/09

        let vet = [], pos = [], neg = []
        let count_p =0 ; count_n = 0


        for(let i = 0; i< 4 ; i ++){
            vet[i] = Number(prompt(`Digite um valor para o indice`+i+`° do  vetor `))

            if(vet[i]>=0){
                pos[count_p] = vet[i]
                count_p++
            }else{
                neg[count_n] = vet[i]
                count_n++

            }
        }
         
        if(pos.length < 0){
            alert(`vetor de positivo vazio`)
        }else{
            for(let i = 0; i < pos.length; i++){
                document.write(`${pos[i]}`)
            }
        }

        if(neg.length < 0){
            alert(`Vetor de Negativo vazio`)
        }else{
            document.write(`${neg}`)
        }
   