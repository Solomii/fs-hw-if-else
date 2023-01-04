/* Є дві змінні, якщо вони з однаковим знаком - то перемножити і вивести результат, 
якщо з різними знаками - то поділити і вивести результат,
якщо одне зі значень 0 - то покласти в результат значення іншої змінної і вивести результат,
якщо обидва нулі - то покласти в результат NaN і вивести результат. */

// debugger;
let symbol1 = 2;
let symbol2 = 5;
let result = "";

if (symbol1 === 0 && symbol2 === 0) {
    result = 0 / 0;
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