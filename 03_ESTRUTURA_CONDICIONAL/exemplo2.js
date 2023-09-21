
        let nota1, nota2, nota3, nota4, media  // definir variaveis

        nota1 = Number(prompt("Digite a primeira nota "))
        nota2 = Number(prompt("Digite a segunda nota "))
        nota3 = Number(prompt("Digite a terceira nota "))
        nota4 = Number(prompt("Digite a quarta nota "))

        if(isNaN(nota1) || nota1 > 10 || nota1 < 0){
             alert(`Nota ${nota1} não é válida`)
             location.reload()

        }else if(isNaN(nota2) || nota2 > 10 || nota2 < 0){
            alert(`Nota ${nota2} não é válida`)
             location.reload()

        }else if(isNaN(nota3) || nota3 > 10 || nota3 < 0){
            alert(`Nota ${nota3} não é válida`)
             location.reload()

        }else if(isNaN(nota4) || nota4 > 10 || nota4 < 0){
            alert(`Nota ${nota4} não é válida`)
            location.reload()
      }


        // lógica 
        media = (nota1 + nota2 + nota3 + nota4) / 4 

        if(media>=7 && media <=10){
            alert(`Aprovado, sua média é ${media.toFixed(2)}`)

        } else if(media < 7 && media >= 0){
            alert(`Reprovado, sua média é ${media.toFixed(2)}`)
            location.reload()
        }


