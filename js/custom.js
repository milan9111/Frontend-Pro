var numbers = [-17, -16, -2, 4, 9, 25, 33, 54, 71, 256]; 
function positive(item, index, array){
    return item > 0
};

var positiveNumbers = numbers.filter(positive);

var squareRootNumbers = positiveNumbers.map(function(item, index, array) {
	return Math.sqrt(item);
});

console.log(squareRootNumbers);

//---------------------------------------------------------------------------

var arr = [1, 4, 2, 2, 1, 2, 6];
var number = 0;
var result = arr.reduce(function(previousValue, item, index, array) {
	if (previousValue > 10) {
		console.log(number);
		return;
	} else {
		number++;
		return previousValue + item;
	}
}); 
 