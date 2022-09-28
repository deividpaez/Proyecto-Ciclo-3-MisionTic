let btn_Help = document.getElementById('appointment'),
btn_Transito = document.getElementById("Transito"),
btn_Bomberos = document.getElementById("Bomberos"),
btn_Medico = document.getElementById("Medico"),
Btn_Ubicacion_Trasito = document.getElementById("Ubicacation1"),
Btn_Ubicacion_Bomberos = document.getElementById("Ubicacation2"),
Btn_Ubicacion_Medico = document.getElementById("Ubicacation3")
let nombre;
async function recibir_nombre (name){
nombre = name;
await fetch(`http://localhost:8090/api/saludo?name=${name}`, { method: 'GET' })
 .then(response => response.text())
.then(data =>{
  alert( data)
})
}
btn_Help.addEventListener("click", (e)=>{
  nombre = prompt("Ingrese su nombre")
recibir_nombre(nombre);
})

  Btn_Ubicacion_Medico.addEventListener("click", (e)=>{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarUbicacion);
  }
  
  function mostrarUbicacion (ubicacion) {
    const lng = ubicacion.coords.longitude;
    const lat = ubicacion.coords.latitude;
    console.log(`longitud: ${ lng } | latitud: ${ lat }`);
  }
 })


 Btn_Ubicacion_Trasito.addEventListener("click", (e)=>{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarUbicacion);
  }
  
  function mostrarUbicacion (ubicacion) {
    const lng = ubicacion.coords.longitude;
    const lat = ubicacion.coords.latitude;
    console.log(`longitud: ${ lng } | latitud: ${ lat }`);
  }
 })


 
 Btn_Ubicacion_Bomberos.addEventListener("click", (e)=>{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarUbicacion);
  }
  
  function mostrarUbicacion (ubicacion) {
    const lng = ubicacion.coords.longitude;
    const lat = ubicacion.coords.latitude;
    console.log(`longitud: ${ lng } | latitud: ${ lat }`);
  }
 })


