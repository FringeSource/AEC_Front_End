let tabChance = [];
let nombreUsager = Number(prompt("Veuillez entrer un nombre entre 1 et 200. Nous vous dirons s'il se trouve dans notre tableau."));
let trouver = false;

//Création des 100 nombres aléatoires du tableau (entre 1 et 200)
for(let i = 0; i < 100; i++){
    tabChance[i] = Math.floor(1 + Math.random() * 200);
    console.log(tabChance[i]);
}

//Parcourir le tableau pour savoir si le nombreUsager s'y trouve
for(let j = 0; j < tabChance.length; j++){
    if(tabChance[j] === nombreUsager){
        trouver = true;
    }
}

//Donner la réponse à l'usager
if(trouver){
    document.write("Votre nombre, " + nombreUsager + ", se trouve dans notre tableau!");
}

else{
    document.write("Malheureusement votre nombre, " + nombreUsager + ", ne se trouve pas dans notre tableau.");
}

