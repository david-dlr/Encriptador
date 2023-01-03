

function encriptar(){
  var texto = document.getElementById("msj").value.toLowerCase();
  var textoCifrado = texto.replace(/e/igm,"enter");
  var textoCifrado = textoCifrado.replace(/o/igm,"ober");
  var textoCifrado = textoCifrado.replace(/i/igm,"imes");
  var textoCifrado = textoCifrado.replace(/a/igm,"ai");
  var textoCifrado = textoCifrado.replace(/u/igm,"urat");
  document.getElementById("roboto").style.display = "none";
  document.getElementById("copiar").style.display = "show";
  document.getElementById("result").innerHTML = textoCifrado;
  document.getElementById("msj").innerHTML = "";
  document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
  var texto = document.getElementById("msj").value.toLowerCase();
  var textoCifrado = texto.replace(/enter/igm,"e");
  var textoCifrado = textoCifrado.replace(/ober/igm,"o");
  var textoCifrado = textoCifrado.replace(/imes/igm,"i");
  var textoCifrado = textoCifrado.replace(/ai/igm,"a");
  var textoCifrado = textoCifrado.replace(/urat/igm,"u");
  document.getElementById("roboto").style.display = "none";
  document.getElementById("copiar").style.display = "show";
  document.getElementById("result").innerHTML = textoCifrado;
  document.getElementById("msj").innerHTML = "";
  document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
var contenido = document.querySelector("#result")
contenido.select();
document.execCommand("copy")
}
