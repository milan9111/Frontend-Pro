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




for (var i = 1; i < 11; i++) {
        console.log("**********");
    for (var j = 1; j < 11; j++) {
        console.log(i + ' * ' + j + ' = ' + i * j);
    }
}


