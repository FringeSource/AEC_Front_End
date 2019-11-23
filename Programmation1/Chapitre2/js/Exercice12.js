//12.Calculer le prix des assurances pour un véhicule.
//
//
// Pour un garçon entre 16 et 25 ans, le prix des assurances est de 5 % de la valeur du véhicule.
//
//
// S’il est plus vieux, le taux sera de 3 %.
//
// Pour une fille entre 16 et 25 ans, le taux est de 3 % et de 2% pour une fille plus âgée.

var sexe;
var age;
var prime;
var valeur;

//Demander les renseignements
sexe = prompt("Veuillez entrer votre sexe");

age = prompt("Quel âge avez-vous?");

valeur = Number(prompt("Quelle est la valeur du véhicule assuré?"));

if(sexe.toUpperCase() === "M"){
    if(age >= 16 && age <= 25){
        prime = valeur * 0.05;
        document.write("<p>Votre prime est de <div class='masculin'>" + prime + "$.</div></p>");
    }
    else if(age < 16){
        document.write("Désolé, c'est trop jeune pour assurer un véchiule!");
    }
    else{
        prime = valeur * 0.03;
        document.write("<p>Votre prime est de <div class='masculin'>" + prime + "$.</div></p>");
    }
}

else if(sexe.toUpperCase() === "F"){
    if(age >= 16 && age <= 25){
        prime = valeur * 0.03;
        document.write("<p>Votre prime est de <div class='feminin'>" + prime + "$.</div></p>");
    }
    else if(age < 16){
        document.write("Désolé, c'est trop jeune pour assurer un véchiule!");
    }
    else{
        prime = valeur * 0.02;
        document.write("<p>Votre prime est de <div class='feminin'>" + prime + "$.</div></p>");
    }
}
else{
    document.write("Sexe invalide.");
}
