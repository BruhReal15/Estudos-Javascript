document.getElementById("calcular").addEventListener("click", function(e){
    let select = document.getElementById("genero")
    let genero = select.options[select.selectedIndex].value
    let altura = document.getElementById("altura").value
    let peso
    let resp = document.getElementById("resp")

    if(genero == "f"){
        peso = ((62.1 * altura) - 44.7)
    }
    else{
        peso = ((72.7 * altura) - 58)
    }

    if(resp == null){
        resp = document.createElement("p")
        resp.id = "resp"
        document.body.insertBefore(resp, null)
    }

    resp.innerHTML = "Seu peso ideal é : " + peso.toFixed(3) + " kg"

})