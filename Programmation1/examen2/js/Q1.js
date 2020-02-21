let typeJeep = prompt("Quelle version du Jeep Wrangler choisissez-vous? (Sport, Sport S ou Havane)");
let typeJeepTexte;
let terme = Number(prompt("Quel terme avez-vous en tête? (24, 48, 60 ou 84 mois)"));
let couleur = prompt("Quelle couleur désirez-vous?");
let transmission = prompt("Choisissez votre transmission. (Manuelle, automatique ou automatique 8 vitesses)");
let transmissionTexte;
let prixTotal = 0;
let paiementMensuel;
let taxe;


//Type de Jeep
if(typeJeep.toUpperCase() === "SPORT"){
    prixTotal += 33290;
    typeJeepTexte = "Jeep Wrangler Sport, ";
}

else if(typeJeep.toUpperCase() === "SPORT S"){
    prixTotal += 37240;
    typeJeepTexte = "Jeep Wrangler Sport S, ";
}

else if(typeJeep.toUpperCase() === "HAVANE"){
    prixTotal += 39235;
    typeJeepTexte = "Jeep Wrangler édition Havane, ";
}

else{
    typeJeepTexte = "Type de Jeep INVALIDE, ";
}

//Couleur
if(couleur.toUpperCase() === "VERT" || couleur.toUpperCase() === "ROUGE"){
    prixTotal += 1399;
}

//Transmission
if(transmission.toUpperCase() === "AUTOMATIQUE"){
    prixTotal += 1500;
    transmissionTexte = ", transmission automatique, ";
}

else if(transmission.toUpperCase() === "AUTOMATIQUE 8 VITESSES"){
    prixTotal += 2400;
    transmissionTexte = ", transmission automatique 8 vitesses, ";
}

else if(transmission.toUpperCase() === "MANUELLE"){
    transmissionTexte = ", transmission manuelle, ";
}

else{
    transmissionTexte = ", transmission INVALIDE, "
}

//Taxe de 15%
taxe = prixTotal * 0.15;

paiementMensuel = (prixTotal + taxe) / terme;

document.write("Voici un résumé de votre transaction: " + typeJeepTexte + "Couleur: " + couleur + transmissionTexte + " financement sur " + terme + " mois à 0% d'intérêt. <br>");

if(transmissionTexte === ", transmission INVALIDE, " || typeJeepTexte === "Type de Jeep INVALIDE, "){
    document.write("Sélections invalides, impossible de calculer le paiement. Veuillez refaire votre commande svp.");
}

else {
    document.write("Votre paiement mensuel incluant la taxe est de " + paiementMensuel.toFixed(2) + "$/mois.");
}