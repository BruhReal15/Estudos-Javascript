var div = document.getElementById("resultado")

function repetir(elemento, index, array){
    div.innerHTML = div.innerHTML + elemento + "<br>"
}

window.addEventListener("load", function(e){
    let array = ["repetição","repetição","repetição","repetição","repetição"]

  /*
    Pode ser feito usando esse for .. of 
    for(let index of array){
        div.innerHTML = div.innerHTML + index + "<br>"
    }

    */

    array.forEach(repetir)
})