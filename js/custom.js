var abc = 'aaa bbb ccc'; 
var bbb = abc.substring(4,7);
console.log(bbb);

var bbbTwo = abc.substr(4, 3);
console.log(bbbTwo);

var bbbThree = abc.slice(4,7);
console.log(bbbThree);

//----------------------------------------------

var jsStudy = 'я учу javascript!';
jsStudy = jsStudy.charAt(0).toUpperCase() + jsStudy.slice(1, 17);
console.log(jsStudy);

//----------------------------------------------


var text = 'var_test_text';

function edit(a) {
	var a = a.split('_');  // преобразовываем в массивы
	var b = a.splice(0, 1); // вырезаем первый массив  
	var bString = b.join(''); // преобразовываем первый массив в строку
	for (var i= 0; i < a.length; i++){
		a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);  
	  } // делаем uppercase к первым буквам второго и третьего массива 
	var aString = a.join(''); // преобразовываем второй и третий массивы в строки 
	var editString = bString.concat(aString); // объеденяем первую строку со второй и третей 
	console.log(editString);	
}

edit(text);



//--------------------------------------------------

var x = Math.random();
console.log(x * 50);

// ИЛИ, если надо целое число: 
 
var y = Math.random(); 
console.log(Math.round(x * 50));