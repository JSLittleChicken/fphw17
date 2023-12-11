// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
let array = ["a", "f", 6, 8, "r", 10, 12];
function defineAvarage(array) {
    let onlyNumbers = array.filter(x => !isNaN(x));
    if (onlyNumbers.length == 0) {
        return 0;
    } 
    let sum = onlyNumbers.reduce((a, b) => a + b);
    return sum / onlyNumbers.length
}

console.log(defineAvarage(array))

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
function doMath(x, znak, y) {
    x = +prompt("Введіть перше число");
    y = +prompt("Введіть друге число");
    znak = prompt("Введитіть математичну операцію +, -, *, /, %, ^ ");
    let result;

    switch (znak) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;  
        case "%":
            result = x % y;
            break;
        case "^":
            result = Math.pow(x,y);
            break;    
    }

    return result;
}

let functionResult = doMath();
console.log(functionResult);

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function createTwoDimensionalArray() {
    let twoDimArray = Array(+prompt('Введіть довжину зовнішнього масиву'));
    // console.log('поки одновимірний масив з пустих елементів', twoDimArray);
    for (let outerIndex = 0; outerIndex < twoDimArray.length; outerIndex++) {
        twoDimArray[outerIndex] = Array(+prompt(`Введіть довжину ${outerIndex + 1}-го внутрішнього масиву`));
        // console.log(outerIndex + 1 + ' крок', twoDimArray)
        for (let innerIndex = 0; innerIndex < twoDimArray[outerIndex].length; innerIndex++) {
            twoDimArray[outerIndex][innerIndex] = prompt(`Введіть значення елементу [${outerIndex}][${innerIndex}]`);
            // console.log(`Додаємо елемент [${outerIndex}][${innerIndex}]`, twoDimArray)
        }
    }
    return twoDimArray
}


let mightyArray = createTwoDimensionalArray();
console.log(mightyArray)


// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function removeSymbol(string, symbols) {
    for (symbol of symbols) {
        string = string.replaceAll(symbol, '')
    }
    return string;
}
let string = prompt("Введіть рядок");
let symbols = prompt("Введіть символи які хочете видалити");
let symbolsArray = symbols.split(',')
console.log(symbolsArray)
console.log(removeSymbol(string,symbols))