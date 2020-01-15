//14.Lire une série de nombres fournis par l’usager (l’usager transmet le nombre 0 pour terminer). Afficher la somme
// des nombres positifs ainsi que la somme des nombres négatifs.

var nbPositifs = 0;
var nbNegatifs = 0;
var nb = 1;

while(nb != 0){
    nb = Number(prompt("Veuillez entrer une série de nombres de votre choix. Entrez 0 quand vous aurez terminé."));
    if(nb > 0){
        nbPositifs = nbPositifs + nb;
    }
    else{
        nbNegatifs = nbNegatifs + nb;
    }
}

document.write("La somme des nombres positifs est: " + nbPositifs + "<br>");
document.write("La somme des nombres négatifs est: " + nbNegatifs);


