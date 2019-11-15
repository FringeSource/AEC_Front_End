//5.  Lire un degré de température. Si la température est comprise entre -40 et -10 écrire « HAAAAAAAAA!
// Il fait froid». Sinon, écrire « Enfin une belle journée! ».

var reponse;

var temperature;

//Demander la température
temperature = Number(prompt("Quelle est la température actuelle en degrés Celsius?"));

if(temperature < -10 && temperature > -40){
    reponse = "HAAAAAAAAA! Il fait froid";
}
else{
    reponse = "Enfin une belle journée!";
}

console.log(reponse);