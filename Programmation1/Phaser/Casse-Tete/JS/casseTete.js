let premierClique = true;
let idImage1;
let idImage2;
let srcImage1;
let srcImage2;

$('.img-fluid').click(function() {
    if(premierClique){
        idImage1 = $(this).attr("id");
        srcImage1 = $(this).attr("src");
        premierClique = false;
    }
    else{
        idImage2 = $(this).attr("id");
        srcImage2 = $(this).attr("src");

        $("#" + idImage1).attr("src", srcImage2);
        $("#" + idImage2).attr("src", srcImage1);
        premierClique = true;
    }
});

function Victoire() {
    let victoire = true;
    for(let i=1; i<9; i++){
        if($("#image" + i).attr("src") === "images/" + i +".jpg"){
            victoire = true;
        }
        else{
            victoire = false;
            break;
        }
    }
}