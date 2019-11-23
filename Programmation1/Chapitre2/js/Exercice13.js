//13. Lire 2 nombres A et B différents. Trouver et afficher le plus petit et le plus grand.
// Si les deux nombres sont identiques, affichez un message d'erreur à l'utilisateur.

var nombreA;
var nombreB;

//Demander les nombres

nombreA = Number(prompt("Entrez un premier nombre:"));
nombreB = Number(prompt("Entrez un second nombre qui est différent du premier:"));

if(nombreA === nombreB){
    document.write("Erreur. Les nombres sont identiques,");
}

else if(nombreA > nombreB){
    document.write(" Le plus petit est " + nombreB + " et le plus grand est " + nombreA + ".");
}
else{
    document.write(" Le plus petit nombre est " + nombreA + " et le plus grand nombre est " + nombreB + ".");
}