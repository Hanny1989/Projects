



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculate").addEventListener("click", updateQuantities);
});

document.getElementById("calculate").addEventListener("click", updateQuantities); // Sucht nach der angegeben ID und fügt dann click hinzu, wenn das ergbenis mit updateQundities aufgerufen wird. 

function updateQuantities() {
    let portions = document.getElementById('person').value * 1; // Umwandlung in Zahl durch Multiplikation*1 damit  parseInt entfällt damit. Noch einfacher gecoded 
    if (portions < 1 || portions > 20) {        // || logische Disjunktion. Solange die Menge wahr ist, wird ausgerechnet. Im Alert wird dann eine zahl von 0 oder +20 ausgegeben
        alert("Bitte eine Zahl zwischen 1 und 20 eingeben.");
        return;
    }

    document.getElementById('flour').innerText = (100 * portions) + ' g Mehl';
    document.getElementById('milk').innerText = (200 * portions) + ' ml Milch';
    document.getElementById('eggs').innerText = (1 * portions) + ' Ei' + (portions > 1 ? 'er' : '');
    document.getElementById('sugar').innerText = (20 * portions) + ' g Zucker';
    document.getElementById('butter').innerText = (30 * portions) + ' g Butter';
}


   
