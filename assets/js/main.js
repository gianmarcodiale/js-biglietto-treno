/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età. Sulla base delle informazioni ottenute dovrà calcolare il prezzo totale del viaggio secondo queste regole:
- il prezzo del biglietto è definito in base ai chilometri (0,21€ al km )
- applica uno sconto del 20% ai minorenni
- applica uno sconto del 40% agli over 65 */

// Chiedo il numero di chilometri all'utente
const km_to_travel = prompt("Quanti km devi percorrere?");
// Chiedo l'età all'utente
const user_age = prompt("Quanti anni hai?");
// Calcolo il prezzo del biglietto in base ai km da percorrere
const price_km_to_travel = km_to_travel * 0.21;
// Applico sconto del 20% SE minorenne e del 40% SE over 65
const price_age_under_18 = price_km_to_travel * 20 / 100;
const price_age_over_65 = price_km_to_travel * 40 / 100;
// Comunico il prezzo del biglietto su schermo
