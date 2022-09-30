let btn_Help = document.getElementById('appointment'),
btn_Transito = document.getElementById("Transito"),
btn_Bomberos = document.getElementById("Bomberos"),
btn_Medico = document.getElementById("Medico"),
Btn_Ubicacion_Trasito = document.getElementById("Ubicacation1"),
Btn_Ubicacion_Bomberos = document.getElementById("Ubicacation2"),
Btn_Ubicacion_Medico = document.getElementById("Ubicacation3"),
Btn_Sub_Transito = document.getElementById("Enviar_Transito"),
btn_Sub_Bomberos = document.getElementById('Enviar_Bomberos'),
btn_Sub_Medico = document.getElementById("Enviar_Medico");


let nombre;
async function recibir_nombre (name){
nombre = name;
await fetch(`http://localhost:8090/api/saludo?name=${name}`, { method: 'GET' })
 .then(response => response.text())
.then(data =>{
  alert( data)
})
}
  //Mostrar ubicacion por geolocation y Asignar valores para el envio de latitud y longitud a los tres input del formulario
function mostrarUbicacion (ubicacion) {
  const lng = ubicacion.coords.longitude;
  const lat = ubicacion.coords.latitude;
  let inputs =document.getElementsByClassName("Longitud_Value")
  console.log(inputs)
 for (let i = 0; i < inputs.length; i++) {
   inputs[i].value = lat + "," + lng
 }
}

async function InsertarDatos(cedula, url){
  console.log(cedula)
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      cedula: cedula
    }),
    headers: {
      'Content-Type': 'application/json'
    }

  })
    .then(response => response.json())
    .then(json => console.log(json))
      
    
}
//Registar Ubicaciones :)
Btn_Ubicacion_Medico.addEventListener("click", (e)=>{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarUbicacion);

  }
  

 })
Btn_Ubicacion_Trasito.addEventListener("click", (e)=>{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarUbicacion);
  }
  

 })
Btn_Ubicacion_Bomberos.addEventListener("click", (e)=>{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarUbicacion);
  }
  
 
 })


 //Comprobar Cedula & Ubicacion

document.body.addEventListener("click", (e)=>{

  switch (e.target){
    case Btn_Sub_Transito:
      const url = "http://localhost:8090/api/transito"
      e.preventDefault();
     if(InsertarDatos(document.getElementById("cedula_Transito").value, url )){
        console.log("Se han insertado los Datos")
     }
     else{
      console.error("No se pudo Ingresar")
     }   
    break;
    case btn_Sub_Bomberos:
      e.preventDefault();
    console.log("Envio de formulario por Bomberos")
    break;
    case btn_Sub_Medico:
      e.preventDefault();
    console.log("Envio de formulario por Medico")
    break;
    }
})