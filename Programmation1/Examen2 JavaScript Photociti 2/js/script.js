/**
 * Created by Cédric Vigneau on 2020-03-26.
 */

let motValide = false;

function ContientLettresSeulement(str) {
    return (/^[A-Za-z*=]+$/.test(str));
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

    str = str.toUpperCase();

    for (let pattern in map) {
        str = str.replace(new RegExp(map[pattern], 'g'), pattern);
    }

    return str;
}

$('#boutonGo').click(function() {
    let motChoisi = slugify($('#motChoisi').val());

    if (motChoisi.length < 3 || motChoisi.length > 12){
        alert("Votre mot doit contenir minimum 3 lettres et maximum 12 lettres.");
        motValide = false;
        return false;
    }

    if (ContientLettresSeulement(motChoisi)){
        $('.lettre').remove();
        for(let i = 0; i < motChoisi.length; i++){
            $('.rowBg').append('<div class="col px-2 lettre"><img src="Letters/'+ motChoisi[i] +'/' + motChoisi[i] + '1.jpg" class="img-fluid" id="L' + i +'"></div>')
            if(motChoisi[i] === "*"){
               $('#L' + i) .replaceWith('<img src="Letters/CS/CS1.jpg" class="img-fluid" id="L' + i +'">')
            }
        }
        motValide = true;
    }

    else{
        alert("Votre mot ne doit contenir que des lettres de l'alphabet ou le symbole * pour voir les caractères spéciaux.");
        motValide = false;
    }
    return false;
});

$('#fondBlanc').click(function() {
    $('.rowBg').css('background-image', 'url("background/blanc.jpg")');
});

$('#fondBleu').click(function() {
    $('.rowBg').css('background-image', 'url("background/bleu.jpg")');
});

$('#fondBleuFonce').click(function() {
    $('.rowBg').css('background-image', 'url("background/bleuFonce.jpg")');
});

$('#fondGris').click(function() {
    $('.rowBg').css('background-image', 'url("background/gris.jpg")');
});

$('#fondNoir').click(function() {
    $('.rowBg').css('background-image', 'url("background/noir.jpg")');
});

$('#fondRose').click(function() {
    $('.rowBg').css('background-image', 'url("background/rose.jpg")');
});

$('#fondRouge').click(function() {
    $('.rowBg').css('background-image', 'url("background/rouge.jpg")');
});

$(document).on('click', '.img-fluid', function() {
    $('#carousel').modal('toggle');
    if()
});

$('#carousel').on('slide.bs.carousel', function (e) {

    let $e = $(e.relatedTarget);
    let idx = $e.index();
    let itemsPerSlide = 3;
    let totalItems = $('.carousel-item').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        let it = itemsPerSlide - (totalItems - idx);
        for (let i=0; i<it; i++) {
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});