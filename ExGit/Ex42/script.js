function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var imgs = {
    1 : "chara-1.png",
    2 : "chara-2.png",
    3 : "chara-3.png"
}

async function mover(){
    let contador = 0
    let nImg = 1
    let img = document.getElementById("img")

    while(true){
        await sleep(200)
        img.style.left = `${contador}px`
        img.src = imgs[nImg]

        nImg++

        if(nImg > 3)
            nImg = 1

        contador += 4

        if(contador > 274)
            contador = 0
    }
}

window.addEventListener("load",() => mover())