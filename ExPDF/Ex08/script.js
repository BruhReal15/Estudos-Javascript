function classificar(){
    let cod = Number(document.getElementById("codigo").value)
    let resp = document.getElementById("resp")

    if((cod < 1) || (cod > 15))
        resp.innerText = "Código inválido"
    else if (cod == 1)
        resp.innerText = "Alimento não perecível"
    else if((cod >= 2) && (cod <= 4))
        resp.innerText = "Alimento perecível"
    else if((cod == 5) || (cod == 6))
        resp.innerText = "Vestuário"
    else if(cod == 7)
        resp.innerText = "Higiene pessoal"
    else   
        resp.innerText = "Limpeza e utensílios domésticos"
}