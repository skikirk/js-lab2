function timer() {

    let timer = document.querySelector('#timer span').innerHTML;
    var end = false;

    if (timer > 0) {
        --timer;
    } else {
        end = true;
    }
    if (end) {
        clearInterval(timerID);
        alert("Таймер сработал!");
    } else {
        document.querySelector('#timer span').innerHTML = timer;
    }
}
window.timerID = setInterval(timer, 1000);