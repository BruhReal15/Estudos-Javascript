function parImpar(n1){
    if((n1 % 2) == 0){
        return "Par"
    }
    else{
        return "Ímpar"
    }
}

document.getElementById("verificar").addEventListener("click", function(e){
    let num = document.getElementById("n1").value;
    let resp = document.getElementById("resp");

    if(resp == null){
        resp = document.createElement("p")
        document.body.insertBefore(resp, null)
        resp.id = "resp"
    }

    resp.innerHTML = parImpar(num)

})