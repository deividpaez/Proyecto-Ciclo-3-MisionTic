let btn_Help = document.getElementById('appointment'),
btn_Transito = document.getElementById("Transito"),
btn_Bomberos = document.getElementById("Bomberos"),
btn_Medico = document.getElementById("Medico"),
Btn_Ubicacion = document.getElementById("Ubication")
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
 btn_Transito.addEventListener("click", (e)=>{
 
 })
 btn_Bomberos.addEventListener("click", (e)=>{
  alert("LLAMANDO A BOMBEROS")
 })
 btn_Medico.addEventListener("click", (e)=>{
  alert("LLAMANDO UNA AMBULANCIA")
 })

 Ubication.addEventListener("click", (e)=>{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarUbicacion);
  }
  
  function mostrarUbicacion (ubicacion) {
    const lng = ubicacion.coords.longitude;
    const lat = ubicacion.coords.latitude;
    console.log(`longitud: ${ lng } | latitud: ${ lat }`);
  }
 })


