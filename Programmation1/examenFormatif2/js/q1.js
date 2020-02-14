let dommagesDarkestLariat = 0;
let typeDuPokemonAdverse;
let pileOuFace;

//Demander le type du pokémon adverse
typeDuPokemonAdverse = prompt("Quel est le type du pokémon adverse?");

//Faire la boucle pour le pile ou face
for(let i = 0; i < 2; i++){
    pileOuFace = Math.floor(Math.random()*2);
    if(pileOuFace == 1){
        dommagesDarkestLariat += 100;
    }
    else{
        dommagesDarkestLariat += 0;
    }
}

//Appliquer dégâts supplémentaires si l'adversaire est de type eau
if(typeDuPokemonAdverse.toUpperCase() === "EAU"){
    dommagesDarkestLariat = dommagesDarkestLariat * 2;
}

document.write("L'attaque Darkest Lariat de Incineroar fait " + dommagesDarkestLariat + " points de dommages!");

