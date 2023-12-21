let expression = document.getElementById('expression');
let resultField = document.getElementById('result');

function appendToExpression(value) {
    expression.value += value;
}

function clearExpression() {
    expression.value = '';
    resultField.value = '';
}

function calculateResult() {
    try {
        resultField.value = eval(expression.value);
    } catch (error) {
        resultField.value = 'Помилка';
    }
}