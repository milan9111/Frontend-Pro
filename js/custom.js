let btn = document.getElementsByTagName('button')[0];
let text = document.getElementsByTagName('div');
let textResult;

btn.addEventListener('click', () => {
    for(let item of text) {
        textResult = `${item.innerHTML.substr(0, 10)}...`; 
        item.innerHTML = textResult;
    }
})

//=====================================================================


let box = document.querySelector('.box');
let colors =  ['red', 'green', 'blue'];
let index = 0;

setInterval(() => {
	box.style.color = `${colors[index++]}`;
    if (index >= colors.length) {
        index = 0;
    } 
}, 1000)


