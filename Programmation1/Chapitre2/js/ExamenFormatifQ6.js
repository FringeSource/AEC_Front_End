// Écrire le code :
//
//     Vous devez compléter un programme qui permet de calculer la facture pour l’achat d’un robot imprimable en 3 dimensions.
//
//     L’usager doit sélectionner le contrôleur
// 55$ pour un RaspBerry Pi
// 15$ pour un Raspberry Pi Zero
//
// L’usager doit décider du nombre de moteurs entre 2 et 24.
// Un moteur coûte 5$
//
// L’usager décide s’il veut une caméra USB ou non
// La caméra coûte 35$
//
// L’usager décide s’il veut une matrice de LEDS pour les yeux
// La matrice coûte 10$ pour les deux yeux.
//
//     Il faut ensuite ajouter 20$ pour le filament 3D.
//     Il faut ajouter 15$ pour la batterie USB.

//Variables avec coûts
var prixControleur;
var prixMoteur;
var prixCameraUSB;
var prixMatriceLEDS;
var prixFilament3D = 20;
var prixBatterieUSB = 15;
var prixTotal;
var prixLivraison;

//Variables des sélections
var selectionControleur;
var choixControleur;
var quantiteMoteurs;
var selectionCameraUSB;
var choixCameraUSB;
var selectionMatriceLEDS;
var choixMatriceLEDS;

//Demander les sélection des composantes à l'acheteur

selectionControleur = prompt('Veuillez sélectionner votre contrôleur. Entrez "1" pour le RaspBerry Pi ou "2" pour le RaspBerry Pi Zero.');
quantiteMoteurs = Number(prompt("Combien de moteurs désirez-vous? Le minimum requis est 2 et le maximum permis est 24."));
selectionCameraUSB = prompt('Entrez "1" si vous désirez ajouter une caméra USB ou "2" si vous la refusez.');
selectionMatriceLEDS = prompt('Entrez "1" si vous désirer ajouter une matrice de LEDS pour les yeux ou "2" si vous la refusez.');

if(selectionControleur === "1"){
    prixControleur = 55;
    choixControleur = "RaspBerry Pi, ";
}

else if(selectionControleur === "2"){
    prixControleur = 15;
    choixControleur = "RaspBerry Pi Zero, ";
}

else{
    choixControleur = "Sélection du contrôleur invalide. ";
}

if(quantiteMoteurs >= 2 && quantiteMoteurs <= 24){
    prixMoteur = 5 * quantiteMoteurs;
    quantiteMoteurs = quantiteMoteurs + " moteurs, "
}

else{
    prixMoteur = "Quantité de moteurs invalide. ";
    quantiteMoteurs = "Quantité de moteurs invalide. ";
}

if(selectionCameraUSB === "1"){
    prixCameraUSB = 35;
    choixCameraUSB = "avec caméra, ";
}

else if(selectionCameraUSB === "2"){
    prixCameraUSB = 0;
    choixCameraUSB = "pas de caméra, "
}

else{
    choixCameraUSB = "Sélection de caméra USB invalide. ";
}
if(selectionMatriceLEDS === "1"){
    prixMatriceLEDS = 10;
    choixMatriceLEDS = "avec matrice de LEDS. ";
}

else if(selectionMatriceLEDS === "2"){
    prixMatriceLEDS = 0;
    choixMatriceLEDS = "pas de matrice de LEDS. ";
}

else{
    choixMatriceLEDS = "Sélection de matrice de LEDS invalide. ";
}

prixTotal = prixControleur + prixMoteur + prixCameraUSB + prixMatriceLEDS + prixFilament3D + prixBatterieUSB;

prixLivraison = prixTotal * 1.15;

document.write("Résumé de l'achat: ");
document.write("Robot avec " + choixControleur + quantiteMoteurs + choixCameraUSB + choixMatriceLEDS);
document.write("Prix total: " + prixTotal + "$. ");
document.write("Prix avec la livraison (15%): " + prixLivraison + "$.");