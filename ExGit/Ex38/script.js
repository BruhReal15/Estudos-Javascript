window.addEventListener("load", function(e){
    var ul = document.getElementById("nomes")
    let deuses = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr']
    let li

    for(let index of deuses){
        li = document.createElement("li")
        li.innerHTML = index
        ul.insertBefore(li, null)
    }
})