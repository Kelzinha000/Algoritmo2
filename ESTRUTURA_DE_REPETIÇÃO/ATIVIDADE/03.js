
        let somaDivisores = 0;
        const numero =parseInt(prompt("Digite um número inteiro"))


        for(let i = 1; i <numero; i++){
            if(numero % i === 0 ){
                somaDivisores += i;
            }
        }

        if(somaDivisores === numero){
            alert(`${numero} é um número perfeito.`)
        }else{
            alert(`${numero} não é um número perfeito`)
        }



    