/**
 * Created by Cédric Vigneau on 2020-03-26.
 */

let motValide = false;

$('#L6').hide();
$('#L7').hide();
$('#L8').hide();
$('#L9').hide();
$('#L10').hide();
$('#L11').hide();
$('#L12').hide();

function ContientLettresSeulement(str) {
    return (/^[A-Za-z*]+$/.test(str));
}

function slugify (str) {
    let map = {
        'a' : 'á|à|ã|â|À|Á|Ã|Â',
        'e' : 'é|è|ê|ë|É|È|Ê|Ë',
        'i' : 'í|ì|î|Í|Ì|Î',
        'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
        'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
        'c' : 'ç|Ç',
    };

    str = str.toLowerCase();

    for (let pattern in map) {
        str = str.replace(new RegExp(map[pattern], 'g'), pattern);
    }

    return str;
}

$('#boutonGo').click(function() {
    let motChoisi = slugify($('#motChoisi').val());
    let lettre = [];

    for(let i = 0; i < 12; i++){
        lettre[i] = motChoisi[i];
    }

    if (motChoisi.length < 3 || motChoisi.length > 12){
        motValide = false;
        alert("Votre mot doit contenir minimum 3 lettres et maximum 12 lettres.");
    }

    if (ContientLettresSeulement(motChoisi)){
        motValide = true;
    }
    else{
        alert("Votre mot ne doit contenir que des lettres de l'alphabet ou le symbole * pour voir les caractères spéciaux.");
        motValide = false;
    }
});

