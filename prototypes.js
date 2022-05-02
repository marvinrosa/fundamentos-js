//Prototypes

// object literal
const persona = {
    nombre:'Marvin',
    profesion:'Desarrollador Web',
    sueldo: 500
}

// object constructor
function Tarea( nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
 }
 

//implementando prototypes
Tarea.prototype.mostrarInformacionTareaP = function (){
    return `La tarea de ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}

  // crea una nueva tarea
  const tarea1 = new Tarea('Aprender Js y React','Urgente');

  console.log(tarea1.mostrarInformacionTareaP())
 const mostrarInfo = mostrarInformacionTareaP();
 console.log(mostrarInfo);

 // para evitar poner objetos constructores de diferente tipo en uno de un solo tipo se hacen uso de 
 // los prototipos(Prototy)


 //const mostrarCliente = mostrarInformacionTareaP(persona.nombre,persona.profesion)
//console.log(mostrarCliente);

// forma correcta de validar 