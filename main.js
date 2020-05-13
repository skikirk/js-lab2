"use strict";

let countries = ['Россия', 'Норвегия', 'Великобритания', 'Швеция', 'Украина', 'Китай', 'Япония', 'США', 'Канада', 'Испания', 'Германия', 'Польша', 'Италия', 'Франция'];
let cities = ['Москва', 'Осло', 'Лондон', 'Стокгольм', 'Киев', 'Пекин', 'Токио', 'Вашингтон', 'Оттава', 'Мадрид', 'Берлин', 'Варшава', 'Рим', 'Париж']
let menNames = [
    ['Иван', 'Олег', 'Константин', 'Борис', 'Филипп', 'Дмитрий'], //Россия
    ['Олав', 'Асманд', 'Гэндэлф', 'Риг', 'Стеин', 'Мортен'], //Норвегия
    ['Отис', 'Митчелл', 'Аллан', 'Барт', 'Чак', 'Руди'], //Великобритания
    ['Петтер', 'Боссе', 'Роджер', 'Нельс', 'Стуре', 'Фрей'], //Швеция
    ['Леонид', 'Александр', 'Вадим', 'Владимир', 'Евгений', 'Денис'], //Украина
    ['Чан', 'Тао', 'Ксинг', 'Пинг', 'Ченг', 'Лианг'], //Китай
    ['Юичи', 'Тсунео', 'Тсутому', 'Ясуо', 'Хизока', 'Хироши'], //Япония
    ['Джейсон', 'Чарли', 'Редклиф', 'Джеймс', 'Питер', 'Пол'], //США
    ['Самюэль', 'Чарльз', 'Бенджамин', 'Томас', 'Эван', 'Саймон'], //Канада
    ['Джуан', 'Адан', 'Доротео', 'Джулиан', 'Лусио', 'Адриан'], //Испания
    ['Арнольд', 'Альберт', 'Карл', 'Ричард', 'Эрик', 'Якоб'], //Германия
    ['Миколай', 'Милослав', 'Кшиштоф', 'Оскар', 'Станислав', 'Ян'], //Польша
    ['Андреа', 'Антонио', 'Бруно', 'Джованни', 'Джузеппе', 'Марио'], //Италия
    ['Бернар', 'Жерар', 'Кристиан', 'Луи', 'Пьер', 'Нолан'] //Франция
];
let womenNames = [
    ['Мария', 'Виктория', 'Екатерина', 'Дарья', 'Евгения', 'Ольга'], //Россия
    ['Кирстен', 'Тира', 'Ребекка', 'Нанна', 'Грай', 'Кэйа'], //Норвегия
    ['Амбер', 'Дорин', 'Мидж', 'Карил', 'Абель', 'Генраетта'], //Великобритания
    ['Фрея', 'Хельги', 'Шарлотта', 'Рагнильда', 'Криста', 'Марта'], //Швеция
    ['Олеся', 'Марина', 'Оксана', 'Тамара', 'Юлия', 'Снежана'], //Украина
    ['Кианг', 'Ниу', 'Ши', 'Руолан', 'Джу', 'Хуан'], //Китай
    ['Юки', 'Кими', 'Мидори', 'Хэруки', 'Нобуко', 'Мичи'], //Япония
    ['Клер', 'Шаррон', 'Рэйчел', 'Тифани', 'Дженнифер', 'Дженнис'], //США
    ['Эмма', 'Оливия', 'Хлоя', 'Беатрис', 'Сара', 'Меган'], //Канада
    ['Карла', 'Джуана', 'Тереса', 'Синобия', 'Бенита', 'Эсмеральда'], //Испания
    ['Эмилия', 'Ханна', 'Грета', 'Герда', 'Луиза', 'Фрида'], //Германия
    ['Милена', 'Майя', 'Амелия', 'Анастазия', 'Вероника', 'Каролина'], //Польша
    ['Джульетта', 'Тереза', 'Элиза', 'Лючия', 'Аврора', 'Барбара'], //Италия
    ['Аделин', 'Жюли', 'Изабель', 'Мишель', 'Натали', 'Эва'] //Франция
];
let surnames = [
    ['Иванов', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев', 'Петров'], //Россия
    ['Андерсен', 'Петерсен', 'Нильсен', 'Олсен', 'Миккельсен', 'Хаммер'], //Норвегия
    ['Адамсон', 'Олдридж', 'Остин', 'Блэк', 'Эриксон', 'Фишер'], //Великобритания
    ['Ларссон', 'Линдберг', 'Линдквсит', 'Лундберг', 'Лунд', 'Берг'], //Швеция
    ['Шевченко', 'Петренко', 'Щербак', 'Бондарчук', 'Бутко', 'Кравченко'], //Украина
    ['Ли', 'Чэнь', 'Ян', 'Чжоу', 'Линь', 'Сун'], //Китай
    ['Сато', 'Судзуки', 'Накамура', 'Ямасита', 'Исикава', 'Такэути'], //Япония
    ['Смит', 'Джонсон', 'Уильямс', 'Уокер', 'Адамс', 'Росс'], //США
    ['Рой', 'Тайлер', 'Кларк', 'Робинсон', 'Уилсон', 'Миллер'], //Канада
    ['Лопес', 'Родригес', 'Санчес', 'Гарсия', 'Гомес', 'Мартин'], //Испания
    ['Мюллер', 'Хоффман', 'Шмидт', 'Вольф', 'Шварц', 'Херман'], //Германия
    ['Новак', 'Ковальски', 'Мазур', 'Кравчик', 'Ожешко', 'Вуйчик'], //Польша
    ['Базиле', 'Бенедетти', 'Джордано', 'Кастильоне', 'Ландино', 'Лоренцо'], //Италия
    ['Габен', 'Дюбуа', 'Жаккар', 'Ламбер', 'Мерлен', 'Паскаль'] //Франция
];

let rightPurposes = ['дипломатия', 'работа', 'туризм', 'посещение родственников', 'шоппинг'];

let mapPurposes = new Map([
    ['дипломатия', 10],
    ['работа', 15],
    ['туризм', 3],
    ['посещение родственников', 5],
    ['шоппинг', 1]
]);

let wrongPurposes = ['учёба', 'политическое убежище', 'спорт', 'культура', 'посещение друзей', 'лечение'];

let russsianLetters = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

let chosenDate = new Date();

function generateName(num) {
    let s = '';
    let isMan = Boolean(randomInt(2));
    s += isMan ? menNames[num][randomInt(menNames[num].length)] : womenNames[num][randomInt(womenNames[num].length)];
    s += ' ' + surnames[num][randomInt(surnames[num].length)];
    if (num == 0 && !isMan)
        s += 'а';
    return s;
}

//возвращает случайное целое число в диапазоне [min,max-1]
function randomInt(max, min = 0) {
    return Math.floor(min + Math.random() * (max - min));
}

//меняет случайную букву в слове
function changeWord(wrd) {
    let c = russsianLetters[Math.floor(Math.random() * (russsianLetters.length))];
    let i = randomInt(wrd.length);
    while (wrd[i] == c) {
        c = russsianLetters[Math.floor(Math.random() * (russsianLetters.length))];
        i = randomInt(wrd.length);
    }
    if (i == 0) {
        c = c.toUpperCase();
    }
    return (wrd.split('').map((a, index) => index == i ? c : a).join(''));
}

function generateCouple(isCorrect, num) {
    let country = countries[num];
    let city = cities[num];
    if (!isCorrect) {
        if (randomInt(2)) { //true => меняем город, false => страну
            if (randomInt(2)) { //берем неправильный город
                let newNum = randomInt(cities.length);
                while (newNum == num) {
                    newNum = randomInt(cities.length);
                }
                city = cities[newNum];
            } else { //"ошибаемся" в городе
                city = changeWord(city);
            }
        } else { //"ошибаемся" в стране
            country = changeWord(country);
        }
    }
    return [country, city];
}

function generatePurpose(isCorrect) {
    if (isCorrect) {
        let num = randomInt(rightPurposes.length)
        return [rightPurposes[num], mapPurposes.get(rightPurposes[num])]
    } else {
        if (randomInt(2)) { //берем неправильное количество дней
            let num = randomInt(rightPurposes.length);
            return [rightPurposes[num], randomInt(25, mapPurposes.get(rightPurposes[num]) + 1)];
        } else { //берем неправильную цель
            let num = randomInt(wrongPurposes.length);
            return [wrongPurposes[num], randomInt(25)];
        }
    }
}

function generateInDate(chosenDate) {
    let radius = randomInt(6, 1);
    let tempDate = new Date(chosenDate);
    let day = tempDate.getDate();
    if (randomInt(2)) {
        tempDate.setDate(day - radius);
    } else {
        tempDate.setDate(day + radius);
    }
    return tempDate;
}

function generateOutDate(inDate, between, isCorrect, purpose) {
    let tempDate = new Date(inDate);
    let day = tempDate.getDate();
    if (isCorrect) {
        tempDate.setDate(day + randomInt(between + 1, 1))
    } else {
        tempDate.setDate(day + between)
    }
    return tempDate;
}


//добавляет ноль спереди если в числе меньше 2 цифр
function numToStr(num) {
    if (num < 10) {
        return '0' + String(num);
    }
    return String(num);
}

function dateToString(date) {
    return (numToStr(date.getDate()) + '.' + numToStr(date.getMonth() + 1) + '.' + date.getFullYear())
}

class Person {
    /*
    correct

    surname + name = name
    city
    country
    inDate
    outDate
    purpose
    */
    constructor(isCorrect = true) {
        this.correct = isCorrect;
        let broken = isCorrect ? -1 : randomInt(3);
        let c = Math.floor(Math.random() * (countries.length));
        this._name = generateName(c);
        [this._country, this._city] = generateCouple(!(broken == 0), c);
        let betweenTime;
        [this._purpose, betweenTime] = generatePurpose(!(broken == 1));
        this._inDate = !(broken == 2) ? new Date(chosenDate) : generateInDate(chosenDate);
        this._outDate = generateOutDate(this._inDate, betweenTime, !(broken == 1), this._purpose);
    }

    getName = () => '<i>' + this._name + '</i>';
    getCountry = () => 'Страна: ' + '<i>' + this._country + '</i>';
    getCity = () => 'Город: ' + '<i>' + this._city + '</i>';
    getPurpose = () => 'Цель визита: ' + '<i>' + this._purpose + '</i>';
    getDate = () => 'Даты визита: ' + '<i>' + dateToString(this._inDate) + ' – ' + dateToString(this._outDate) + '</i>';
}

const red = '#CC0033',
    green = '#669900';
const maxTime = 10,
    maxCounter = 30,
    maxWarnings = 3;
let timerID;
let time = maxTime;
let counter = 0;
let warnings = 0;
let main = document.getElementById('mainBlock');
let curDIV;
let p;
let enable = false; //доделать

document.querySelector('#date span').innerHTML = dateToString(chosenDate);

class Buttons {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }

    yes() {
        if (p) {
            clearTimeout(timerID);
            if (p.correct) {
                document.querySelector('#counter span').innerHTML = ++counter;
                curDIV.style.background = green;
                if (counter < maxCounter) {
                    time = maxTime;
                    timer();
                } else {
                    alert('Вы выиграли');
                    if (confirm('Сыграть ещё раз?')) {
                        let elements = document.querySelectorAll('#mainBlock div');
                        for (let elem of elements) {
                            elem.remove();
                        }
                        warnings = 0;
                        counter = 0;
                        document.querySelector('#warnings span').innerHTML = warnings;
                        document.querySelector('#counter span').innerHTML = counter;
                        time = maxTime;
                        timer();
                    }
                }
            } else {
                document.querySelector('#warnings span').innerHTML = ++warnings;
                curDIV.style.background = red;
                if (warnings < maxWarnings) {
                    time = maxTime;
                    timer();
                } else {
                    alert('Вы проиграли');
                    if (confirm('Сыграть ещё раз?')) {
                        let elements = document.querySelectorAll('#mainBlock div');
                        for (let elem of elements) {
                            elem.remove();
                        }
                        warnings = 0;
                        counter = 0;
                        document.querySelector('#warnings span').innerHTML = warnings;
                        document.querySelector('#counter span').innerHTML = counter;
                        time = maxTime;
                        timer();
                    }
                }
            }
        }
    }

    no() {
        if (p) {
            clearTimeout(timerID);
            if (!p.correct) {
                document.querySelector('#counter span').innerHTML = ++counter;
                curDIV.remove();
                if (counter < maxCounter) {
                    time = maxTime;
                    timer();
                } else {
                    alert('Вы выиграли');
                    if (confirm('Сыграть ещё раз?')) {
                        let elements = document.querySelectorAll('#mainBlock div');
                        for (let elem of elements) {
                            elem.remove();
                        }
                        warnings = 0;
                        counter = 0;
                        document.querySelector('#warnings span').innerHTML = warnings;
                        document.querySelector('#counter span').innerHTML = counter;
                        time = maxTime;
                        timer();
                    }
                }
            } else {
                document.querySelector('#warnings span').innerHTML = ++warnings;
                curDIV.style.background = red;
                if (warnings < maxWarnings) {
                    time = maxTime;
                    timer();
                } else {
                    alert('Вы проиграли');
                    if (confirm('Сыграть ещё раз?')) {
                        let elements = document.querySelectorAll('#mainBlock div');
                        for (let elem of elements) {
                            elem.remove();
                        }
                        warnings = 0;
                        counter = 0;
                        document.querySelector('#warnings span').innerHTML = warnings;
                        document.querySelector('#counter span').innerHTML = counter;
                        time = maxTime;
                        timer();
                    }
                }
            }
        }
    }

    onClick(event) {
        let button = event.target.dataset.answer;
        if (button) {
            this[button]();
        }
    }
}

new Buttons(document.getElementById('buttons'));

function timer() {
    if (time == maxTime) {
        p = new Person(Boolean(randomInt(2)));
        let div = document.createElement('div');
        div.innerHTML = p.getName() + '<br>' +
            p.getCity() + '<br>' +
            p.getCountry() + '<br>' +
            p.getPurpose() + '<br>' +
            p.getDate();
        main.append(div);
        main.scrollTop = main.scrollHeight;
        curDIV = div;
    }
    if (time >= 0) {
        document.querySelector('#timer span').innerHTML = time;
    }
    if (time-- < 0) {
        clearTimeout(timerID);
        document.querySelector('#warnings span').innerHTML = ++warnings;
        curDIV.style.background = red;
        if (warnings < maxWarnings) {
            time = maxTime;
            timer();
        } else {
            alert('Вы проиграли');
            if (confirm('Сыграть ещё раз?')) {
                let elements = document.querySelectorAll('#mainBlock div');
                for (let elem of elements) {
                    elem.remove();
                }
                warnings = 0;
                counter = 0;
                document.querySelector('#warnings span').innerHTML = warnings;
                document.querySelector('#counter span').innerHTML = counter;
                time = maxTime;
                timer();
            }
        }
    } else {
        timerID = setTimeout(timer, 1000);
    }
}

timer();