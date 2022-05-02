// funciones en un objeto

const persona = {
    nombre : 'Marvin',
    trabajo : 'Desarrollador Web',
    edad : 28,
    musicaRap : true,
    mostrarInfo : function(){
        console.log(`${this.nombre} es un ${this.trabajo} y su edad es ${this.edad}`)
    },
    mostrarInfoWith(){
        console.log(`${this.nombre} es un ${this.trabajo} y su la música rap es ${this.musicaRap}`)
    }
}

persona.mostrarInfo();
persona.mostrarInfoWith();