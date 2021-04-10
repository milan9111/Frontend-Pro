var params = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,titlebar=no,width=500,height=500';
var newWin = window.open('', 'newWin', params);
newWin.document.write('<title>Frontend</title>');
newWin.document.write('<head><link rel="stylesheet" href="./style/newWin.css"></head>');
newWin.document.write('<body></body>');

var x;
var y;
intervalID = window.setInterval(moveMent, 1000);
function moveMent() {
    x = Math.round(Math.random() * window.outerWidth);
    y = Math.round(Math.random() * window.outerHeight);
    newWin.moveTo(x,y);
    newWin.focus();
}

setTimeout(function closeWin() { 
    clearInterval(intervalID);
    newWin.close();
}, 15000);

