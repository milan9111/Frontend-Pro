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
isLannisterSoldier('blue', null);




for (var i = 1; i < 11; i++) {
        console.log("**********");
    for (var j = 1; j < 11; j++) {
        console.log(i + ' * ' + j + ' = ' + i * j);
    }
}*/

//-------------------------------------------------

var arrPlusEnd = ['a', 'b', 'c'];
arrPlusEnd.push(1, 2, 3);
console.log(arrPlusEnd); 

//-------------------------------------------------

var arrPlusStart = [1, 2, 3];
arrPlusStart.unshift(4, 5, 6);
console.log(arrPlusStart);

//-------------------------------------------------

var arrSelectFirst = ['js', 'css', 'jq'];
document.write(arrSelectFirst[0] + '</br>');

//-------------------------------------------------

var arrSelectLast = ['js', 'css', 'jq'];
document.write(arrSelectFirst[2] + '</br>');

//------ИЛИ, если большой массив-------------------

function selectLastItem() {
    var arrSelectLast = ['js', 'css', 'jq'];
    return arrSelectLast[arrSelectLast.length - 1];
}

document.write(selectLastItem() + '</br>');

//-------------------------------------------------

var arrNumber = [1, 2, 3, 4, 5];
var arrNumberNew = arrNumber.slice(0, 3);
console.log(arrNumberNew); 


