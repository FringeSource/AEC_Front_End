//5.  Lire un degré de température. Si la température est comprise entre -40 et -10 écrire « HAAAAAAAAA!
// Il fait froid». Sinon, écrire « Enfin une belle journée! ».

var reponse;

var temperature;

//Demander la température
temperature = Number(prompt("Quelle est la température actuelle en degrés Celsius?"));

if(temperature <= -10 && temperature >= -40){
    document.write("HAAAAAAAAA! Il fait froid");
}
else if(temperature < -40){
    document.write("C'est pas humain!");
}
else{
    document.write("Enfin une belle journée!");
}

console.log(reponse);