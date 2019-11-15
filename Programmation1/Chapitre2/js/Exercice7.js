//7.    Lire un nombre au clavier. Afficher la catégorie (Positif, Négatif ou Zéro à l’écran)

var reponse;

var nombre;

//Demander un nombre
nombre = Number(prompt("Veuillez svp indiquer un nombre:"));

if(nombre > 0){
    reponse = "Positif.";
}
else if(nombre < 0){
    reponse = "Négatif.";
}
else{
    reponse = "Zéro.";
}

console.log("Voici la catégorie de votre nombre: " + reponse);