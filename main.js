var canvas = document.getElementById('canva');
var ctx = canvas.getContext("2d");

var rh = 100;
var rw = 90;

var rx = 10;
var ry = 10;

var py = 10
var px = 10

var pontos = 0
document.getElementById("mostrarP").innerHTML = pontos



var RoImg = "rover.png";
var pedraImg = "pedra.png";
var BackImg = "chao.jpg";


function add() {
    BackImgTag = new Image();
    BackImgTag.onload = uploadBackground;
    BackImgTag.src = BackImg;

    RImgTag = new Image();
    RImgTag.onload = uploadRover;
    RImgTag.src = RoImg;

    PImgTag = new Image();
    PImgTag.onload = uploadPedra;
    PImgTag.src = pedraImg;
}




function uploadBackground() {
    ctx.drawImage(BackImgTag, 0, 0, canvas.width, canvas.height);

}

function uploadRover() {
    ctx.drawImage(RImgTag, rx, ry, rw, rh);


}
function uploadPedra() {
    ctx.drawImage(PImgTag, px, py, 50, 50);


}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    var tecla = e.keyCode;
    console.log(tecla);



    if ((px - 10 > rx) && (rx < px + 10)) {
        if ((py - 10 > ry) && (ry < py + 10)) {
            pontos = pontos + 1
            document.getElementById("mostrarP").innerHTML = pontos
            px = Math.random() * 800
        py = Math.random() * 500
        }



    }









    if (tecla == '38') {
        up();
    }


    if (tecla == '40') {
        down();
    }



    if (tecla == '37') {
        left();
    }



    if (tecla == '39') {
        right();
    }
}

function up() {
    uploadBackground();
    ry = ry - 10;
    uploadRover();
    uploadPedra();

}


function down() {
    uploadBackground()
    ry = ry + 10;
    uploadRover()
    uploadPedra();

}


function left() {
    uploadBackground();
    rx = rx - 10;
    uploadRover();
    uploadPedra();

}

function right() {
    uploadBackground();
    rx = rx + 10;
    uploadRover();
    uploadPedra();

}

