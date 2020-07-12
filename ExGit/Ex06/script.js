var acessa = false

document.getElementById("lampada").addEventListener("click", function(e){
    let lamp = document.getElementById("lampada")

    if(acessa){
      lamp.src = "lampada_apagada.jpg"
      lamp.alt = "lampada apagada"
      acessa = false
    }
    else{
        lamp.src = "lampada_on.jpg"
        lamp.alt = "lampada acessa"
        acessa = true
    } 
})