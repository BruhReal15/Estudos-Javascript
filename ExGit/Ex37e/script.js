window.addEventListener("load", function(e){
    var div = document.getElementById("resultado")
    let deuses = ['Aegir', 'Aud', 'Balder']

    
    deuses.push('Loki')
    deuses.push('Odin')
    deuses.push('Frey')

    for(let index of deuses){
        div.innerHTML = div.innerHTML + index + "<br>"
    }
})