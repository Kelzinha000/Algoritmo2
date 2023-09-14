 // ativiade 1 função, 12/09  Igor 

 function calcularMedia(a, b , c){ // numero1 , numero2 , numero3 
    let soma = a + b + c 
    let media = soma/3 
    return media;
}

let resultado =  calcularMedia (10,10,10);

document.write(`A média é ${resultado}`)
