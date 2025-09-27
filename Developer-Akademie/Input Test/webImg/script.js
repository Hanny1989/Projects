function Image1(){

    document.getElementById('img1').src = `./beach1.jpg `;
    setTimeout(image2 , 2000);
    
    
    }
    function image2(){
    
    document.getElementById('img1').src = `./beachCliff.jpg `;
    setTimeout(image3 , 2000);
    
    
    }
    function image3(){
    
    document.getElementById('img1').src = `./beach2.jpg `;
    setTimeout(image4 , 2000);
    
    
    }
    function image4(){
    
    document.getElementById('img1').src = `./flake.jpg `;
    setTimeout(Image1 , 2000);
    
    
    }
