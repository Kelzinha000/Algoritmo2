

        let horaBrasil, horaFranca

       horaBrasil = Number(prompt("Informe o horário no Brasil no formato HH.MM"))
       
       //validação
       if(isNaN(horaBrasil)|| horaBrasil < 0){
        alert("Digite um horário válido")
        location.reload()
       }


       // lógica
         horaFranca = horaBrasil  + 5
         if(horaFranca>24){
          horaFranca = horaFranca - 24

         }
   

         alert(`horaBrasil ${horaBrasil} -  hora França  ${horaFranca}`)
         
   