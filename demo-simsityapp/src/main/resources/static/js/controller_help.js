let btn_Help = document.getElementById('appointment');

btn_Help.addEventListener("click", (e)=>{
  let namee = prompt("Ingrese su nombre");
  fetch(`http://localhost:8090/api/saludo?name=${namee}`, { method: 'GET' })
  .then(response => response.text())
  .then(data =>{
    console.log(data)
  })
})