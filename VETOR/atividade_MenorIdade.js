

        // agora com a menor idade
        let idade, menorIdade 

        const idades = []

        do{
           idade = prompt(`Digite uma idade. Digite SAIR para encerrar`)
           idades.push(idade)

        }while(idade != "SAIR")

        idades.pop()

        for(let i = 0; i > idades.length; i++){
            if(idades[i] < menorIdade){
                menorIdade = idades[i]
            }
         
        }
        
        document.write(`A menor idade é ${menorIdade}`)
   