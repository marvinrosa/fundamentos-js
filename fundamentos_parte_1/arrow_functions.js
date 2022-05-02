//Arrow functions

let viajando = function (destino) {
    return `Viajando a la ciudad de: ${destino}`;
}

let viaje;
viaje = viajando('Paris');
viaje = viajando('Italia');
console.log(viaje);

// Usando arrow functions con parametros y retorno de valor

let viajando_dos_param = (destino, duracion='9:00') => {
    return `Viajando al siguiente destino de ${destino} con una duración de ${duracion} horas`;
}

let viajando_un_param = destino => {
    return `Viajando al siguiente destino de ${destino}`;
}
console.log(viajando_dos_param('Aruba'));
console.log(viajando_un_param('Madrid'));