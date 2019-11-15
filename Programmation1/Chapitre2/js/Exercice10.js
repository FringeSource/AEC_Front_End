//10.    Lire un nombre entier au clavier et afficher le nom du mois correspondant. Si le nombre saisi ne correspond
// pas à un mois, affichez le message suivant : « Mois invalide ».

var mois;

var nombre;

//Demander un nombre entier
nombre = Number(prompt("Veuillez svp entrer un nombre entier:"));

if(nombre === 1){
    mois = "Janvier";
}
else if(nombre === 2){
    mois = "Février";
}
else if(nombre === 3){
    mois = "Mars";
}
else if(nombre === 4){
    mois = "Avril";
}
else if(nombre === 5){
    mois = "Mai";
}
else if(nombre === 6){
    mois = "Juin";
}
else if(nombre === 7){
    mois = "Juillet";
}
else if(nombre === 8){
    mois = "Août";
}
else if(nombre === 9){
    mois = "Septembre";
}
else if(nombre === 10){
    mois = "Octobre";
}
else if(nombre === 11){
    mois = "Novembre";
}
else if(nombre === 12){
    mois = "Décembre";
}
else{
    mois = "Mois invalide.";
}

console.log(mois);