document.body.addEventListener('keydown', moveBlock);
var block = document.querySelector('#blueRect');
var leftBlock = 0;
var topBlock = 0;

function moveBlock(event) {
   if (event.key === 'ArrowRight') {
       leftBlock++;
       block.style.left = leftBlock * 10 + 'px';
       
   } else if (event.key === 'ArrowDown') {
      topBlock++;
      block.style.top = topBlock * 10 + 'px';
      
   } else if (event.key === 'ArrowLeft') {
      leftBlock--;
      block.style.left = leftBlock * 10 + 'px';
      
   } else if (event.key === 'ArrowUp') {
      topBlock--;
      block.style.top = topBlock * 10 + 'px';
   }

   function sideSite () {
      if (leftBlock < 1) {
         return leftBlock = 1;
      } else if (leftBlock > 142) {
         return leftBlock = 142;
      } 
      else if (topBlock < 1) {
         return topBlock = 1;
      } else if (topBlock > 60) {
         return topBlock = 60;
      } 
   }
   
   sideSite();
   
}





  



