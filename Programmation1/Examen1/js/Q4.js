// Vous devez compléter un programme qui permet de calculer l’aire de formes.
//     En entrée, l'utilisateur doit entrer la lettre correspondant au type de figure demandé:
// - "O" pour cercle : PI * rayon2
// - "R" pour rectangle : longueur * largeur
// - "T" pour triangle rectangle : (longueur * largeur) / 2
// - "C" pour carré : côté2
// L’utilisateur doit pouvoir entrer son choix en lettres minuscules ou en majuscules.
//     En fonction de la lettre saisie par le client, votre programme doit demander les renseignements nécessaires pour le calcul de l’aire.
//     Une fois les informations saisies par l'utilisateur, votre programme doit afficher le type sélectionné ainsi que le calcul de l'aire.


var typeDeFigure;
var rayon;
var longueur;
var largeur;
var cote;
var aire;

//Demander à l'utilisateur le type de figure
typeDeFigure = prompt("De quel type de figure désirez-vous calculer l'aire? Entrez 'O' pour un cercle, 'R' pour un rectangle, 'T' pour un triangle rectangle ou 'C' pour un carré.");

if(typeDeFigure.toUpperCase() === "O"){
    rayon = Number(prompt("Quel est le rayon de votre cercle?"));
    aire = Math.PI  * Math.pow(rayon, 2);
    document.write("Type de figure sélectionné: cercle. Aire du cercle: PI * " + rayon + "² = " + aire);
}

else if(typeDeFigure.toUpperCase() === "R"){
    longueur = Number(prompt("Quelle est la longueur du rectangle?"));
    largeur = Number(prompt("Quelle est la largeur du rectangle?"));
    aire = longueur * largeur;
    document.write("Type de figure sélectionné: rectangle. Aire du rectangle : " + longueur + " * " + largeur + " = " + aire);
}

else if(typeDeFigure.toUpperCase() === "T"){
    longueur = Number(prompt("Quelle est la longueur du triangle rectangle?"));
    largeur = Number(prompt("Quelle est la largeur du triangle rectangle?"));
    aire = (longueur * largeur) / 2;
    document.write("Type de figure sélectionné: triangle rectangle. Aire du triangle rectangle :(" + longueur + " * " + largeur + ") / 2 = " + aire);
}

else if(typeDeFigure.toUpperCase() === "C"){
    cote = Number(prompt("Quelle est la mesure d'un côté du carré?"));
    aire = Math.pow(cote, 2);
    document.write("Type de figure sélectionné: carré. Aire du carré: " + cote + "² = " + aire);
}

else{
    document.write("Entrée invalide. Veuillez svp sélectionner un des choix (O pour cercle, R pour rectangle, T pour triangle rectangle ou C pour carré). Merci!");
}