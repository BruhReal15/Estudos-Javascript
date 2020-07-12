window.addEventListener("load", function(e){
    let div = document.getElementById("resultado")
    let contador = 0

    do{
        div.innerHTML = div.innerHTML + "Repetição <br>"
        contador++
    }while(contador < 5)
})