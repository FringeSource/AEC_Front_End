// Vous devez compléter un programme qui permet de calculer une facture pour l’achat d’une grande Pizza.
//     Le prix de base de la Pizza au fromage est de 10$.
//     Si on veut des légumes, il faut ajouter 5$ au prix initial.
//     Si on veut du pepperoni, il faut ajouter 8$ au prix initial.
//     Si on veut de la sauce, il faut ajouter 1$ par personnes.
//     Le TPS s’élève à 5% du prix sans les taxes.
//     Le TVQ s’élève à 9,975% du prix sans les taxes.
//     Produisez une facture qui résume l’achat, le prix avant et après les taxes.

var prixDeBase = 10;
var TPS;
var TVQ;
var nombreDePersonnes;
var nombreDePersonnesTexte;
var choixLegumes;
var choixLegumesTexte;
var choixPepperoni;
var choixPepperoniTexte;
var choixSauce;
var choixSauceTexte;

//Prendre les informations de la commande
nombreDePersonnes = Number(prompt("Bonjour! Combien de gens dégusteront cette pizza?"));
choixLegumes = prompt("Légumes oui ou non?");
choixPepperoni = prompt("Pepperoni oui ou non?");
choixSauce = prompt("Sauce oui ou non?");

if(nombreDePersonnes >= 0) {
    nombreDePersonnesTexte = "pour " + nombreDePersonnes + " personne(s)! ";

    if (choixLegumes.toUpperCase() === "OUI"){
        prixDeBase+= 5;
        choixLegumesTexte = "Grande Pizza avec légumes, ";
    }

    else {
        choixLegumesTexte = "Grande Pizza sans légumes, ";
    }

    if (choixPepperoni.toUpperCase() === "OUI"){
        prixDeBase+= 8;
        choixPepperoniTexte = "avec pepperoni ";
    }

    else {
        choixPepperoniTexte = "sans pepperoni ";
    }

    if (choixSauce.toUpperCase() === "OUI"){
        prixDeBase+= nombreDePersonnes;
        choixSauceTexte = "et avec sauce ";
    }

    else {
        choixSauceTexte = "et sans sauce ";
    }

    TPS = prixDeBase * 0.05;
    TVQ = prixDeBase * 0.09975;

    document.write("Votre commande en bref: ");
    document.write(choixLegumesTexte + choixPepperoniTexte + choixSauceTexte + nombreDePersonnesTexte);
    document.write("Prix avant taxe: " + prixDeBase + "$. ");
    document.write("Prix total: " + (prixDeBase + TPS + TVQ) + "$.");

}

else{
    document.write("Commande invalide. Le nombre de personnes doit être de 0 ou plus.");
}