document.getElementById("check-cpf").addEventListener("click", function(e){
    let ponto = 0
    let cpf = document.getElementById("cpf").value
    let cpfP = document.getElementById("cpf-pontuado")
    let novoCpf = ""
    
    /*
        A rotina abaixo irá separar a string em blocos
        e então irá colocar a pontuação necessária.
    */
    while(cpf.length > 0){
        novoCpf = novoCpf.concat(cpf.substr(0,3))
        cpf = cpf.replace(cpf.substr(0,3), "")
        
        if(ponto == 2){
            novoCpf = novoCpf.concat("-")
            novoCpf = novoCpf.concat(cpf.substr(0))
            cpf = cpf.replace(cpf.substr(0), "")
        }
        else{
            novoCpf = novoCpf.concat(".")
            ponto++
        }
    }

    cpfP.value = novoCpf

})