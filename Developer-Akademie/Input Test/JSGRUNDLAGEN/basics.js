
// functionen sind methoden!! 

// Variablen   Code wird immer von oben nach unten gelesen und klammern werden von innen nach außen gelöst 
let meineVariable = 27;    // let ist die gängigste Version von einer definition einer Variablen.  let wird zum ersten definieren genutzt

meineVariable = 29;        // Wenn man let neu definieren möchte, muss man nicht let nehmen. Das würde ienen neuen Container öffnen und zu einem Fehler führen. 

console.log(meineVariable)   // console.log ist für die Seite zum überprüfen b alles gut geht 


// Datentypen 

let myString = ""``''; // Strings sind Texte

let myNumber = xx;   // Zahlensystem 
let myFloat = kommazahl;  // Float sind KOmmazahlen 
let myInt = ganze Zahl; // integer sind ganze Zahlen 


let myBoolean = true;  // true r false ! sind nur die ienzigen möglichkeiten für diese Variable! 

let myArray = [2,5, 'asdf'] // eine Liste 
let myObject = {age : 32 , height : 150}  // liste mit key/value parts 

let myDivision =  15/2;
let myMulty = 10 * 5; 

let myPow = 2**3; // Mathematische formeln einfach ausrechnen ohne direkte refresh function

//Strings

let myContact = "Hello" + " World"; 

console.log(myContact);

// combination mit Numbers 

let myCombination = 5 * "5";

console.log(myCombination);

// Booleans und Operator // "&&" und "||"




let myCondition = true ;

myCondition = !myCondition;   // not Operator = false durch ! 

myCondition = true || false;    // or Operator (wenn ein Operator true ist, dann kommt true bei raus)

myCondition = true && false;     // and Operator ( wenn ein Operator als false drin ist, dann bleibt die Gleichung auf false)// zb bewerbungsapps, wenn eine antwort falsch ist, dann ist man raus. 



console.log(myCondition);



myCondition = 45 == "45";    // == testet ob exakt gleich  ohne Type
   

myCondition = 45 === "45";  // === testet ob exakt gleich mit Type  -> false
myCondition = 45 === 45;    // === testet ob exakt gleich mit Type  -> true 

myCondition =  45 > 30 ;    // abfragen größer oder kleinergleich (true false) 

myCondition = 45 !== "45";  // === testet ob exakt gleich mit Type  -> true // not Operator "!" definiert es immer auf das gegenteil 
myCondition = 45 !== 45;    // === testet ob exakt gleich mit Type  -> true 


// If, else und If else - Abfragen  (Wenn, Dann - Bedingungen)

let myIfCondition = true; 


if(myIfCondition){
    console.log ("Hello World! if Teil ");     // If=Wenn (myIfCondition) ist das, dann führe die Zeile aus

} else if(!myIfCondition){                      // Wenn if nicht die gewünschte Condition ist zb False, dann führe diese Zeile aus

    console.log("Hello World! if-else Teil");   // man kann mit einem "!" Operator auch das Gegenteil bewirken, also true=false, false=true 
}
else {
    console.log("Hello WOrld! else Teil");  // 
}


let price = 500 ;           // eine Function liest genau wie alle anderen, den Code von oben nach unten
let discount = 250;         // 

calculatedPrice()          // die function oder der parameter für die function kann alleine steen um ausgeführt u werden 


function calculatedPrice() {  // wichtig ist nur,d ass die function geschrieben ist und darauf zugegriffen werden kann 
    console.log((price - discount) *1.19 )
}
// also die function nimmt, die beiden let parameter und formt sie in der function um in zhlen buchstaben ect. die klammer wird von innen nach ausßen gelöst und im console log wird dann der preis buchstabe ect ausgedrückt

calculatedPrice(500 , 200); // die Parameter werden in den Klammern festgelegt und brauchen somit kein "let" mehr 

calculatedPrice( 300 , 100); // 


function calculatedPrice(price , discount) {    // in der function löst sich dann der calculated price nach reihe auf, also von links nach rechts und von oben nach unten 
    console.log((price  - discount) * 1.19 )
    
}


console.log(calculatedPrice(300, 200))

function calculatedPrice(price , discount) {     // let in der function steht auch NUR für diese function zur verfügung 
    let value = (price  - discount) * 15 ;
   return value;                                 // return beednet die function und alles was unter return steht wird nicht mehr beachtet 
    
}


// Objekte // fast alles in JS ist ein Objekt! 

let myfancyObject = {      
    age : 32, 
    height : 181 , 
    name : "John",
} 

console.log(myfancyObject.age);   // in klammern kann ich durch trennung mit einem Punkt auf die jeweilige zeile im objekt zugreifen 

// Alles sind Objekte 

myTestString = "Hallo  "

myTestString = myTestString.trim();  // trim löscht die unnötigen Leerzeichen. es muss gleich gesetzt werden mit dem Operator wie im Bsp zu sehen 

console.log(myTestString.length  );
https://www.w3schools.com/jsref/jsref_trim_string.asp    
https://www.w3schools.com/jsref/jsref_length_string.asp

