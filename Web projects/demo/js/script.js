//confirmed linked
//alert(hi)

function tellFortune() {
    var fortune = pickRandomFortune()
    showFortune(fortune)
}

function showFortune(aFortune) {
    document.getElementById("fortune").innerHTML = aFortune
}

function pickRandomFortune() {
    var fortunes = getFortunes()
    var index = Math.floor(Math.random()*fortunes.length)
    return fortunes[index]
}

function getFortunes() {
    return ["Yes","No","Maybe", "Try again", "Nope", "Negative","Why not", "A wise choice", "Perhaps", "Possible",]
}   

