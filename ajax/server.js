const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const multer = require('multer');

app.use(express.static('.'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// http://expressjs.com/en/resources/middleware/multer.html
const storage = multer.diskStorage({
    destination: function(req,file,callback){
        callback(null,'./upload');
    },
    filename: function(req,file,callback){
        callback(null, `${Date.now()}_${file.originalname}`);
    }
}); // prepara o arquivo que será upado

// objeto storage | nome do arquivo
const upload = multer({storage}).single('arquivo');

app.post('/upload',(req,res) => {
    upload(req,res,err => {
        if(err){
            return res.end('Ocorreu um erro.');
        }
        res.end('Concluído com sucesso!');
    });
});

app.post('/formulario',(req,res) => {
    res.send({id:1,...req.body});
});

app.get('/parOuImpar',(req,res) => {
    //req.body; req.params; req.query
    const par = parseInt(req.query.numero) % 2 === 0;
    const texto = par ? 'Par':'Ímpar';
    res.send({resultado: texto});
});

app.get('/teste',(req,res) => {
    res.send(new Date().toLocaleString('pt-br',{
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }));
})

app.listen(8080, () => {
    console.log('Executando...');
})