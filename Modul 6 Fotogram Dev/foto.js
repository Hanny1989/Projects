let picContentArray = ['./img/variSeitlich.jpg', 
                       './img/vwSeitlich.jpg'];


function on() {
    document.getElementById("overlay").style.display = "block";
    let overlay = document.getElementById("overlay");
    for (let index = 0; index < picContentArray.length; index++) {
        overlay.innerHTML += getNoteTemplate(index);
    }

}

function getNoteTemplate(index) {
    return `<img src="./img/variSeitlich.jpg" 
                       style="height: 150px; 
                       width: 130px; 
                       position: absolute; 
                       top: 50%; 
                       left: 50%;
                       right:50%;
                       left:50%;
                       ">`
}



  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }

