var lamp = document.getElementById("lampada")

document.getElementById("lampada").addEventListener("mouseover", function(e){
        lamp.src = "lampada_on.jpg"
        lamp.alt = "lampada acessa"
})

document.getElementById("lampada").addEventListener("mouseout", function(e){
  lamp.src = "lampada_apagada.jpg"
  lamp.alt = "lampada apagada"

})
