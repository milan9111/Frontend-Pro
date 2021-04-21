var inputDistanceValue = document.querySelector('.input-distance-value');
var distance = document.querySelector('.distance');
var choiceTariffsEconom = document.querySelector('.choice-tariffs-econom');
var choiceTariffsStandard = document.querySelector('.choice-tariffs-standard');
var choiceTariffsPremium = document.querySelector('.choice-tariffs-premium');
var choiceTariffsMinibus = document.querySelector('.choice-tariffs-minibus');
var choiceAddservicePets = document.querySelector('.choice-addservice-pets');
var choiceAddserviceBags = document.querySelector('.choice-addservice-bags');
var calculatedCostResults = document.querySelector('.calculated-cost-results');
var btnCalc = document.querySelector('.btnCalc');

var getIntoCar = 50;
var distanceTrip;
var typeOfCar;
var transportedPets;
var transportedBags;

setRangeValue();
inputDistanceValue.addEventListener('change', setRangeValue); 
function setRangeValue () { 
    var selectedDistance;
    distance.innerText = inputDistanceValue.value;
    selectedDistance = inputDistanceValue.value;
    distanceTrip = 8 * selectedDistance;
}

choiceTariffsEconom.addEventListener('click', setClickTarrifs);
choiceTariffsStandard.addEventListener('click', setClickTarrifs);
choiceTariffsPremium.addEventListener('click', setClickTarrifs);
choiceTariffsMinibus.addEventListener('click', setClickTarrifs);

function setClickTarrifs(event) {
    if(event.target.value === 'economical') {
        typeOfCar = 1;
    } else if (event.target.value === 'standard') {
        typeOfCar = 1.3;
    } else if (event.target.value === 'premium') {
        typeOfCar = 1.5;
    } else if (event.target.value === 'minibus') {
        typeOfCar = 2;
    }

}

choiceAddservicePets.addEventListener('click', setAddservice);
choiceAddserviceBags.addEventListener('click', setAddservice);


function setAddservice() {
    if(choiceAddservicePets.checked) {
        transportedPets = 10;    
    } else {
        transportedPets = 0;
    } if (choiceAddserviceBags.checked) {
        transportedBags = 15;
    } else {
        transportedBags = 0;
    }
}


function getTotalSum() {
    var sum = Math.round((getIntoCar + distanceTrip + transportedPets + transportedBags) * typeOfCar);
    calculatedCostResults.innerHTML = sum;
}

btnCalc.addEventListener('click', getTotalSum);





