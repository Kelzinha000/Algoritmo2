
        let numero, raiz

        numero = Number(prompt("Digite um número para ser lido em Raiz quadrada"))

        if(isNaN(numero)|| numero === 0){
        alert("Digite um número válido")
        location.reload()
       }


        raiz = Math.sqrt(numero)
        alert(raiz)
       
        if(raiz === Math.floor(raiz)){ 
           alert(`A raiz do número digitado %{numero} = ${raiz}`)
        }else {
             alert(`Não tem raiz exata para ${numero}`)
        }
      


          
