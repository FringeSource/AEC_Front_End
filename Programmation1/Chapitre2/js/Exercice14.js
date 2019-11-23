//14. Lire 3 nombres A, B et C différents. Trouver et afficher le plus petit et le plus grand.

var nombreA;
var nombreB;
var nombreC;

//Demander les nombres
nombreA = Number(prompt("Entrez un premier nombre:"));
nombreB = Number(prompt("Entrez un second nombre qui est différent du premier:"));
nombreC = Number(prompt("Entrez un troisième nombre qui est différent des 2 premiers:"));

if(nombreA === nombreB || nombreB === nombreC || nombreC === nombreA){
    document.write("Erreur. Tous les nombres doivent être différents.");
}

else if(nombreA > nombreB && nombreA > nombreC){
    if(nombreB > nombreC){
        document.write(" Le plus petit nombre est " + nombreC + " et le plus grand est " + nombreA + ".");
    }
    else{
        document.write(" Le plus petit nombre est " + nombreB + " et le plus grand est " + nombreA + ".");
    }
}

else if(nombreB > nombreA && nombreB > nombreC){
    if(nombreA > nombreC){
        document.write(" Le plus petit nombre est " + nombreC + " et le plus grand est " + nombreB + ".");
    }
    else{
        document.write(" Le plus petit nombre est " + nombreA + " et le plus grand est " + nombreB + ".");
    }
}

else if(nombreC > nombreA && nombreC > nombreB){
    if(nombreA > nombreB){
        document.write(" Le plus petit nombre est " + nombreB + " et le plus grand est " + nombreC + ".");
    }
    else{
        document.write(" Le plus petit nombre est " + nombreA + " et le plus grand est " + nombreC + ".");
    }
}