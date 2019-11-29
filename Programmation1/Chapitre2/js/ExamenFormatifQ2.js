// QUESTION 2 (4 points)
//
// Vous devez calculer le nombre de points de dommages de l’attaque Mad Bull GX de Tauros. L’attaque fait :
//
//     100 points de dommages si l’adversaire a moins de 60 points de vie (hp).
// 150 points de dommages si l’adversaire a entre 60 et 79 hp.
// 200 points de dommages si l’adversaire a entre 80 et 99 hp.
// 250 points si l’adversaire a 100 hp et plus.
//
//     Écrire un algorithme le code qui permet de :
//
//     Calculer et d’afficher les points de dommages de l’attaque Mad Bull GX à partir des points de vie d’un Pokémon
// adversaire.

var pointsDommages;
var pointsVie;

//Demander le nombre de points de vie
pointsVie = Number(prompt("Combien de points de vie a l’adversaire au moment de l’attaque Mad Bull GX de Tauros?"));

if(pointsVie < 60){
    pointsDommages = 100;
}

else if(pointsVie >= 60 && pointsVie < 80){
    pointsDommages = 150;
}

else if(pointsVie >= 80 && pointsVie < 100){
    pointsDommages = 200;
}

else {
    pointsDommages = 250;
}

document.write("L’attaque Mad Bull GX fait " + pointsDommages + " points de dommages!");

