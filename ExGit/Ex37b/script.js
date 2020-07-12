window.addEventListener("load", function(e){
    var div = document.getElementById("resultado")
    let deuses = ['Aegir', 'Aud', 'Balder']
    
    for(let index of deuses){
        div.innerHTML = div.innerHTML + index + "<br>"
    }
})