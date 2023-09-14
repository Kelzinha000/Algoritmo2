
  idade = Number(prompt(`Digite sua idade`)) 
    
  function verificadorMaiorIdade (idade){
    if(idade>=18){
       document.write(`Maior de idade`)
    }else /*if (idade < 18)*/{
        document.write(`Menor idade`)
    }
    return idade /// vai retorno sem ser especificamente  a idade expressa na tela
  }

  document.write(verificadorMaiorIdade(idade ))
  
    