var firstInput = document.querySelector('.first');
var secondInput = document.querySelector('.second');
var thirdInput = document.querySelector('.third');
var btn = document.querySelector('.btn'); 
var setSumm = document.querySelector('.summ');

var obj = {
   firstInputValue : null,
   secondInputValue : null,
   thirdInputValue : null,
}

firstInput.addEventListener('input', (event) => {
   if (event.target.value !== "" && Number(event.target.value)){
      obj.firstInputValue = event.target.value;
   } else {
      firstInput.style.border = '2px solid red';
      return false;
   } 
});

secondInput.addEventListener('input', (event) => {
   if (event.target.value !== "" && Number(event.target.value)){
      obj.secondInputValue = event.target.value;
   } else {
      secondInput.style.border = '2px solid red';
      return false;
   }
});

thirdInput.addEventListener('input', (event) => {
   if (event.target.value !== "" && Number(event.target.value)){
      obj.thirdInputValue = event.target.value;
   } else {
      thirdInput.style.border = '2px solid red';
      return false;
   } 
});


btn.addEventListener('click', function calcSumm () {
   var summ = 0;
   for(key in obj) {
     summ += Number(obj[key])
   } 
   setSumm.value = summ;
   setSumm.style.border = '2px solid green'; 
})



var setNumbers = document.querySelector('.number');
setNumbers.addEventListener('blur', calcResult);

function calcResult() {
	var sum = 0;
	var numbersString = setNumbers.value;
	var arrNumbers = numbersString.split('');
  	for (var i = 0; i < arrNumbers.length; i++) {
		sum += + arrNumbers[i];
	}
	var getSumm = document.querySelector('.result');
	getSumm.value = sum;
  getSumm.style.border = '2px solid green';
}    