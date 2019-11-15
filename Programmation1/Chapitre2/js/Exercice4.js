//4.  Lire deux nombres. Vous devez diviser le premier nombre par le deuxième seulement si le deuxième nombre est
// différent de zéro. Par contre si ce nombre est zéro inscrivez le message suivant :‘Division par zéro interdite.’,
// si ce nombre n’est pas zéro vous devez imprimer le résultat.

var reponse;

var nombre1;
var nombre2;

//Demander les deux nombres
nombre1 = Number(prompt("Veuillez entrer le premier nombre de la division (dividende):"));
nombre2 = Number(prompt("Veuillez entrer le deuxième nombre de la division (diviseur):"));

if(nombre2 > 0){
    reponse = nombre1 / nombre2;
}

else{
    reponse = "Division par zéro interdite."
}

console.log(reponse);