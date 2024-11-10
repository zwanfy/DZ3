var parament = (a, b) => (a > b) ? b : a
console.log(parament(757, 908))

var str = (text = prompt('Введите строку')) => text.length
console.log('Длинна строки' + str())

var calculator = (a, b, c,) => {
    console.log(a, b, c)
    if (b === "+") return a + c
    if (b === "-") return a - c
    if (b === "*") return a * c
    if (b === "/") {
        if (c === 0) return alert('На ноль делить нельзя!')
        return a / c
    }
}
var num1 = parseInt(prompt('Введите первую цифру.'))
var func = prompt('Введите арифметическое действие.')
var num2 = parseInt(prompt('Введите вторую цифру.'))
console.log(calculator(num1, func, num2))