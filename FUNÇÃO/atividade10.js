/* crie um programa dê descontos progressivos em um produto com base no  número de seguidores que o usuário tem no instagram. A função 
deve receber 5 parametros. 
1- O usuário deve informar seu @, n° de seguidores, produto, valor do produto  e se irá postar
tabela de descontos: 
 A partir de 5000 seguidores = 5% 
 A partir de 20000 seguidores = 10% 
 A partir de 50000 seguidores = 15% 
 A partir de 100000 seguidores = 25% 
 
 se o usuário postar um story, receberá 5% de desonto adicional e 10% se for um reel. A regra só se aplica a quem possui mais de 20000 seguidores
 
 atividade igor 14/09*/ 

let usuario , seguidores, produto, valor_produto, postagem, valorFinal, descontao

usuario = prompt(`Digite seu nome de usário :`)
seguidores = Number(prompt(`Digite o seu números de seguidores:`))
produto = prompt(`Informe o produto que irá vender:` )
valor_produto = Number(prompt(`Digite o valor do produto:`))
postagem = prompt(`Irá postar story ou reels? Digite 
\nstory  \nreels `)


function descontos(seguidores){
if(seguidores>=5000 ){
    valorFinal = valor_produto * 0.05
    return 
   
}else if(seguidores>=20000){
    valorFinal =  valor_produto * 0.10
    return 

}if(seguidores>=50000 ){
    valorFinal = valor_produto * 0.15
    return 
}if(seguidores>=100000 ){
    valorFinal = valor_produto * 0.25
    return 
}
} 

function  postar(){
if( postagem === 'story'){
 descontao =  valorFinal * 0.05
  return

    }else if(postagem === 'reels'){
       descontao = valorFinal * 0.10 
       return
    }

}

document.write(`${usuario} <br>`) 
document.write(`${seguidores} <br>`) 
document.write(`${produto} <br>`) 
document.write(`${valor_produto} <br>`) 
document.write(`${postagem} <br>`) 
document.write(`${descontao} <br>`) 