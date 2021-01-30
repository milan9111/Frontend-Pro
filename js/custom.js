var userAge = confirm('Вам есть 18 лет?');
var userSmoke = confirm('Вы курите?');

if (userAge == false && userSmoke == false) {
    alert('Так держать!');
}  else if (userAge == false && userSmoke == true) {
    alert('Маме расскажу'); 
}  else if (userAge == true && userSmoke == false) {
    alert('Молодец, не надо');
}  else if (userAge == true && userSmoke == true) {
    alert('Ну и зря!');
}