const textoInput = document.getElementById("texto");
const textoOutput = document.getElementById("mensaje");
const textoNoEncontrado = document.getElementById("mensaje-no-encontrado");
const textoEncontrado = document.getElementById("mensaje-encontrado");

function encriptar(){
  cambiarMensaje();
  textoOutput.textContent = textoInput.value
     .replace(/e/gi,"enter")
    .replace(/i/gi,"imes")
    .replace(/a/gi,"ai")
    .replace(/o/gi,"ober")
    .replace(/u/gi,"ufat");
}
function desencriptar(){
  cambiarMensaje();
  textoOutput.textContent = textoInput.value
     .replace(/enter/gi,"e")
    .replace(/imes/gi,"i")
    .replace(/ai/gi,"a")
    .replace(/ober/gi,"o")
    .replace(/ufat/gi,"u");
}
function cambiarMensaje(){
  if(textoEncontrado.classList.contains('no-mostrar')){
    textoEncontrado.classList.remove('no-mostrar');
    textoNoEncontrado.classList.add('no-mostrar');
  }
}
function copiar() {
  navigator.clipboard.writeText(textoOutput.value);
  alert("El texto fue copiado");
}