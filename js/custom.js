

let newCookies = document.cookie;
   if (!newCookies){
   alert ('Добро пожаловать!')
   updateCookie ('cookie created');
   } else {
    checkCookie();
   }
   
   function updateCookie(text){
   document.cookie = "name=CookieName";
   document.cookie = `creationDate=${Date.parse(new Date())}`;
   console.log(text)
   }
    
   function checkCookie(){
   let date = Date.parse(new Date());
   let cookies = newCookies.split(';');  
   let cookiesValue = Number(cookies[1].split('=')[1]);
   let cookiesLive = (date - cookiesValue)/1000; 
   if (cookiesLive >= 10){
          alert('Нажмите, чтоб обновить куки');
   }
        updateCookie('cookie updated');
}





