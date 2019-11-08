var taux;
var heures;
var salaire;

taux = Number(prompt("Veuillez indiquer votre taux horaire, le nombre seulement svp"));
heures = Number(prompt("Veuillez indiquer combien d'heures par semaine vous travaillez svp"));
salaire = taux * heures * 52;

console.log("Votre salaire brut annuel est donc de " + salaire);