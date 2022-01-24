const aprovados = ['Agatha','Aldo','Daniel','Raquel'];


aprovados.forEach((nome, indice) => {
    console.log((indice+1) + ') '+ nome);
});
console.log();

aprovados.forEach(function(nome,indice){
    console.log(`${indice+1}) ${nome}`);
});