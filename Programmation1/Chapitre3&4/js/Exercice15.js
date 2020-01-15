//15.Lire une série de nombres fournis par l’usager (l’usager transmet le nombre 0 pour terminer).
// Afficher combien de nombres positifs ont été entrés ainsi que combien de nombres négatifs ont été entrés.

var nbPositifs = -1;
var nbNegatifs = 0;
var nb = 1;

while(nb != 0){
    nb = Number(prompt("Veuillez entrer une série de nombres de votre choix. Entrez 0 quand vous aurez terminé."));
    if(nb >= 0){
        nbPositifs++;
    }
    else{
        nbNegatifs++;
    }
}

document.write("La quantité de nombres positifs est: " + nbPositifs + "<br>");
document.write("La quantité de nombres négatifs est: " + nbNegatifs);

