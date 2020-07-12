function maior(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)
    let maior = document.getElementById("resp")

    if(maior == null){
        maior = document.createElement("p")
        maior.id = "resp"
        document.body.insertBefore(maior, null)
    }

    if((n1 >= n2) && (n1 >= n3)){
        maior.innerHTML = "O maior número é: " + n1
    }
    else if(n2 >= n3){
        maior.innerHTML = "O maior número é: " + n2
    }
    else{
        maior.innerHTML = "O maior número é: " + n3
    }
}

document.getElementById("verificar").addEventListener("click", () => maior())