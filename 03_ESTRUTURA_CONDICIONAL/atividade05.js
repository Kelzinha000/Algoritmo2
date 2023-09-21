
        // velocidade constante  velocidadeCondutor variavel 

        let  velocidadeCondutor, velocidadePermitida, multa

        //velocidadeEstrada = Number(prompt("Informe a velocidade permitada "))
        velocidadePermitida = Number(prompt("Informe a velocidade permitida de VIA "))
        velocidadeCondutor = Number(prompt("Informe a velocidade do condutor"))
        

        multa = velocidadePermitida * 1.2
    
       if(velocidadeCondutor<= velocidadePermitida){
          alert("Sem multa")
       } else if( velocidadeCondutor> velocidadePermitida && velocidadeCondutor <= multa){
          alert(`Multa leve`)

       }else if(velocidadeCondutor> multa){   
           alert(`Multa grave`)
       } 






       
       /* const velocidadeEstrada = 80
        if((velocidadeCondutor*1.20)<velocidadeEstrada){
            alert(`Sem multa`)
        }else if((velocidadeCondutor*1.20) == velocidadeEstrada){
            alert(`Multa leve`)
        }if((velocidadeCondutor*1.20)>velocidadeEstrada){
            alert(`Multa grave`)
        }
        
     */
