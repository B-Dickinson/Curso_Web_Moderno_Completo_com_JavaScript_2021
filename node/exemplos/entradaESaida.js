const anonimo = process.argv.indexOf('-a') !== -1;

if(anonimo){
    process.stdout.write('Fala anônimo!\n');
    process.exit();
} else {
    process.stdout.write('Informe o seu nome: ');

    process.stdin.on('data', name => {

        const nome = name.toString().replace('\r\n','');

        process.stdout.write(`Fala aí ${nome}. Beleza?`);
        process.exit();
    });
}    