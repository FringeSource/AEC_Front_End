// Le prix saisonnier d’un billet pour la ronde est de 50$. Toutefois, il y a des possibilités de rabais pour des inscriptions en groupe :
//     Aucun rabais pour moins de 10 personnes.
// 10 personnes et plus, 5% de rabais.
// 20 personnes et plus, 10% de rabais.
// 30 personnes et plus, 15% de rabais.
// 40 personnes et plus, 20% de rabais.

var nombreDePersonnes;
var prixTotal;

//Demander au client le nombre de personnes
nombreDePersonnes = Number(prompt("Combien de personnes y aura-t-il dans votre inscription?"));

if(nombreDePersonnes > 0 && nombreDePersonnes < 10){
    prixTotal = nombreDePersonnes * 50;
}

else if(nombreDePersonnes >= 10 && nombreDePersonnes < 20){
    prixTotal = (nombreDePersonnes * 50) * 0.95;
}

else if(nombreDePersonnes >= 20 && nombreDePersonnes < 30){
    prixTotal = (nombreDePersonnes * 50) * 0.90;
}

else if(nombreDePersonnes >= 30 && nombreDePersonnes < 40){
    prixTotal = (nombreDePersonnes * 50) * 0.85;
}

else if(nombreDePersonnes >= 40){
    prixTotal = (nombreDePersonnes * 50) * 0.80;
}

else{
    prixTotal = "Nombre de personnes invalide.";
}

document.write("Montant de l'inscription: " + prixTotal + "$.");