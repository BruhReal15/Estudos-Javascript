window.addEventListener("load", function(e){
    let div = document.getElementById("resultado")

    for(let i = 0; i <= 20; i++){
        if(i % 2 == 0)
            div.innerHTML = div.innerHTML + `${i} <br>`
    }
})