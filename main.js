'use strict'
// Задание 1

//пример 1
//let a = 1, b = 1, c, d; c = ++a;
//alert(c); // ответ: 2  
//сначало а увеличится на 1 затем выведется как а=2

//пример 2 
//d = b++;
//alert(d); //ответ: 1 
// выведется b = 1 а затем увеличится на 1 и запомниться как b=2

//пример 3 c = 2 + ++a; alert(c); //ответ: 5 
// к  числу 2 прибавляется увеличенное на 1(а=3) значение а из первого примера (а=2)

//пример 4 
//d = 2 + b++; alert(d); //ответ: 4 
// к чисду 2 прибавляется число b=2 (из примера 2) а затем b увеличивается на 1
//alert(a); //3 alert(b); //3 
//(результат увеличения числа b при помощи постфиксного инкримента в примере 2 и 4)



//Задание 2
//let a = 2;
//let x = 1 + (a *= 2);

// Переменная а будет равна 4(так как в выражении ей присваевается *= что означает a= a*2)
// перерменная х будет равна 5 (сначало выполняется математическое выражение в скобках с переменной а, затем к полученному числу прибавляется 1)



// Задание 3

/*let a, b, c
        a = Number(prompt('Введите число а: '))
        b = Number(prompt('Введите число b: '))
        if ((a > 0) && (b > 0)) {
            c = a - b
            console.log(`Разность чисел а и b: ${c}`)
        }
        else if ((a < 0) && (b < 0)) {
            c = a * b
            console.log(`Произведение чисел а и b: ${c}`)
        }
        else if ((a >= 0) && (b < 0) || (a < 0) && (b >= 0)) {
            c = a + b
            console.log(`Сума чисел а и b: ${c}`)
        }
         */
 // Задание 4
 
 function summa (a, b) {
     let c = a + b;
     console.log(` сумма = ${c}`);
     return c;
 }
 function raznost (a, b) {
    let c = a + b;
    console.log(` разность = ${c}`);
    return c;
}
function proizvedenie (a, b) {
    let c = a + b;
    console.log(` произведение = ${c}`);
    return c;
}
function delenie (a, b) {
    let c = a + b;
    console.log(` деление = ${c}`);
    return c;
}
 // задание 5
   
 function mathOperation(arg1, arg2, operation) {
    switch (operation) {
    case 'summa':
        return summa(arg1, arg2)
        break;
    case 'raznost':
        return raznost(arg1, arg2)
        break;
    case 'proizvedenie':
        return proizvedenie(arg1, arg2) 
        break;
    case 'delenie':
        return delenie(arg1, arg2)
        break;
    default:
        return NaN
        break;
    }
}
let a = 5
let b = 2
let result = mathOperation(a, b, 'raznost')
console.log('a + b = ', result)