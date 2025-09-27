let title = document.getElementById('website_title'); //let greift mit dem zweiten wort uf die ID zu//

console.log(title);

title.innerHTML= "neuer Titel"; // id name plus .innerHTML .getText ect verändert den Titel in einem HTML Dokument// 



document.getElementById('testdiv').innerHTML = '<div class="btn" id="button"><p><button>test</button></p></div>';
                                                                                 


document.getElementById('testdiv').classList.toggle('green_bg');  // fügt hinzu oder entfernt die css klasse (lichschalter methode) 
document.getElementById('testdiv').classList.add('green_bg');     // fügt eine css klasse hinzu 
document.getElementById('testdiv').classList.remove('green_bg');  // entfernt eine css klasse 



document.getElementById('input').setAttribute('value' , '155555555555');  // hier kann man auf das eingabefeld direkt zugreifen und einen standart wert direkt erzeugen


let button = document.getElementById('button');

button.innerHtml="Dont Push!";

document.getElementById('push').toggleAttribute('homebutton');


 

function onclick() {
    let button = document.getElementById('button');
    button.innerHTML = "Dont Push";

}






