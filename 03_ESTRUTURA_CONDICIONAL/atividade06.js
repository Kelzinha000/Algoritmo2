
        let lado1, lado2, lado3 

        lado1 = Number(prompt("Digite o primeiro lado"))
        lado2 = Number(prompt("Digite o segundo lado"))
        lado3 = Number(prompt("Digite o terceiro lado"))

        // validação
         if(lado1 === 0 || isNaN(lado1)){         
          alert(`Valor ${lado1} não é pssovível formar um triângulo`)
           location.reload()  

        } else if(lado2 === 0 || isNaN(lado2)){
           alert(`Valor ${lado2} não é pssovível formar um triângulo`)
           location.reload()

        }else if (lado3 === 0 || isNaN(lado3)){
           alert(`valor ${lado3} não é pssovível formar um triângulo`)
           location.reload()

        }
        
         // lógica
        if(lado1 === lado2 && lado3 != lado1 && lado3 != lado2){
          alert(`Triângulo Isóceles \n primeiro lado: ${lado1} \n  segundoo lado: ${lado2} \n terceiro lado: ${lado3}`)

        }else if(lado1 === lado3 && lado2===lado1){
          alert(`Triângulo do tipo Equilátero \n primeiro lado: ${lado1} \n segundoo lado: ${lado2}  \n terceiro lado: ${lado3}`)
 
        }else if(lado1 != lado2 && lado2 != lado3 && lado3 != lado1){
        alert(`Triângulo Escaleno \n primeiro lado: ${lado1} \n segundoo lado: ${lado2} \n terceiro lado: ${lado3}`)
        }


       /* 

       if (ladoA (ladoB + ladoC) && ladoB(ladoA + ladoc) && ladoC> (ladoA+ladoB)){
                  alert(`não possivel formsar um triangulo com esses valores`)
        }else{
          if(ladoA === ladoB && ladoB === ladoC){
             alert triangulo equilateroo
          } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoc)
          alert triangulo isoceles

        } else if 
         alert triangulo escaleno 
        
        (lado1 != lado2 && lado2 != lado3 && lado3 != lado1)
        
        */
  

  