let inputList = document.querySelectorAll('input');


function setNumbers(nodeList) {
    const numbersArray = getCookies(nodeList.length);
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].value = numbersArray[i]
        nodeList[i].addEventListener('input', function() {
            if (this.value = this.value.replace(/[^\d]/g, '')) { 
                setCookie(i,this.value, nodeList.length);
                this.nextElementSibling.focus();  
            } 
        });
    }    
}

function delNumbers(nodeList) {
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].addEventListener('keyup', function(event) {
            if (event.key === "Backspace") {
                setCookie(i, event.target.value, nodeList.length);
                this.previousElementSibling.focus();
            }
        });
    }
}

function setCookie(position, number, length){
    let numbers = getCookies(length);
    numbers[position] = number;
    document.cookie = `cart=${numbers.join(',')}`;
}

function getCookies(length){
    let numbersArray = document.cookie?.split('=')[1]?.split(',') || Array(length).fill(null);
    return numbersArray;		
}
setNumbers(inputList);
delNumbers(inputList);




