/* Є дві змінні, якщо вони з однаковим знаком - то перемножити і вивести результат, 
якщо з різними знаками - то поділити і вивести результат,
якщо одне зі значень 0 - то покласти в результат значення іншої змінної і вивести результат,
якщо обидва нулі - то покласти в результат NaN і вивести результат. */

// debugger;
let symbol1 = 0;
let symbol2 = 0;
let result = "";

if (symbol1 === 0 && symbol2 === 0) {
    // result = 0 / 0;
    result = NaN;
} else if (symbol1 === 0 || symbol2 === 0) {
    if (symbol1 === 0) {
        result = symbol2;
    } else if (symbol2 === 0) {
        result = symbol1;
    }
} else if (symbol1 === symbol2) {
    result = symbol1 * symbol2;
} else {
    result = symbol1 / symbol2;
}

console.log(result);

/*Якщо число додатнє, парне, кратне 3 і 6 одночасно - вивести win, інакше - lose.
Першим обробляти варіант з lose. */

let number = -4;
let res = "";

// if (number > 0 && number % 2 === 0 && number % 3 === 0 && number % 6 === 0) {
//     res = "win";
// } else {
//     res = "lose";
// }

if (number <= 0 || number % 2 || number % 3 && number % 6) {
    res = "lose";
} else {
    res = "win";
}

console.log(res);
