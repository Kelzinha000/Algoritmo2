
        // Atividade Zé Ciço 31/08- imprimir os números na ordem descrecente - Carlos

        let num, numeros = []
        
        num = Number(prompt(`Digite quantos números você quer cadastrae no Array`))

        for(let i = 0; i < num; i++ ){
            numeros [i] = Number(prompt(`digite um valor para o indice ${i}° do vetor`))
        }
        document.write(numeros)
        document.write(`<br>--------------------<br>`)

        for(let i = num -1; i >=0; i--){ // -1 para tirar o undefined
            document.write(numeros[i])
        }
  