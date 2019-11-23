//16. Lire 2 nombres au clavier.
//         Si ces 2 nombres sont :
//             supérieurs ou égaux à 10, affichez leur somme
//             inférieurs à 10, affichez leur produit
//         Si l'un des deux nombres est supérieur ou égal à 10 et l'autre inférieur à 10, affichez la différence
//         entre les deux nombres.

var nombreA;
var nombreB;
var somme;
var produit;
var différence;

//Demander les nombres
nombreA = Number(prompt("Veuillez entrer un premier nombre:"));
nombreB = Number(prompt("Veuillez entrer un second nombre:"));

if(nombreA >= 10 && nombreB >= 10){
    somme = nombreA + nombreB;
    document.write("La somme des nombres est " + somme + ".");
}

else if(nombreA < 10 && nombreB < 10){
    produit = nombreA * nombreB;
    document.write("Le produit des nombres est " + produit + ".");
}

else if(nombreA >= 10 && nombreB < 10){
    différence = nombreA - nombreB;
    document.write("La différence des nombres est " + différence + ".");
}

else{
    différence = nombreB - nombreA;
    document.write("La différence des nombres est " + différence + ".");
}
