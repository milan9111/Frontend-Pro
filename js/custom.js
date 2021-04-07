var startDate = new Date('Apr 15, 2021 10:00:00').getTime();
var times = setInterval(function() {
	var msTimes = new Date().getTime();
	var diffTimes = (startDate - msTimes);
	
	var days = Math.floor(diffTimes / (1000 * 60 * 60 * 24));
	var hours = Math.floor((diffTimes % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((diffTimes % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((diffTimes % (1000 * 60)) / 1000);
    document.querySelector('#timer').innerHTML = `${days} д : ${hours} ч : ${minutes} м : ${seconds} с`;
    if (diffTimes < 0) {
        clearInterval(times);
        document.querySelector('#timer').innerHTML = 'Время акции закончилось';
    }
}, 1000);


var salePopupBuy = document.querySelector('.sale-popup-buy');
var salePopupClose = document.querySelector('.sale-popup-close');
var modal = document.querySelector('.modal');

salePopupBuy.addEventListener('click', popUpBuy);
salePopupClose.addEventListener('click', popUpClose);


function popUpBuy() {
    sessionStorage.setItem('sale', true);
    modal.style.display = 'none';
}

function popUpClose() {
    sessionStorage.setItem('sale', false);
    modal.style.display = 'none';
    setInterval(() => {
        modal.style.display = 'block';
    }, 10000);
}




