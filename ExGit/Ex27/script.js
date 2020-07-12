window.addEventListener("load", function(e){
    let div = document.getElementById("resultado")
    let contador = 0

    while(contador < 5){
        div.innerHTML = div.innerHTML + "Repetição <br>"
        contador++
    }
})