

function mostrar(item){
    let texto = ""
    return texto = texto.concat(`${item}`)
}


window.addEventListener("load", function(e){
    var div = document.getElementById("resultado")
    let deuses = ['Aegir', 'Aud', 'Balder']
    
    div.innerHTML = deuses.map(mostrar).toString().split(",").join(" ")
})