
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.
// chiedere il numero km e età

var buttonGenera = document.getElementById('genera'); // creiamo una variabile che selezione il bottone Genera
buttonGenera.addEventListener ('click', // Assegniamo i parametri dopo il click
  function() {
    var nomeInput = document.getElementById('nome-utente');  // parametro Utente
    var nome = nomeInput.value; // assegnamo alla variabile il value inserito da tastiera
    console.log(nome);

    var inputKm = document.getElementById('km');  // parametro KM
    var numeroKm = parseInt(inputKm.value); // assegnamo alla variabile il value inserito da tastiera
    console.log(numeroKm);

    var fasciaEtaSelect = document.getElementById('fascia-eta'); // paremetro Eta
    var fascia = fasciaEtaSelect.value; // assegnamo alla variabile il value inserito da tastiera
    console.log(fascia);

    var prezzoBiglietto = numeroKm * 0.21;
    var offerta = 'tariffa standard'

    if (fascia == 'minorenne') {
        prezzoBiglietto -= ((prezzoBiglietto * 20) / 100);
        offerta = 'sconto minorenne';
    } else if (fascia == 'over65') {
        prezzoBiglietto = ((prezzoBiglietto * 40) / 100);
        offerta = 'sconto over65';
    }

    document.getElementById('nome-passeggero').innerHTML = nome;
    document.getElementById('offerta').innerHTML = offerta;
    document.getElementById('costo-biglietto').innerHTML = prezzoBiglietto.toFixed(2);
    }
);
