
//Я сделал изначально так:

var radiusCylinder = prompt('Введите радиус цилиндра');
var heightCylinder = prompt('Введите высоту цилиндра');
alert('Объем цилиндра c площадью основы - ' + Math.PI * radiusCylinder * radiusCylinder + 
     '\nрадиусом - ' + radiusCylinder + ' и высотой - ' + heightCylinder + 
     '\nравен: ' + Math.PI * radiusCylinder * radiusCylinder * heightCylinder);


//Но редактор еще предложил конвертировать в:

var radiusCylinder = prompt('Введите радиус цилиндра');
var heightCylinder = prompt('Введите высоту цилиндра');
alert(`Объем цилиндра c площадью основы - ${Math.PI * radiusCylinder * radiusCylinder}
радиусом - ${radiusCylinder} и высотой - ${heightCylinder}
равен: ${Math.PI * radiusCylinder * radiusCylinder * heightCylinder}`);


//Еще такой вариант с функцией:

var { radiusCylinder, heightCylinder } = newFunction();
function newFunction() {
    var radiusCylinder = prompt('Введите радиус цилиндра');
    var heightCylinder = prompt('Введите высоту цилиндра');
    alert('Объем цилиндра c площадью основы - ' + Math.PI * radiusCylinder * radiusCylinder +
        '\nрадиусом - ' + radiusCylinder + ' и высотой - ' + heightCylinder +
        '\nравен: ' + Math.PI * radiusCylinder * radiusCylinder * heightCylinder);
    return { radiusCylinder, heightCylinder };
}

