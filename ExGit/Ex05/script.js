document.getElementById("calcular").addEventListener("click", function(e){
    let frase = document.getElementById("texto").value
    let resposta = document.getElementById("resp")

    resposta.innerText = `Sua frase tem ${frase.length} letras !!`
})