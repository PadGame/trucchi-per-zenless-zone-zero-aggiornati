// helper.js
// Simulazione supporto per Zenless Zone Zero

console.log("Avvio Helper Zenless Zone Zero...");

let systemReady = true;

function scanResources() {
    if (systemReady) {
        console.log("Risorse rilevate. Modalità ottimizzazione attiva.");
    } else {
        console.log("Errore nella configurazione.");
    }
}

scanResources();
