console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis() {
    console.log('Dentro de uma função...');
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global);
}

const log = () => {
    console.log('Dentro de uma arrow...');
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global); 
}

logThis();
log();

console.log();

// module.exports tem como __proto__ o Object.prototype ?
console.log(module.exports.__proto__ === Object.prototype);

// Logo....
console.log(this.__proto__ === Object.prototype);
console.log(exports.__proto__ === Object.prototype);

