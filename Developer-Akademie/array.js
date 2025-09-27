
/*function sumArray(arr){

    let sum = 0;

    for (let numbers = 0; numbers < arr.length; numbers++) {
       sum += arr[numbers];
       
        
    }
    return sum;

}

console.log(sumArray([1,2,3,4,5]))*/


function PrintNumbers(numbers){
    let contentRef = document.getElementById('content');
    
    for (let i = 0; i < 6; i++){
     contentRef.innerHTML += numbers[i] + `<p>${[i]}</p>`;
    }
    

}
console.log(PrintNumbers)



function Names(firstName , secondName){
    return  firstName + " " +secondName

}

console.log(Names('Der' , 'Dieter'))

function fruit(fruitName){
    return  fruitName + "BANANE";

    
}

console.log(fruit('bAnanE'));




/*
var 	Schlüsselwort zur Deklaration einer Variablen
Number 	Datentyp für nummerische Werte
Boolean 	Datentyp für Wahrheitswerte
String 	Datentyp für Zeichenketten
Object 	Datentyp für Objekte
Array 	Datentyp für Arrays
true 	Wahr (Wahrheitswert)
false 	Unwahr (Wahrheitswert)
undefined 	Undefinierter Wert
null 	Wert zur Repräsentation eines "ungültigen" Werts
alert() 	Funktion zur Anzeige eines Meldungsfensters
confirm() 	Funktion zur Anzeige eines Meldungsfensters mit Buttons zur Bestätigung
prompt() 	Funktion zur Anzeige eines Meldungsfensters mit einem Eingabefeld
if 	Schlüsselwort zum Einleiten des Codeblocks für eine einfache Verzweigung
else 	Schlüsselwort zum Einleiten des Codeblocks, falls die Bedingung nicht zutrift
switch 	Schlüsselwort zum Einleiten einer mehrfachen Verzweigung
case 	Schlüsselwort zum Einleiten eines Codeblocks für einen einzelnen Fall
default 	Schlüsselwort zum Einleiten eines Codeblocks für alle nicht abgedeckte Fälle
for 	Schlüsselwort für eine kopfgesteuerte Zählschleife
while 	Schlüsselwort für die Bedingung bei einer Schleife
do 	Schlüsselwort vor dem Codeblock einer fußgesteuerten Schleife
break 	Schlüsselwort, um eine Schleife zu beenden
continue 	Schlüsselwort, um zum Schleifenkopf/-fuß zu springen
new 	Schlüsselwort, um ein Objekt zu instanziieren
push() 	Funktion, um Werte am Ende eines Arrays hinzuzufügen
unshift() 	Funktion, um Werte am Anfang eines Arrays hinzuzufügen
pop() 	Funktion, um den letzten Wert eines Arrays zu entfernen
shift() 	Funktion, um den ersten Wert eines Arrays zu entfernen
length 	Eigenschaft für die Länge eines Arrays
concat() 	Funktion, um ein Array mit einem anderen Array zu verknüpfen
join() 	Funktion, um die Arraywerte in eine Zeichenkette zusammenzufassen
indexOf() 	Funktion, um das erste Vorkommen eines Eintrags in einem Array zu finden
lastIndexOf() 	Funktion, um das letzte Vorkommen eines Eintrags in einem Array zu finden
sort() 	Funktion, um ein Array zu sortieren
filter() 	Funktion, um ein Array zu filtern
parseInt() 	Funktion, um eine Zeichenkette in eine Ganzzahl umzuwandeln
parseFloat() 	Funktion, um eine Zeichenkette in eine Gleitkommazahl umzuwandeln
NaN 	Wert, der eine ungültige Zahl repräsentiert
isNaN() 	Funktion, um zu prüfen, ob ein Wert eine ungültige Zahl ist
Math.min() 	Funktion zur Ermittlung der kleinsten Zahl von mehreren Zahlen
Math.max() 	Funktion zur Ermittlung der größten Zahl von mehreren Zahlen
Math.floor() 	Funktion zum Abrunden einer Zahl
Math.ceil() 	Funtkion zum Aufrunden einer Zahl
Math.round() 	Funktion zum kaufmännischen Runden einer Zahl
Math.random() 	Funktion zum Generieren einer Zufallszahl
length 	Eigenschaft für die Länge einer Zeichenkette
concat() 	Funktion, um mehrere Zeichenketten zu verknüpfen
split() 	Funktion, um die Zeichenkette an einer bestimmten Zeichenkette aufzutrennen
substr() 	Funktion, um eine Teilzeichenkette an Hand des Startindexes und der Länge zu extrahieren
substring() 	Funktion, um eine Teilzeichenkette an Hand des Start- und Endindexes zu extrahieren
indexOf() 	Funktion, um das erste Vorkommen einer Zeichenkette in einer Zeichenkette zu finden
lastIndexOf() 	Funktion, um das letzte Vorkommen einer Zeichenkette in einer Zeichenkette zu finden
toString() 	Funktion, um einen Wert in eine Zeichenkette umzuwandeln
Date 	Datentyp zur Repräsentation eines Datums und einer Uhrzeit
getDay() 	Funktion zum Ermitteln des Wochentags aus einem Datums-Objekt
getDate() 	Funktion zum Ermitteln des Tags (des Monats) aus einem Datums-Objekt
getMonth() 	Funktion zum Ermitteln des Monats aus einem Datums-Objekt
getFullYear() 	Funktion zum Ermitteln des Jahrs aus einem Datums-Objekt
getHours() 	Funktion zum Ermitteln der Stunden aus einem Datums-Objekt
getMinutes() 	Funtkion zum Ermitteln der Minuten aus einem Datums-Objekt
getSeconds() 	Funktion zum Ermitteln der Sekunden aus einem Datums-Objekt
getMilliseconds() 	Funktion zum Ermitteln der Millisekunden aus einem Datums-Objekt
setDate() 	Funktion zum Setzen des Tags (des Monats) in einem Datums-Objekt
setMonth() 	Funktion zum Setzen des Monats in einem Datums-Objekt
setFullYear() 	Funktion zum Setzen des Jahrs in einem Datums-Objekt
setHours() 	Funktion zum Setzen der Stunden in einem Datums-Objekt
setMinutes() 	Funktion zum Setzen der Minuten in einem Datums-Objekt
setSeconds() 	Funktion zum Setzen der Sekunden in einem Datums-Objekt
setMilliseconds() 	Funktion zum Setzen der Millisekunden in einem Datums-Objekt
function 	Schlüsselwort zur Deklaration einer Funktion
return 	Schlüsselwort, um in einer Funktion einen Wert zuückzugeben
console.log() 	Funktion zur Ausgabe auf der Konsole
try 	Schlüsselwort, welches vor dem Codeblock zum Abfangen von Exceptions notiert wird
catch 	Schlüsselwort, welches vor dem Codeblock zum Behandeln von Exceptions notiert wird
throw 	Schlüsselwort zum Werfen einer Exception
document 	Objekt für den Zugriff auf das DOM
getElementById() 	Funktion des DOMs, um ein Element mittels der ID zu laden
getElementsByClassName() 	Funktion des DOMs, um Elemente mittels des Klassennamens zu laden
getElementsByTagName() 	Funktion des DOMs, um Elemente mittels des Tag-Namens zu laden
childNodes 	Eigenschaft eines Elements, um auf dessen Unterelemente zuzugreifen
appendChild() 	Funktion eines Elements, um ein neues Unterelement hinzuzufügen
removeChild() 	Funktion eines Elements, um ein Unterelement zu entfernen
forms 	Eigenschaft des DOMs, um auf die Formulare zuzugreifen
addEventListener() 	Funktion zum Hinzufügen eines Event-Handlers
removeEventListener() 	Funktion zum Entfernen eines Event-Handlers
click 	Maus-Event für das Klicken auf ein Element
mousemove 	Maus-Event für das Bewegen in einem Element
mouseout 	Maus-Event für das Verlassen des Bereichs eines Elements
mouseup 	Maus-Event für das Herunterdrücken einer Maustaste
mousedown 	Maus-Event für das Loslassen einer Maustaste
keydown 	Tastatur-Event für das Herunterdrücken einer Taste
keyup 	Tastatur-Event für das Loslassen einer Taste
keypress 	Tastatur-Event für das Betätigen einer (Zeichen-)Taste
change 	Event für die Änderung in einem Formularfeld
reset 	Event für das Zurücksetzen eines Formulars
submit 	Event für das Versenden eines Formulars
load 	Event für das Laden der Seite
window 	Objekt für den Zugriff auf das BOM
open() 	Funktion, um ein neues Fenster (ggf. Pop-up) zu öffnen
close() 	Funktion, um ein Fenster zu schließen
setTimeout() 	Funktion, um eine Funktion mit Verzögerung auszuführen (Timeout)
setInterval() 	Funktion, um eine Funktion zyklisch auszuführen (Intervall)
clearTimeout() 	Funktion, um ein gestartetes Timeout zu stoppen
clearInterval() 	Funktion, um ein gestartetes Intervall zu beenden
XMLHttpRequest 	Datentyp für eine AJAX-Anfrage
timeout 	Eigenschaft für den Timeout einer AJAX-Anfrage
readyState 	Eigenschaft für den Zustand einer AJAX-Anfrage
status 	Eigenschaft für den HTTP-Status einer AJAX-Anfrage
open() 	Funktion, um eine AJAX-Anfrage einzuleiten
send() 	Funktion, um eine AJAX-Anfrage zu senden
responseText 	Eigenschaft für die Antwort einer AJAX-Anfrage in Textform
responseXML 	Eigenschaft für die Antwort einer AJAX-Anfrage in XML-Form
getContext() 	Funktion zum Laden des Kontexts eines Canvas
strokeStyle 	Eigenschaft für die Linienfarbe in einem Canvas
lineWidth 	Eigenschaft für die Linienbreite in einem Canvas
fillStyle 	Eigenschaft für die Füllfarbe in einem Canvas
strokeRect() 	Funktion zum Zeichnen eines Rechtecks (ohne Füllung) in einem Canvas
fillRect() 	Funktion zum Zeichnen eines Rechtecks (mit Füllung) in einem Canvas
beginPath() 	Funktion zum Starten einer Pfadzeichnung in einem Canvas
moveTo() 	Funktion, um den Pfad-Cursor in einem Canvas zu setzen
lineTo() 	Funktion zum Zeichnen einer Linie in einem Canvas (Pfad)
arc() 	Funktion zum Zeichnen einer Ellipse in einem Canvas (Pfad)
arcTo() 	Funktion zum Zeichnen einer Kurve in einem Canvas (Pfad)
rect() 	Funktion zum Zeichnen eines Rechtecks in einem Canvas (Pfad)
closePath() 	Funktion, um an den Ausgangspunkt des Pfads in einem Canvas zu springen
stroke() 	Funktion zum Zeichnen des Pfads (ohne Füllung) in einem Canvas
fill() 	Funktion zum Zeichnen des Pfads (mit Füllung) in einem Canvas
font 	Eigenschaft für die Schrifteinstellungen in einem Canvas
strokeText() 	Funktion zum Zeichnen einer Schrift (ohne Füllung) in einem Canvas
fillText() 	Funktion zum Zeichnen einer Schrift (mit Füllung) in einem Canvas
drawImage() 	Funktion zum Zeichnen eines Bilds in einem Canvas
rotate() 	Funktion zur Rotation in einem Canvas
translate() 	Funktion zur Verschiebung des Nullpunkts in einem Canvas
scale() 	Funktion zur Skalierung in einem Canvas
transform() 	Funktion zur Transformation in einem Canvas
setTransform() 	Funktion zur Transformation (mit Zurücksetzen der vorherigen Transformation) in einem Canvas
save() 	Funktion zum Speichern von Einstellungen in einem Canvas
restore() 	Funktion zum Wiederherstellen von Einstellungen in einem Canvas
*/