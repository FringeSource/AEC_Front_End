//10.Le collège offre 6 options aux étudiants. Ces options sont :
// INFORMATIQUE
// ADMINISTRATION
// HISTOIRE
// GÉNIE
// GEOGRAPHIE
// BUREAUTIQUE
//
// Mettre ces options dans un tableau, puis demander à un étudiant d’entrer un nom d’option. Vous lui répondez
// si OUI ou NON le collège offre cette option.

var tabOptions = ["INFORMATIQUE", "ADMINISTRATION", "HISTOIRE", "GENIE", "GEOGRAPHIE", "BUREAUTIQUE"];
var choixEtudiant = prompt("Quelle option désirez-vous étudier? Nous vous dirons si oui ou non nous l'offrons à notre établissement.").toUpperCase();
var trouver = false;

for(i = 0; i < tabOptions.length; i++){
    if(choixEtudiant === tabOptions[i]){
        trouver = true;
    }
}

if(trouver){
    document.write("Le cours est offert.");
}

else{
    document.write("Le cours n'est pas offert.");
}