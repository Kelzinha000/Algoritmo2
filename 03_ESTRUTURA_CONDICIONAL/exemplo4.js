
        let taxa, bairro, medicamento
        
        bairro = prompt("Digite o bairro para saber o valor frete \n  Antares \n Barro Duro \n Bebedouro \n Benedito Bentes \n Centro \n Clima Bom \n Pajuçara \n Ponta verde \n Jatiúca ")
         
       bairro = bairro.toUpperCase()
        if(bairro === ''){
            alert("Digite um bairro válido")
        }else{

        switch(bairro){
          case "Antares": 
              alert(`Valor do frente R$7,00`)
          break; 
          

          case "Barro Duro":  
            alert("Valor do frete R$5,00")
          break;

           
         case "Bebedouro":
            alert("O valor do frete R$8,00")
         break; 

           
         case "Benedito Bentes": 
           alert("O valor do Frete R$6,00")
         break; 
         
         case "Centro": 
           alert("O valor do Frete  R$10,00")
         break;


         case "Clima Bom": 
           alert("O valor do Frete R$4,00")
         break;


         case "Pajuçara": 
              alert("Valor do frete R$15,00")
            break; 


           case "Ponta verde":
            alert("Valor do frete R$15,00")
            break;

           case "Jatiúca ":
             alert("Valor do frete R$15,00 ")
          break; 
          default:
          break;
        }
    }
