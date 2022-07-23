const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const multer = require('multer');

app.use(express.static('.'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.get('/teste',(req,res) => {
    res.send(new Date().toLocaleString('pt-br',{
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }));
})


const storage = multer.diskStorage({
    destination: function(req,file,callback){
         callback(null,'./myUpload');   
    },
    filename: function(req,file,callback){
         callback(null,`${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({storage}).single('arquivo');// nome que o arquivo terá como fieldName

app.post('/myUpload',(req,res) => {
    upload(req,res, err => {
        if(err){
            return res.end('Erro ao processar arquivo.');
        }
            res.end('Concluído com sucesso.');
    }); 
});

app.listen(8180, () => {
    console.log('Executando...');
});
