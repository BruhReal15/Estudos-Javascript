document.getElementById('verificar').addEventListener('click', function(e){
    var idade = document.getElementById('idade').value; 

    var tagResp;

    if(document.getElementById("resp") == null){
        tagResp = document.createElement("p"); // cria o elemento p
        document.body.insertBefore(tagResp, null)
        tagResp.id = "resp"
    }
    else{
        tagResp = document.getElementById("resp")
    }

    var resp = "";

    if(idade >= 21){
       resp = "Idade maior ou igual a 21 anos";
    }
    else{
        resp = "Idade menor que 21 anos";
    }

    tagResp.innerHTML = resp // adiciona o texto no elemento p criado anteriormente

})