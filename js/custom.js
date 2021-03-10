var picture = document.getElementById("mainLogo");
var img = document.createElement("img");
img.src = "images/otzovik.png";
mainLogo.appendChild(img);
mainLogo.setAttribute("class", "mainLogoStyle");


var title = document.getElementById("title"),
firstParagraph = title.firstElementChild;
var hSecond = document.createElement("h2");
hSecond.innerHTML = "Сеть спортивных магазинов СпортМастер";
title.insertBefore(hSecond, firstParagraph);
title.setAttribute("class", "titleStyle");


var subtitle = document.getElementById("subtitle"),
firstParagraph = subtitle.firstElementChild;
var hThird = document.createElement("h3");
hThird.innerHTML = "Посетитель магазина СпортМастер - Татьяна";
subtitle.insertBefore(hThird, firstParagraph);
subtitle.setAttribute("class", "titleStyle");
subtitle.style.paddingTop = "35px";

var text = document.getElementById("text"),
firstParagraph = text.firstElementChild;
var p = document.createElement("p");
p.innerHTML = "Неплохой магазин, уютно много места. Зимой, когда была чёрная пятница покупала <br> себе куртку Outventure со скидкой в цену 1/3 куртки. Всем довольна, тёплая куртка, всю зиму проходила в ней.";
text.insertBefore(p, firstParagraph);
text.setAttribute("class", "textStyle");

review.setAttribute("class", "reviewStyle");
btn.setAttribute("class", "btnStyle");





