//trayendo los elementos que utilizamos

var contenedor = document.getElementsByClassName('contenedor')[0];
var rosa = document.getElementById("rosa");
var azul = document.getElementById('azul');
var ver =  document.getElementById('verde');
var amarillo = document.getElementById('amarillo');

//definir propiedades a la caja contenedora desde js
contenedor.style.position = "relative";
contenedor.style.background = "DarkGrey";
contenedor.style.width = "600px";
contenedor.style.padding = "50px";

/*Luego le damos propiedades al CSS de la caja azul que es la que
queremos posicionar*/
azul.style.position = "absolute";
azul.style.top = "250px";
azul.style.right = "0";