document.getElementById("verificar").addEventListener("click", function(e){
    let a = Number(document.getElementById("ladoA").value)
    let b = Number(document.getElementById("ladoB").value)
    let c = Number(document.getElementById("ladoC").value)  
    
    let imagem = document.getElementById("img-triangulo")
    let resp = document.getElementById("resp")

    if(imagem == null){
        imagem = document.createElement("img")
        imagem.id = "img-triangulo"
        document.body.insertBefore(imagem, null)
        imagem.className = "img-triangulo"
    }

    if(resp == null){
        resp = document.createElement("p")
        resp.id = "resp"
        document.body.insertBefore(resp, imagem)
    }

    if((a < (b+c)) && (b < (a+c)) && (c < (a+b))){
        if((a == b) && ( a == c)){
            resp.innerText = "Os valores informados formam um triangulo equilatero"
            imagem.src = "equilatero.png"
        }
        else if((a == b) || ( a == c) || (b == c)){
            resp.innerText = "Os valores informados formam um triangulo isoceles"
            imagem.src = "isoceles.gif"
        }
        else{
            resp.innerText = "Os valores informados formam um triangulo escaleno"
            imagem.src = "escaleno.png"
        }
    }
    else{
        resp.innerText = "Os valores informados não formam um triangulo"
        imagem.src = "invalido.png"
    }


})