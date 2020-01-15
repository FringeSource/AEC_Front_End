//9Créez un tableau de 10 cellules qui contient une chaîne de caractères à deux valeurs (Pile ou Face).
// Vous décidez manuellement des valeurs qui seront dans le tableau (ce n’est pas random) et affichez ces valeurs
// à l’aide d’une boucle Pour.

var tableau = [];

tableau[0] = "Face";
tableau[1] = "Face";
tableau[2] = "Pile";
tableau[3] = "Face";
tableau[4] = "Face";
tableau[5] = "Pile";
tableau[6] = "Face";
tableau[7] = "Face";
tableau[8] = "Pile";
tableau[9] = "Pile";

for(var i = 0; i < tableau.length; i++){
    document.write(tableau[i] + "<br>");
}