var express = require('express');
var router = express.Router();
const Autor = require ("../models/autor");

router.get('/', async function(req, res, next ){
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});
router.post('/inserir', async function(req, res, next) {
  
  
  
  const autores = await Autor.inserir(req.body);
   res.json(autores.rows);

}) ;

router.get('/atualizar', async function(req, res, next){
  let autor ={
    nome:"samara",
    sobrenome:"sona",
  datanascimento:"2005-01-12"
  };
  const autores = await Autor.atualizar(autor);
  res.json(autores.rows);
});

router.post('/deletar', async function(req, res, next) {
  const autores = await Autor.deletar(autor(11));
   res.json(autores.rows);

});


module.exports = router;
