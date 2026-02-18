
function sum(a,b){ return a + b; }
function sub(a,b){ return a - b; }
function divide(a,b){ return a / b; }
function mult(a,b){ return a * b; }

let nums = [];


document.write("<table border='1'>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (true) {

    let val1 = prompt("Type number 1:");
    if (val1 === null) break;

    let val2 = prompt("Type number 2:");
    if (val2 === null) break;

    let symbl = prompt("Type +, -, /, *");
    if (symbl === null) break;

    val1 = Number(val1);
    val2 = Number(val2);

    let result;

    if (isNaN(val1) || isNaN(val2)) {
        result = "Error: Not a number";
    } else if (symbl == "+") {
        result = sum(val1, val2);
        nums.push(result);
    } else if (symbl == "-") {
        result = sub(val1, val2);
        nums.push(result);
    } else if (symbl == "/") {
        result = divide(val1, val2);
        nums.push(result);
    } else if (symbl == "*") {
        result = mult(val1, val2);
        nums.push(result);
    } else {
        result = "Error: Invalid operator";
    }

    document.write("<tr><td>" + val1 + "</td><td>" + symbl + "</td><td>" + val2 + "</td><td>" + result + "</td></tr>");
}


document.write("</table>");


let min = Math.min(...nums);
let max = Math.max(...nums);

let total = 0;
for (let i = 0; i < nums.length; i++) {
    total += nums[i];
}

let avg = total / nums.length;


document.write("<table border='1'>");
document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
document.write("</table>");
