class Tarea{

    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrar(){
         return `${this.nombre} tiene una urgencia de ${this.prioridad}`;
    }
}

class ComprasPendientes extends Tarea{

    constructor(nombre, prioridad , cantidad){
        super(nombre,prioridad)
        this.cantidad = cantidad;
    }

    mostrar(){
        return `${this.nombre} tiene una urgencia de ${this.prioridad} con la cantidad de ${this.cantidad}`;
   }
}

let compra1 = new ComprasPendientes("Muestra de Ejemplo","Alta",6);
console.log(compra1);