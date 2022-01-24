const porta = 3003;
const express = require('express');
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');
const app = express();

// executa em todas as middlewares
app.use(bodyParser.urlencoded({extended:true}));

app.get('/produtos',(req,res,next)=>{
    res.send(bancoDeDados.getProdutos());
});

// buscar/pegar
app.get('/produtos/:id',(req,res,next)=> {
    res.send(bancoDeDados.getProduto(req.params.id));
});

//create
app.post('/produtos',(req,res,next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    });
    res.send(produto); // JSON
});

//alterar/update
app.put('/produtos/:id',(req,res)=>{
    res.send(bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    }));
});

//excluir produto
app.delete('/produtos/:id',(req,res)=>{
    res.send(bancoDeDados.deleteProduto(req.params.id));
});

app.listen(porta, () => console.log(`Servidor está executando na porta: ${porta}`));
