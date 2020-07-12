function desconto(bruto){
    let desconto = bruto * 0.05

    let total = bruto - desconto
    
    return `${desconto} - ${total}`
}

document.getElementById("calcular").addEventListener("click", function(){  
    let bruto = document.getElementById("bruto").value
    let desc = document.getElementById("desconto")
    let total = document.getElementById("total")
    
    let retorno = desconto(bruto).split("-")

    desc.value = `R$ ${retorno[0]}`
    total.value = `R$ ${retorno[1]}`


})