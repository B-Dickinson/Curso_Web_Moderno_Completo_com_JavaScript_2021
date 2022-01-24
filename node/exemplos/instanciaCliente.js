const a = require('./instanciaUnica');
const b = require('./instanciaUnica');
const c = require('./instanciaNova')();
const d = require('./instanciaNova')();

a.inc();
a.inc();
c.inc();
c.inc();

console.log(a.valor,b.valor);
console.log(c.valor,d.valor);