document.getElementById("check-cpf").addEventListener("click", function(e){
    let cpfP = document.getElementById("cpf-pontuado").value
    let cpf = document.getElementById("cpf")
    
    cpfP = cpfP.slipt(".").join("")
    cpfP = cpfP.replace("-", "")
    cpf.value = cpfP
})