const aplicacion = document.querySelector('.container')

const url = 'https://random-data-api.com/api/v2/users'

fetch(url)
.then(res => res.json())
.then(data => {
    
document.getElementById('Nombre').onclick = function() {
    document.getElementById('Nombre').innerHTML= "Nombre: " +data.first_name; 
}
document.getElementById('Apellido').onclick = function() {
    document.getElementById('Apellido').innerHTML= "Apellido: " +data.last_name; 
}
document.getElementById('Nacimiento').onclick = function() {
    document.getElementById('Nacimiento').innerHTML= "Fecha de nacimiento: " +data.date_of_birth; 
}
document.getElementById('Genero').onclick = function() {
    document.getElementById('Genero').innerHTML= "Genero: " +data.gender; 
}
document.getElementById('Pais').onclick = function() {
    document.getElementById('Pais').innerHTML= "Pais: " +data.address.country; 
}
document.getElementById('Estado').onclick = function() {
    document.getElementById('Estado').innerHTML= "Estado: " +data.address.state; 
}
document.getElementById('Domicilio').onclick = function() {
    document.getElementById('Domicilio').innerHTML= "Domicilio: " +data.address.street_name; 
}
document.getElementById('Telefono').onclick = function() {
    document.getElementById('Telefono').innerHTML= "Telefono: " +data.social_insurance_number; 
}
document.getElementById('Email').onclick = function() {
    document.getElementById('Email').innerHTML= "Email: " +data.email; 
}
document.getElementById('cargo').onclick = function() {
    document.getElementById('cargo').innerHTML= "cargo: " +data.employment.title; 
}
})

const habilidades ='{"Habilidades_sociales":"Capacidad de escuchar", "Habilidades_tecnicas": "Herramientas informaticas", "Habilidades_politicas": "Pensamiento critico"}';
        const obj = JSON.parse(habilidades);
        document.getElementById("Habilidad1").innerHTML =
        " Habilidades sociales: " +obj.Habilidades_sociales;
        document.getElementById("Habilidad2").innerHTML =
        "Habilidades tecnicas: " +obj.Habilidades_tecnicas;
        document.getElementById("Habilidad3").innerHTML =
        "Habilidades politicas: "+obj.Habilidades_politicas; 