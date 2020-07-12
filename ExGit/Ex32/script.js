function procurar(frase){
    if(frase.indexOf("dota") == -1){
        return "não há"
    }
    else
        return "contém"
}

document.getElementById("pesquisar").addEventListener("click", function(e){
    let frase = document.getElementById("texto").value
    let resposta = document.getElementById("resp")

    resposta.innerText = `Em sua frase ${procurar(frase)} a palavra 'dota' !!`
})