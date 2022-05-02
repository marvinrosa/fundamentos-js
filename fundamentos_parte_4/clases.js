class Tarea{

    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrar(){
         return `${this.nombre} tiene una urgencia de ${this.prioridad}`;
    }
}

let tarea1 = new Tarea('Aprender Js','Alta');
let tarea2 = new Tarea('Aprender React','Alta');
let tarea3 = new Tarea('Aprender CSS','Media');

console.log(tarea1.mostrar())
console.log(tarea2.mostrar())
console.log(tarea3.mostrar())