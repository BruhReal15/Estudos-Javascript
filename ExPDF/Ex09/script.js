var listaProdutos = new Array

var precos = {
    "1001" : 5.32,
    "1324" : 6.45,
    "6548" : 2.37,
    "0987" : 5.32,
    "7623" : 6.45
}

function valor(){
    let soma = 0

    for(let i = 0; i < listaProdutos.length; i++){
        soma += precos[listaProdutos[i].cod] * listaProdutos[i].qtd;
    }
    
    document.getElementById("preco").value = soma;
}

function add(){
    var carrinho = {
        cod: "",
        qtd: 0,
    }

    let selectProd = document.getElementById("produto")
    let selectQtd = document.getElementById("qtd")

    let prod = selectProd.options[selectProd.selectedIndex].value
    let qtdSelecionada = selectQtd.options[selectQtd.selectedIndex].value

    carrinho.cod = prod
    carrinho.qtd = Number(qtdSelecionada)

    listaProdutos.push(carrinho)
    valor()  
}

document.getElementById("finalizar").addEventListener("click", () => add())
document.getElementById("add").addEventListener("click", () => add())

window.addEventListener("load", function(e){
    let selectQtd = document.getElementById("qtd")

    for(let i = 0; i <= 10; i++){
        let opt = document.createElement("option")
        opt.value = i
        opt.innerHTML = i
        selectQtd.append(opt)
    }
})