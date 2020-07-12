document.getElementById("check-nome").addEventListener("click", function(){  
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value
    alert(`Olá ${nome} ${sobrenome}!`);
})