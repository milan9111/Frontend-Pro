var blockOne = document.querySelector('.block_1');
var blockTwo = document.querySelector('.block_2');
var blockThree = document.querySelector('.block_3');
var blockFour = document.querySelector('.block_4');


var inputMale = document.querySelector('.male');
var inputFemale = document.querySelector('.female');
var inputHeight = document.querySelector('.height');
var inputCurrentWeight = document.querySelector('.current-weight');
var inputDesiredWeight = document.querySelector('.desired-weight');
var inputActivity = document.querySelector('.input-activity');
var InputDesiredBodyShape = document.querySelector('.desired-body-shape');


var showHeight = document.querySelector('.show-height');
var showInputActivity = document.querySelector('.show-input-activity');
var showDesiredBodyShape = document.querySelector('.show-desired-body-shape');
var resultShowCalories = document.querySelector('.result-show-calories');


var gender = 0;
var heightValue = 0;
var currentWeightValue = 0;
var desiredWeightValue = 0;
var activityValue = 0;
var desiredBodyShapeValue = 0;
var result = 0;


var buttons = document.getElementsByTagName('button');

for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', getSelectionButton);
  function getSelectionButton(event) {
    if (event.target.dataset.page === 'next2') {
      blockOne.classList.remove('active_block');
      blockTwo.classList.add('active_block');
    } else if (event.target.dataset.page === 'next3') {
      blockTwo.classList.remove('active_block');
      blockThree.classList.add('active_block');
    } else if (event.target.dataset.page === 'next4') {
      blockThree.classList.remove('active_block');
      blockFour.classList.add('active_block');
    } else if (event.target.dataset.page === 'prev3') {
      blockFour.classList.remove('active_block');
      blockThree.classList.add('active_block');
    } else if (event.target.dataset.page === 'prev2') {
      blockThree.classList.remove('active_block');
      blockTwo.classList.add('active_block');
    } else if (event.target.dataset.page === 'prev1') {
      blockTwo.classList.remove('active_block');
      blockOne.classList.add('active_block');
    }
  }
}


inputMale.addEventListener('click', setGender);
inputFemale.addEventListener('click', setGender);
function setGender(event) {
  if(event.target.value === 'male') {
    gender = 5;
  } else if (event.target.value === 'famale'){
    gender = -161;
  } 
  calcResult();
}

setRangeHeight();
inputHeight.addEventListener('change', setRangeHeight); 
function setRangeHeight () { 
    showHeight.innerText = inputHeight.value;
    heightValue = inputHeight.value;
    calcResult();
}

inputCurrentWeight.addEventListener('input', setTextWeight);
function setTextWeight (event) { 
  if(this.value = this.value.replace(/[^\d]/g, '')){
    currentWeightValue = event.target.value;
  }
  calcResult();
}

inputDesiredWeight.addEventListener('input', setTextDesireWeight);
function setTextDesireWeight (event) { 
  if(this.value = this.value.replace(/[^\d]/g, '')){
    desiredWeightValue = event.target.value;
  }
  calcResult();
}

inputActivity.addEventListener('change', setInputActivity);
function setInputActivity() {
  switch(inputActivity.value) 
    {
      case '1':
        activityValue = 1.2;
        showInputActivity.src = 'images/bed.png';
        break;
    
      case '2':
        activityValue = 1.375;
        showInputActivity.src = 'images/chair.png';
        break;
    
      case '3':
        activityValue = 1.55;
        showInputActivity.src = 'images/walking.png';
        break;

        case '4':
        activityValue = 1.725;
        showInputActivity.src = 'images/running.png'; 
        break;

        default:
        showInputActivity.src = 'images/smilingface.png';  
        activityValue = 1.375; 
    }
    calcResult();
  }


InputDesiredBodyShape.addEventListener('change', setInputDesiredBodyShape);
function setInputDesiredBodyShape() {
  switch(InputDesiredBodyShape.value) 
    {
      case '1':
        desiredBodyShapeValue = -800;
        showDesiredBodyShape.src = 'images/womanrunning.png';
        break;
    
      case '2':
        desiredBodyShapeValue = -200;
        showDesiredBodyShape.src = 'images/biking.png';
        break;
    
      case '3':
        desiredBodyShapeValue = 200;
        showDesiredBodyShape.src = 'images/biceps.png';
        break;

        case '4':
        desiredBodyShapeValue = 600;
        showDesiredBodyShape.src = 'images/lifting.png'; 
        break;

        default:
        showDesiredBodyShape.src = 'images/smiling.png'; 
        desiredBodyShapeValue = -200; 
    }
    calcResult();
  }

  function calcResult() {
    var result = Math.round(((10 * currentWeightValue + 6.25 * heightValue + gender) * activityValue) + desiredBodyShapeValue); 
    resultShowCalories.innerHTML = result;
  }
  
  