//6.   Lire une note au clavier et afficher la lettre correspondante.
// 90 et plus : A
// Entre 80 et 90 : B
// Entre 70 et 80 : C
// Entre 60 et 70 : D
// Moins de 60 : E

//* Codez l’exercice #6 2 fois, une fois en débutant le IF par la cote A et une fois par la cote E
// (en sens inverse).

var reponse;

var note;

//Demander la note
note = Number(prompt("Quelle est votre note sur 100?"));

if(note < 60){
    reponse = "E";
}
else if(note >= 60 && note < 70){
    reponse = "D";
}
else if(note >= 70 && note < 80){
    reponse = "C";
}
else if(note >= 80 && note < 90){
    reponse = "B";
}
else{
    reponse = "A";
}

console.log("Votre note est donc " + reponse);