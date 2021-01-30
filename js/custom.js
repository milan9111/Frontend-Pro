/*var userAge = confirm('Вам есть 18 лет?');
var userSmoke = confirm('Вы курите?');

if (userAge == false && userSmoke == false) {
    alert('Так держать!');
}  else if (userAge == false && userSmoke == true) {
    alert('Маме расскажу'); 
}  else if (userAge == true && userSmoke == false) {
    alert('Молодец, не надо');
}  else if (userAge == true && userSmoke == true) {
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
}*/

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



