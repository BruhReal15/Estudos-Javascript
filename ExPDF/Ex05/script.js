document.getElementById("trocar").addEventListener("click", function(e){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let aux;

    aux = n1;
    n1 = n2;
    n2 = aux;

    document.getElementById("n1").value = n1
    document.getElementById("n2").value = n2

})