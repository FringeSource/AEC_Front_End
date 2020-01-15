//17. Lire le code de sexe d’un individu (M ou F) et afficher le sexe de l’individu par le mot correspondant
// (Masculin ou Féminin). Traiter plusieurs codes de sexe jusqu’à temps que ce code soit autre chose que M ou F.
// De plus afficher le nombre de M qui ont été entrés ainsi que le nombre de F qui ont été entrés.

var sexe = "m";
var nbDeM = 0;
var nbDeF = 0;

while(sexe.toUpperCase() === "M" || sexe.toUpperCase() === "F" ){
    sexe = prompt("Quel est votre sexe? Entrez m ou f.");
    if(sexe.toUpperCase() === "M"){
        nbDeM++;
        document.write("Sexe masculin.<br>");
    }
    else if(sexe.toUpperCase() === "F"){
        nbDeF++;
        document.write("Sexe féminin.<br>");
    }
    else{
        document.write("Sexe invalide.<br>");
    }
}

document.write("Nombre de fois que 'm' a été entré: " + nbDeM + "<br>");
document.write("Nombre de fois que 'f' a été entré: " + nbDeF);