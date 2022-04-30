
// Scope haciendo uso de var
//  var musica = 'Pop';

//  if(musica){
//      var musica = 'Salsa';
//      console.log('dentro del if ' + musica);  // Salsa
//  }

//  console.log('Fuera del if ', musica);  // Salsa

// Scope haciendo uso de let
// evita que se mezclen los valores que se utilizan
 let musica = 'Pop';

 if(musica){
     let musica = 'Salsa';
     console.log('dentro del if ' + musica); // Salsa
 }

 console.log('Fuera del if ', musica); // Pop