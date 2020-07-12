window.addEventListener("load", function(e){
    let div = document.getElementById("resultado")

    for(let i = 0; i < 10; i++)
        div.innerHTML = div.innerHTML + `${i+1} <br>`
})