//15. Calculer et afficher la surface d'un rectangle pour seulement ceux ayant un périmètre d'au moins 100.

var largeur;
var longueur;
var perimetre;
var surface;

//Demander les mesures du rectangle
largeur = Number(prompt("Veuillez entrer la largeur du rectangle:"));
longueur = Number(prompt("Veuillez entrer la longueur du rectangle:"));

//Calculs
perimetre = 2 * (largeur+longueur);
surface = largeur * longueur;

if(perimetre < 100){
    document.write("Malheureusement nous ne calculons pas la surface des rectangles ayant un périmètre plus petit que 100!");
}

else{
    document.write("La surface de votre rectangle est " + surface + ".");
}