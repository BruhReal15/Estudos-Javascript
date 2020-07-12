window.addEventListener("load", function(e){
    var div = document.getElementById("resultado")
    let numbers = [5, 7, 1, 8, 9]

    div.innerHTML = "Vetor sem ordernar <br>" 

    for(let index of numbers){
        div.innerHTML = div.innerHTML + index + " "
    }
    
    numbers.sort(function(a,b){
        return (a - b)
    })

    div.innerHTML = div.innerHTML.concat("<br><br> Vetor ordenado <br>")

    for(let index of numbers){
        div.innerHTML = div.innerHTML + index + " "
    }
})