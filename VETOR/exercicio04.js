
        // atividade Zé Ciço - Calos 05/09
         
     // VETOR 01 -> 1, 3,5
     // veor 02 -> 4, 9, 15
     // veot 03 -> 1, 4, 3, 9, 5, 15
    
    
     let vet1 =[] , vet2 = [], vet3 = []
     let j = 0 // para auxiliar, 


 // adicionar os elementos no vetores 
     for(let i = 0; i<3; i++){
        
          vet1[i] = Number(prompt(`Digite o valor para o indice`+i+`° do vetor 1`))        // vetor 1 vai receber i 
          vet3[j]= vet1[i]
          j++ // 


          vet2 [i] = Number(prompt(`Digite o valor para o indice ${i}`)) 
          vet3[j] = vet2[i]  
          j++ 
     }
     document.write(`Vetor 01 ${vet1} <br>`)
     document.write(`Vetor 03 ${vet2} <br>`)
    
     // mostrar o veto resultante 
      for(let i = 0; i < vet3.length; i++){
        document.write(`Vetor 03 ${vet3} <br>`)

        

     }
     
        // valores -> indece
   