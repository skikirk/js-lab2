/*
Фамилию, Имя, Город и Страну Проживания, 
Дату Въезда, Дату Выезда, Цель Визита

Есть правила, по которым можно пропускать человека:
не должно быть ошибок в городе и стране. 
Город должен быть из нужной страны, все слова должны быть написаны 
без ошибок. может быть всего пять целей визита: 
дипломатия, работа, туризм, посещение родственников и шоппинг.
время пребывания (расстояние между датой въезда и датой выезда) 
для каждой цели свое
дипломатия: до 10 дней
работа: до 15 дней
туризм: до 3 дней
посещение родственников: до 5 дней
шоппинг: до 1 дня
дата въезда должна быть верной 

*/
class Person {
    /*
    correct

    surname
    name
    city
    country
    inDate
    outDate
    purpose
    */
    constructor(isCorrect) {
        this.correct = isCorrect;
        [this.surname, this.name] = getName();
    }
}

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