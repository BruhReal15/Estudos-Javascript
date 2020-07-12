function somar(n1, n2){
    if(((n1 == "") || (n2 == "")) || ((isNaN(n1)) || (isNaN(n2)))){
        return 0
    }
    else{
        return Number(n1) + Number(n2)
    }
}

document.getElementById("calcular").addEventListener("click", function(){  
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let resp = document.getElementsByTagName("p")[0]

       resp.innerText = somar(n1, n2)
})