//22.Créez un programme permettant de changer la couleur du texte de la console.
// Offrez trois choix de couleurs de fond et de texte à l'utilisateur
// Affichez une ligne de texte de la couleur de fond et de texte choisis par l'utilisateur

var texte;
var fond;

//Demander les choix de couleurs
texte = prompt("Veuillez sélectionner un choix de couleur de texte. Entrez 1 pour orange, 2 pour jaune ou 3 pour rose:");
fond = prompt("Veuillez sélectionner un choix de couleur de fond. Entrez 1 pour vert, 2 pour bleu ou 3 pour mauve:");

if(texte === "1" && fond === "1"){
    document.write("<p class='texteOrange22 fondVert22'>Voici le résultat de vos choix de couleurs!</p>");
}

else if(texte === "1" && fond === "2"){
    document.write("<p class='texteOrange22 fondBleu22'>Voici le résultat de vos choix de couleurs!</p>");
}

else if(texte === "1" && fond === "3"){
    document.write("<p class='texteOrange22 fondMauve22'>Voici le résultat de vos choix de couleurs!</p>");
}

else if(texte === "2" && fond === "1"){
    document.write("<p class='texteJaune22 fondVert22'>Voici le résultat de vos choix de couleurs!</p>");
}

else if(texte === "2" && fond === "2"){
    document.write("<p class='texteJaune22 fondBleu22'>Voici le résultat de vos choix de couleurs!</p>");
}

else if(texte === "2" && fond === "3"){
    document.write("<p class='texteJaune22 fondMauve22'>Voici le résultat de vos choix de couleurs!</p>");
}

else if(texte === "3" && fond === "1"){
    document.write("<p class='texteRose22 fondVert22'>Voici le résultat de vos choix de couleurs!</p>");
}

else if(texte === "3" && fond === "2"){
    document.write("<p class='texteRose22 fondBleu22'>Voici le résultat de vos choix de couleurs!</p>");
}

else if(texte === "3" && fond === "3"){
    document.write("<p class='texteRose22 fondMauve22'>Voici le résultat de vos choix de couleurs!</p>");
}

else{
    document.write("Erreur. Sélections invalides.");
}