const pilotos = ['Vettel','Alonso','Raikkonen','Massa'];

pilotos.pop();

pilotos.push('Verstappen');

console.log(pilotos);

pilotos.shift();

console.log(pilotos)

pilotos.unshift('Hamilton');

console.log(pilotos)

// splice pode add e remover elementos

pilotos.splice(2,0,'Bottas','Massa');

console.log(pilotos);

// splice

const algunsPilotos1 = pilotos.slice(2); // novo array

console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)

console.log(algunsPilotos2)