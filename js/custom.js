/*var userAge = prompt('Сколько лет?');
var userSmoke = confirm('Куришь?');

if (userAge < 1) {
    alert('Неверный возраст'); 
}  else if (userAge < 18 && userSmoke == false) {
    alert('Так держать!');
}  else if (userAge < 18 && userSmoke == true) {
    alert('Маме расскажу'); 
}  else if (userAge >= 18 && userSmoke == false) {
    alert('Молодец, не надо');
}  else if (userAge >= 18 && userSmoke == true) {
    alert('Ну и зря!');
}  

var firstValue = prompt('Введите первое значение');
var secondValue = prompt('Введите второе значение');

if (firstValue > secondValue) {
    alert(firstValue + ' больше, чем ' + secondValue);
} else if (firstValue < secondValue) {
    alert(secondValue + ' больше, чем ' + firstValue);
} else {
   alert('Значения равны');
}

var kmDistance = prompt('Введите расстояние в километрах');
var ftDistance = prompt('Введите расстоянине в футах');
var smDistance = (kmDistance * 100000);
var newValueFt = (ftDistance * 30.5);

if (smDistance > newValueFt) {
    alert(kmDistance + ' км больше, чем ' + ftDistance + ' футов');
}   else if (newValueFt > smDistance) {
    alert(ftDistance + ' футов больше, чем ' + kmDistance + ' км');
}   else if (newValueFt === smDistance) {
    alert('Расстояние равно');
}

function isLannisterSoldier(color, lion) {
    if ((color === 'red' && lion === null) || lion === 'lion') {
        alert(true + ' солдат распознан!');
    } else {
        alert(false + ' солдат не распознан...');
    }
}

isLannisterSoldier('red', 'lion');
isLannisterSoldier('blue', null);*/


console.log('Цикл for');

for (var i = 1; i < 11; i++) { 
    console.log('Умножение на 1 - от 1 до 10 = ', i * 1);
}

console.log('***********');

for (var i = 1; i < 11; i++) { 
    console.log('Умножение на 2 - от 1 до 10 = ', i * 2);
}

console.log('***********');

for (var i = 1; i < 11; i++) { 
    console.log('Умножение на 3 - от 1 до 10 = ', i * 3);
}

console.log('***********');

for (var i = 1; i < 11; i++) { 
    console.log('Умножение на 4 - от 1 до 10 = ', i * 4);
}

console.log('***********');

for (var i = 1; i < 11; i++) { 
    console.log('Умножение на 5 - от 1 до 10 = ', i * 5);
}

console.log('Цикл while');

var i = 0;
while (i < 10) {
  i++;
  console.log('Умножение на 6 - от 1 до 10 = ', i * 6);
}

console.log('***********');

var i = 0;
while (i < 10) {
  i++;
  console.log('Умножение на 7 - от 1 до 10 = ', i * 7);
}

console.log('***********');

var i = 0;
while (i < 10) {
  i++;
  console.log('Умножение на 8 - от 1 до 10 = ', i * 8);
}

console.log('***********');

var i = 0;
while (i < 10) {
  i++;
  console.log('Умножение на 9 - от 1 до 10 = ', i * 9);
}

console.log('***********');

var i = 0;
while (i < 10) {
  i++;
  console.log('Умножение на 10 - от 1 до 10 = ', i * 10);
}


