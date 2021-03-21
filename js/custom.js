let blocks = document.querySelectorAll('.pane');
for (let i = 0; i < blocks.length; i++) {
    blocks[i].insertAdjacentHTML("afterbegin", '<button class="close"><img src="./images/delete.gif" alt="x"></button>');
    blocks[i].firstChild.onclick = function() {
        blocks[i].remove();
    }
  };





  


