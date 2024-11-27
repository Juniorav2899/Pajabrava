// Este codigo recibe nombre y edad para saber si votas o no

var nombre;
var edad = 20;

var nombre = prompt("Ingresa tu nombre");
var edad = prompt("ingresa tu edad");

document.write("Tu nombre es : " +nombre);
document.write("<br>");
document.write("Tu edad es : " + edad);

if (edad >= 35) {

    document.write("Puedes votar " +nombre, " Y puedes ocupar un puesto en el gobierno");    

} else if (edad >= 30) {
    document.write("Puedes votar y postularte para senador" + nombre, " ya que tienes la edad de : " +edad);

} else if (edad >= 18) {
    
    document.write("Puedes votar " + nombre);
    
} else {

    document.write("No tienes voz en el gobierno aun " + nombre);

}