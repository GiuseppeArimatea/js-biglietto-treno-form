
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

      var prezzoBiglietto = numeroKm * 0.21; // variabile prezzo biglietto x numerokm
      var offerta = 'tariffa standard' // variabile tariffa

      if (fascia == 'minorenne') {  // se è minorenne appichiamo lo sconto del 20
          prezzoBiglietto -= ((prezzoBiglietto * 20) / 100);
          offerta = 'sconto minorenne'; // mostriamo la scritta sconto minore
      } else if (fascia == 'over65') { // se è over65 applichiamo il 40
          prezzoBiglietto = ((prezzoBiglietto * 40) / 100);
          offerta = 'sconto over65'; // mostriamo la scritta sconto over65
      }

      var carrozza = Math.floor(Math.random() * 9) + 1; // randomiziamo i numeri della carrozza da 1 a 9 e i numeri del cp da 90000 a 100000
      var cp = Math.floor(Math.random() * (100000 - 90000 + 1) ) + 90000;


      document.getElementById('nome-passeggero').innerHTML = nome; // Stampiamo tutto sullo schermo
      document.getElementById('offerta').innerHTML = offerta;
      document.getElementById('costo-biglietto').innerHTML = prezzoBiglietto.toFixed(2);
      document.getElementById('carrozza').innerHTML = carrozza;
      document.getElementById('codice-cp').innerHTML = cp;
    }
  );

  var buttonAnnulla = document.getElementById('annulla'); // creiamo una variabile che selezione il bottone Annulla
  buttonAnnulla.addEventListener ('click', // se facciamo annulla tutte le value diventano '' (vuote)
    function () {
      document.getElementById('nome-passeggero').innerHTML = '';
      document.getElementById('offerta').innerHTML = '';
      document.getElementById('costo-biglietto').innerHTML = '';
      document.getElementById('carrozza').innerHTML = '';
      document.getElementById('codice-cp').innerHTML = '';
      document.getElementById('nome-utente').value = '';
      document.getElementById('km').value = '';
      document.getElementById('fascia-eta').value = '';
    }
  );
