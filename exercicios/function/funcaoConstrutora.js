function Carro(velocidadeMaxima = 200, delta = 20){

    // atributo privado(sem o this)
    let velocidadeAtual = 0;

    //metodo public( com o this )
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual;
    }

}

const uno = new Carro(); // pode ou nao chamar o ocnstrutor ()

uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();

console.log(uno.getVelocidadeAtual()+'Km/h');


