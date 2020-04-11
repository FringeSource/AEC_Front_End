/**
 * Created by Cedric Vigneau on 2020-02-27.
 */

let positionFlash = 100;
let FlashVisible = true;
let nbFlash = 1;

$( "#boutonDroite" ).click(function() {
    if(positionFlash <= 1450) {
        $('#div2').animate({'left': "+=200px"}, "slow");
        positionFlash += 200;
    }
});

$( "#boutonGauche" ).click(function() {
    if(positionFlash >= 300) {
        $('#div2').animate({'left': "-=200px"}, "slow");
        positionFlash -= 200;
    }
});

let img = $("#flashID");
$( "#boutonChangerImage" ).click(function() {
    if(img.attr("src") === "img/Flash1.png") {
        $('#flashID').attr("src", "img/Flash2.png");
    }
    else if(img.attr("src") === "img/Flash2.png") {
        $('#flashID').attr("src", "img/Flash1.png");
    }
});

$( "#boutonEnleverImage" ).click(function() {
    $('#flashID').hide();
});

$( "#boutonAjouterImage" ).click(function() {
    $('#flashID').show();
});

$( "#boutonAjouterAttribut" ).click(function() {
    $('#flashID').attr('alt',"photo de Flash");
});

$( "#boutonAjouterTitre" ).click(function() {
    $("body").prepend("<h1>Justice League</h1>");
});

$("#boutonNuke").click(function() {
    $('div').hide();
    $('#div1').show();
    $('.centralCity').css("background-image", "url('img/ISIS-Nuke.jpg')");
});

$("#boutonVitesseSupreme").click(function() {
    img = setInterval(function () {
        $('#flashID').toggle()}, 500);
});

$("#boutonFinVitesseSupreme").click(function() {
    clearInterval(img);
})

$("#boutonDupliquer").click(function() {
    nbFlash++;
    if(img.attr("src") === "img/Flash1.png") {
        $('#flashID').after('<img id="flashID'+nbFlash+'" src="img/Flash1.png" width="200px" position="relative"/>');
    }
    else if(img.attr("src") === "img/Flash2.png") {
        $('#flashID').after('<img id="flashID'+nbFlash+'" src="img/Flash2.png" width="200px" position="relative"/>');
    }
});

$("#boutonRalentir").click(function() {
    $('#flashID'+nbFlash).remove();
    nbFlash--;
})




//Vitesse supreme : https://www.w3schools.com/jsref/met_win_setinterval.asp //