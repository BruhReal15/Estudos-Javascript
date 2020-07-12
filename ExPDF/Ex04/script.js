window.addEventListener("load", function(e){
    document.getElementById("temp-f").focus();
})

document.getElementById("temp-f").addEventListener("blur", function(e){
    let tF = Number(document.getElementById("temp-f").value)
    let tC = (5*(tF-32)/9)

    document.getElementById("temp-c").value = tC
})