

function updateQuantities() {
    let person = document.getElementById('person').value;

    document.getElementById('zutat-1').innerText = (1 * person).toFixed() + 'saltgurke (n)';
    document.getElementById('zutat-2').innerText = (1 * person).toFixed() + 'Paprikaschot(n). rot und grün';
    document.getElementById('zutat-3').innerText = (500 * person).toFixed() + 'g Tomate (n)';
    document.getElementById('zutat-4').innerText = (1 * person).toFixed() + ' Zwiebel(n)';
    document.getElementById('zutat-5').innerText = (200 * person).toFixed() + 'g Schafskäse (n)';
    document.getElementById('zutat-6').innerText = (100 * person).toFixed() + 'ml Glas Oliven. schwarze. ca100g';
   
    document.getElementById('zutat-8').innerText = (1 * person).toFixed() + ' Zitrone(n)';
    document.getElementById('zutat-9').innerText = (100 * person).toFixed() + 'ml Olivenöl';
   }