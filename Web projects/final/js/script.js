//alert('Hi)

function Hello() {
    var p = prompt('How much paper is normal?');
    if (p != null) {
        document.getElementById('Hi').innerHTML = p + ' is not enough'
    }
}

function No() {
    var p = prompt("What year did the USA invented it's own type of Paper?");
    if (p != null) {
        document.getElementById('Yes').innerHTML = p + ' is incorrect'
    }
}