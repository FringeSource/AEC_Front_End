let tabNombres = [];
let tabLettres = [];
let nbDeE = 0;
let nbDeVoyelles = 0;
let indiceDAD;
let nbDeDAD = 0;

for(let i = 0; i < 10000; i++){
    tabNombres.push(Math.floor(Math.random() * 26) + 65);
}

for(let j = 0; j < tabNombres.length; j++){
    tabLettres[j] = String.fromCharCode(tabNombres[j]);
    if(tabLettres[j] === "E"){
        nbDeE += 1;
    }

    if(tabLettres[j] === "A" || tabLettres[j] === "E" || tabLettres[j] === "I" || tabLettres[j] === "O" || tabLettres[j] === "U" || tabLettres[j] === "Y"){
        nbDeVoyelles += 1;
    }
}

for (let k = 0; k < tabLettres.length; k++) {
    if(tabLettres[k] === "D" && tabLettres[k + 1] === "A" && tabLettres[k + 2] === "D"){
        nbDeDAD += 1;
        if(nbDeDAD === 1){
            indiceDAD = k;
        }
    }
}


document.write("Il y a " + nbDeE + " lettres E <br>");
document.write("Il y a " + nbDeVoyelles + " voyelles <br>");

if(nbDeDAD !== 0){
    document.write("Le mot DAD se trouve dans le tableau et débute à l'indice " + indiceDAD);
}
else if(nbDeDAD === 0){
    document.write("Le mot DAD ne se trouve pas dans le tableau.");
}