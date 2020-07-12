function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function contador(){
    let contador = 5
    let circ = document.getElementById("circulo")

    while(true){
        circ.innerHTML = contador
        await sleep(1000)
        contador--

        if(contador < 1)
            contador = 5
    }
}

window.addEventListener("load",() => contador())