document.getElementById("verificar").addEventListener("click", function(e){
    let num = document.getElementById("n1").value;
    let resp = document.getElementById("resp");
    let textoResp = "O número informado é "

    if(resp == null){
        resp = document.createElement("p")
        document.body.insertBefore(resp, null)
        resp.id = "resp"
    }

    ((num % 2) == 0) ? textoResp = textoResp.concat("par e ") : textoResp = textoResp.concat("ímpar e ");
    (num < 0) ? textoResp = textoResp.concat("negativo!") : textoResp = textoResp.concat("positivo!");

    resp.innerHTML = textoResp

})