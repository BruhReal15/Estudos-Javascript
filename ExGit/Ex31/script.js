window.addEventListener("load", function(e){
    let div 

    for(let i = 1; i <= 10; i++){
        div = document.createElement("div")
        div.className = "resultado"
        document.body.insertBefore(div, null)    
        for(let j = 0; j <= 10; j++){
            div.innerHTML = `${div. innerHTML} ${i} x ${j} = ${i*j} <br>`
        }
    }
})