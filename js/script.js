// Elementi di input della pagina
const percorso = document.getElementById("km");
const numero = document.getElementById("eta");
const button = document.querySelector("#conferma");


// Elementi di output

const etaScelta = document.getElementById("etaScelta");
const prezzo = document.getElementById("prezzo");


button.addEventListener("click", function() {

    const km = percorso.value;
    const eta = numero.value;
    
    console.log(`Distanza: ${km} km`);
    console.log(`Età selezionata: ${eta}`);

    // formula per vedere gli sconti
    const prezzoKm = 0.21;
    let prezzoPieno = km * prezzoKm;
    console.log("Prezzo pieno", prezzoPieno);


    let = prezzoScontato = prezzoPieno;
    if (eta === "minorenne") {
        prezzoScontato = prezzoPieno * 0.80;
    } 
    else if (eta === "senior") {
        prezzoScontato = prezzoPieno * 0.60;
    }
    else {
        console.log("Non hai diritto a sconti. Il prezzo pieno è:", prezzoPieno.toFixed(2));
    }


    prezzoFinale = prezzoScontato.toFixed(2);
    console.log('Il prezzo finale scontato è', prezzoFinale);
    // risultato del biglietto a schermo
    prezzo.innerHTML = `${prezzoFinale}`;
    etaScelta.innerHTML = `${eta}`;
    console.log("-------------------")
});