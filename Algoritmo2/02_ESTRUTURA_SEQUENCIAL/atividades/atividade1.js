let tempoFilme, nome, horas, minutos

    nome = prompt("Digite o nome do filme: ")
    tempoFilme = prompt("Digite o tempo do filme em minutos: ")

    horas = tempoFilme/60 
    minutos = tempoFilme % 60 
    

    document.write(`a duração do filme ${nome} é ${Math.floor(horas)} e ${minutos} minutos`)