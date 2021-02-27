var obj = {
	'Коля':'1000', 
	'Вася':'500', 
	'Петя':'200'
};

document.write(`Зарплата Пети - ${obj['Петя']}, а зарплата Коли - ${obj['Коля']} <br />`); 

//--------------------------------------------------------

var arr = {
	'ru':['голубой', 'красный', 'зеленый'],
	'en':['blue', 'red', 'green'],
};

document.write(arr['ru'][0]);


//--------------------------------------------------------

var arr = {
	'ru':['голубой', 'красный', 'зеленый'],
	get allColors() {
		return `${arr['ru']}`;
	},
	set allColors(value) {
		var valueDate = value.split(' '); 
		arr['ru'] = arr['ru'].concat(valueDate);
	}
};

arr.allColors = prompt();
console.log(arr.allColors);

//---------------------------------------------------------