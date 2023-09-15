
        //  Zé Ciço - Exercicio - Carlos 12/09

     let gabarito = [], resposta = []
     let pontos = 0 , totalAprovado = 0
     let num, alunosSala, percAp
     //a , b , c ,d, e
     // a c,c,e,d

     for(let i = 0; i < 4; i++){
        gabarito [i] = prompt(`Digite o gabarito ${i+1}°`)
       
     }
          document.write(`${gabarito} <br>`)

     alunosSala = Number(prompt(`Digite quantidade de alunos em sala`))
      debugger
     for(let i = 0; i < alunosSala; i++){
            num = Number(prompt(`Digite o número do aluno `))
            pontos = 0

        for(let j = 0 ; j < 10; j++){
                  resposta[j] = prompt(`Digite a resposta da questão ${j+1}° do aluno.`)
            if(gabarito[j] === resposta[j]){
                  pontos++
            }
           
        }
        if(pontos => 6){
                  totalAprovado++
         }
            document.write(`A nota do aluno ${num} foi ${pontos.toFixed(2)} <br>`)
    }
   
         
    percAp = totalAprovado * 100 / alunosSala
    document.write(`O percentual de aprovados  ${percAp}%`)


