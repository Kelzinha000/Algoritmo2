

    let altura, sexo, pesoIdeal

    altura = Number(prompt("Digite sua altura em metros"))
    sexo = prompt("Digite seu  sexo biológico \n M - Masculino \n F - Feminino")
    
    //toUpperCase() caix Alta
    //toLowerCase() caixa baixa

    sexo = sexo.toUpperCase()
     
    if(isNaN(altura) || altura === 0 || altura >= 2.51){
      alert(`Digite uma altura válida ${altura}`)
      location.reload()

    } else if(sexo !="M" && sexo !="F"){
       alert(`Digite um valor válido`)
       location.reload()
    }
     if(sexo === "F"){
      pesoIdeal = 21 * Math.pow(altura, 2)
      alert(`O peso ideal ${pesoIdeal.toFixed(2)}`)

     } else if(sexo === "M"){
      pesoIdeal = 22 * Math.pow(altura,2)
      alert(`O peso ideal ${pesoIdeal.toFixed(2)}`)
     }

