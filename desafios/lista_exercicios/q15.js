/* 

Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes.

Utilizando uma estrutura switch, caso o comprador queira o hatch, retorne: 
“Compra efetuada com sucesso”. 

Nas outras opções, retorne: 

“Tem certeza que não prefere este modelo?”.

Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.

*/

function fabricarCarro(tipoDeVeiculo){
        let tipo;
    switch(tipoDeVeiculo){
        case 'sedan':
            tipo = 'sedan';
            console.log('Tem certeza que não prefere este modelo?');
        break;
        case 'hatch':
            tipo = 'hatch';
            console.log('Compra realizada com sucesso!');
            return {modelo: tipo,
                    ano: new Date().getFullYear(),
                    acelerar(){
                        console.log('Vrum.......');
                    }
            };
        break;
        case 'motocicleta':
            console.log('Tem certeza que não prefere este modelo?');
        break;
        case 'caminhonete':
            console.log('Tem certeza que não prefere este modelo?');
        break;
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui');
    }
}

const carro = fabricarCarro('hatch');
const automovel = fabricarCarro('Bike');

console.log();

console.log(`Modelo: ${carro.modelo}`);
console.log(`Ano: ${carro.ano}`);
carro.acelerar();
