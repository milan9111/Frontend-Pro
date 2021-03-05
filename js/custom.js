
var elem = document.getElementById('elem');

function func(surname, name) {
alert(this.value + ', ' + surname + ' ' + name);
}
var funcName = func.bind(elem);

funcName('Иванов', 'Иван');
funcName('Петров', 'Петр');

//-------------------------------------------------

var elem = document.getElementById('elem');

function funcHI(text) {
alert(this.value + text);
}

funcHI.call(elem, ' <--- value инпута');

//-------------------------------------------------