function idade(data){
    let atual = new Date
    let idade = atual.getFullYear() - data.getFullYear() 

    if(idade >= 18)
        return "Maior de idade"
    else
        return "Menor de idade"
}

document.getElementById("calcular").addEventListener("click", function(){  
    let dataNasc = document.getElementById("dataNasc").value
    let resp  = document.getElementById("resp")

    resp.innerHTML = idade(new Date(dataNasc))
})