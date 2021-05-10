let inputList = document.querySelectorAll('input');

for (let i = 0; i < inputList.length; i++) {
    inputList[i].addEventListener('input', function() {
        if (this.value = this.value.replace(/[^\d]/g, '')) {
          this.nextElementSibling.focus();  
        } 
    });
    inputList[i].addEventListener('keyup', function(event) {
        if (event.key === "Backspace") {
            this.previousElementSibling.focus();
        }
    });
}
    
