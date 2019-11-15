//8.    Faire un programme qui lit le taux horaire et le nombre d’heures travaillées d’un employé. Affichez son salaire.
// (Attention, il est payé le double de son taux horaire pour toutes les heures supplémentaires travaillées. Une semaine
// de travail normale est de 40 heures.

var salaire;

var tauxHoraire;
var heures;

//Demander les variables
tauxHoraire = Number(prompt("Quel est votre taux horaire?"));
heures = Number(prompt("Combien d'heures travaillez-vous par semaine?"));

if(heures <= 40){
    salaire = 52 * (heures * tauxHoraire);
}
else{
    salaire = 52 * ((40 * tauxHoraire) + ((heures - 40) * (2 * tauxHoraire) ));
}

console.log("Votre salaire est donc de " + salaire + "$ annuellement.");