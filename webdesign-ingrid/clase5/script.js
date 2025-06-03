
titulo = document.getElementById("titulo");
bMas = document.getElementById("aumentar");
bMenos = document.getElementById("disminuir");
size = 15;
titulo.style.fontSize = size + "pt";

function aumentar(){
    size = size + 1;
    if(size <= 30){
        titulo.style.fontSize = size + "pt";
    } else {
        size = 30;
    }
}

function disminuir(){
    size = size - 1;
    titulo.style.fontSize = size + "pt";
}

function cambiarColorFondo(color) {
    document.body.style.backgroundColor = color;
}

bMas.addEventListener("click", aumentar);
bMenos.addEventListener("click", disminuir);