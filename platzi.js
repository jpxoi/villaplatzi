var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var xc = 1*60
var yc = xc

var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var cantidad = aleatorio(2,8);

var fondo = {
    url: "tile.webp",
    cargaOk: false
};

var vaca = {
    url: "vaca.webp",
    cargaOk: false
};

var cerdo = {
    url: "cerdo.webp",
    cargaOk: false
};

var pollo = {
    url: "pollo.webp",
    cargaOk: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

document.addEventListener("keydown",dibujar);

function cargarFondo()
{
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOk = true;
}

function cargarCerdos()
{
    cerdo.cargaOk = true;
}

function cargarPollos()
{
    pollo.cargaOk = true;
}


function dibujar(evento)
{
    if(fondo.cargaOk)
    {
        papel.drawImage(fondo.imagen,0,0);
    }

    if(vaca.cargaOk)
    {
        for(var v = 0; v < cantidad; v++)
        {
            var x = aleatorio(0,7);
            var y = aleatorio(0,7);
            x = x * 60
            y = y * 60
            papel.drawImage(vaca.imagen,x,y);
        }
    }

    if(cerdo.cargaOk)
    {
        var movimiento = 60;
        switch(evento.keyCode)
        {
            case teclas.UP:
                papel.drawImage(cerdo.imagen,xc,yc - movimiento);
                yc = yc - movimiento;
            break;
    
            case teclas.DOWN:
                papel.drawImage(cerdo.imagen,xc,yc + movimiento);
                yc = yc + movimiento;
            break;
    
            case teclas.LEFT:
                papel.drawImage(cerdo.imagen,xc - movimiento,yc);
                xc = xc - movimiento;
            break;
    
            case teclas.RIGHT:
                papel.drawImage(cerdo.imagen,xc + movimiento,yc);
                xc = xc + movimiento;
            break;
    
            default:
                console.log("Otra tecla")
        }
    }

    if(pollo.cargaOk)
    {
        for(var p = 0; p < cantidad; p++)
        {
            var x = aleatorio(0,7);
            var y = aleatorio(0,7);
            x = x * 60
            y = y * 60
            papel.drawImage(pollo.imagen,x,y);
        }
    }
}


function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}