document.getElementById("armazenar").addEventListener("click", function(e){
    var ul = document.getElementById("frase")
    let texto = document.getElementById("txt-frase").value 
    let li

    texto = texto.split(" ")

    for(let index of texto){
        li = document.createElement("li")
        li.innerHTML = index
        ul.insertBefore(li, null)
    }
})