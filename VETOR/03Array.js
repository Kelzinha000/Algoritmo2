
        /*  Atividade - Igor 05/09 
        Faça um programa que armazene diferentes idades em um array e mostre quaal a idade maior 
        1 - O sistema deve pedir pro usuário inserir a idade; 
        2 - Quando o usuário decidir sair do programa, deve mostrar qual a maior idade digitada 
        
        ( pode usar pop e push) */

        let idade, maiorIdade = 0

        const idades = []

      do{
        idade = prompt(`Digite uma idade. Digite SAIR para encerrar`) // não á para usar o NUMBER, por que SAIR é tipo string
        idades.push(idade)

      }while(idade != "SAIR")

      idades.pop()

      menorIdade = idades [0]
     
     for(let i = 0 ; i < idades.length; i++){  // length diz o tamanho do array 
          if(idades[i] > maiorIdade) {  // maior idade é 0. ex: se idade que (10) > maior idades (é 0), então é verdade, e idades passa a ser comparar com maior idade para 
          //  o proximo valor, se a prixmoa idades é 20 e é > que maiorIdade ( que agora possui valor 10). então é verdade, logo  Maior idade passa a ter o valor de 20.
             maiorIdade  = idades[i] // 
          }
          if(idades[i] < menorIdade){
               menorIdade = idades[i]
          }
     }

     document.write(`A maior idade é ${maiorIdade} <br>`)
     document.write(`A menor idade é ${menorIdade}`)

