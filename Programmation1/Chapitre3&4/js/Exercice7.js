//7.Demandez un mot à l’usager, bouclez tant que le mot n’est pas patate.
// Comptez et affichez le nombre de mots entrés avant le mot patate.

var mot = prompt("Veuillez choisir un mot et l'entrer ici svp.");
var compteur = 0

while(mot.toUpperCase() != "PATATE"){
    mot = prompt("Veuillez choisir un mot et l'entrer ici svp.");
    compteur++
}

document.write(compteur + " mots entrés avant 'patate'");