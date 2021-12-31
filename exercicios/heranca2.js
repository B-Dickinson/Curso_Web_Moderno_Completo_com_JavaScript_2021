const avo = {attr1: 'A'};
const pai = {__proto__:avo, attr2: 'B', attr3: 3};
const filho = {__proto__: pai, attr3: 'C'};

console.log(filho.attr3, filho.attr2, filho.attr1, filho.attr0);
console.log(filho.__proto__ === Object.prototype);
console.log(filho.__proto__ === pai);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta=0){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta; 
        } else {
            this.velAtual = this.velMax;
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax} Km/h.`;
    }   
};

const ferrari = {
    modelo: 'F24',
    velMax: 320
};

const volvo = {
    modelo: 'V24',
    velMax: 300,
    status(){
        return `O ${this.modelo} está correndo a ${super.status()}`
    }
};

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);
volvo.acelerar(150);
console.log('\n'+volvo.status());