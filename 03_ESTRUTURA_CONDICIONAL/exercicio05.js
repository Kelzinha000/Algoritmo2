
        // velocidade constante  velocidadeCondutor variavel 

        let  velocidadeCondutor

        //velocidadeEstrada = Number(prompt("Informe a velocidade permitada "))
        velocidadeCondutor = Number(prompt("Informe a velocidade do condutor "))
       
        const velocidadeEstrada = 80
        if((velocidadeCondutor*1.20)<velocidadeEstrada){
            alert(`Sem multa`)
        }else if((velocidadeCondutor*1.20) == velocidadeEstrada){
            alert(`Multa leve`)
        }if((velocidadeCondutor*1.20)>velocidadeEstrada){
            alert(`Multa grave`)
        }
        



