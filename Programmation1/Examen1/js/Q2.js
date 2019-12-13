// Faire le code qui permet de lire au clavier la valeur de la variable âge et afficher tranche d'âge en fonction de l'âge. Pour faire ce choix, utiliser la table suivante :
//     tranche à afficher	                      age
// enfant			           0  <=  age  <= 12
// adolescent		         13  <=  age  <= 17
// adulte			         18  <=  age  <= 54
// senior			         55  et plus
// Si note ne contient aucune de ces valeurs, alors affichez ″Pas encore né.″.

var age;

//Demander l'âge
age = prompt("Quel âge avez=vous?");

if(age >= 0 && age <= 12){
    document.write("Tranche d'âge: enfant!");
}

else if(age >= 13 && age <= 17){
    document.write("Tranche d'âge: adolescent!");
}

else if(age >= 18 && age <= 54){
    document.write("Tranche d'âge: adulte!");
}

else if(age >= 55){
    document.write("Tranche d'âge: senior!");
}

else{
    document.write("Pas encore né.");
}