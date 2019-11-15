//1.  Lire deux nombres et afficher le plus grand des deux.

var reponse;

var nombre1;
var nombre2;

//Demander les 2 nombres
nombre1 = Number(prompt("Veuillez entrer le premier nombre."));
nombre2 = Number(prompt("Veuillez entrer le deuxième nombre."));

if(nombre1 < nombre2){
    reponse = nombre2;
}
else{
    reponse = nombre1;
}

console.log("Le plus grand des deux nombres est " + reponse + ".");