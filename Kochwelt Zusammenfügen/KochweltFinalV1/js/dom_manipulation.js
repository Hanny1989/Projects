// Warte, bis das DOM vollständig geladen ist
window.addEventListener("DOMContentLoaded", function () {
    // Referenzen zu den relevanten HTML-Elementen holen
    const portionsInput = document.getElementById("portions"); // Eingabefeld für Portionen
    const portionsButton = document.getElementById("portions_button"); // Button zum Berechnen
    
    // Zutaten mit ihrer Standardmenge und Beschreibungen abspeichern
    const ingredients = {
        gurke: { amount: 1, unit: "Salatgurke(n)" },
        paprika: { amount: 2, unit: "Paprikaschot(en), rot und grün" },
        tomate: { amount: 500, unit: "g Tomate(n)" },
        zwiebel: { amount: 2, unit: "Zwiebel(n)" },
        kaese: { amount: 200, unit: "g Schafskäse" },
        oliven: { amount: 100, unit: "g Oliven, schwarze, ca" },
        salz: { unit: "Salz und Pfeffer", fixed: true },
        zitrone: { amount: 1, unit: "Zitrone(n)" },
        oel: { amount: 125, unit: "ml Olivenöl" },
        oregano: { unit: "Oregano", fixed: true }
    };
    
    // Standard-Portionen (Referenzwert)
    const standardPortions = 4;
    
    // Funktion zur Berechnung der neuen Mengen
    function calculatePortions() {
        // Die gewünschte Portionszahl aus dem Inputfeld holen
        let newPortions = parseInt(portionsInput.value);
        
        // Sicherstellen, dass die Eingabe eine Zahl ist und im erlaubten Bereich liegt
        if (isNaN(newPortions) || newPortions <= 0 || newPortions > 7) {
            alert("Bitte eine gültige Anzahl an Portionen zwischen 1 und 7 eingeben.");
            return;
        }
        
        // Zutatenmengen aktualisieren
        for (let key in ingredients) {
            let ingredientElement = document.getElementById(key);
            if (ingredientElement) {
                // Falls die Zutat nicht verändert werden soll, nur den Text setzen
                if (ingredients[key].fixed) {
                    ingredientElement.textContent = ingredients[key].unit;
                    continue;
                }
                
                let originalAmount = ingredients[key].amount; // Originalmenge aus dem Objekt
                let unitText = ingredients[key].unit; // Einheit und Beschreibung
                let newAmount = (originalAmount / standardPortions) * newPortions; // Neue Menge berechnen
                
                // Falls die Einheit Gramm oder Milliliter ist, runden wir auf
                if (originalAmount > 5) {
                    newAmount = Math.round(newAmount);
                }
                
                // Aktualisierte Menge im HTML-Dokument setzen
                ingredientElement.textContent = `${newAmount} ${unitText}`;
            }
        }
    }
    
    // Event-Listener für den Button hinzufügen
    portionsButton.addEventListener("click", calculatePortions);
});


