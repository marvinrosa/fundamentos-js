// Object constructor

// object literal, este es mas usado
const persona = {
    nombre:'Marvin',
    profesion:'Desarrollador Web'
}

// object constructor, esta forma es o ha sido reemplazado por las clases
function Tarea( nombre, urgencia){
   this.nombre = nombre;
   this.urgencia = urgencia;
}

const tarea1 = new Tarea('Aprender Js y React','Urgente');
const tarea2 = new Tarea('Pasear al perro','Leve');
const tarea3 = new Tarea('Ver tutoriales','Medio');

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);