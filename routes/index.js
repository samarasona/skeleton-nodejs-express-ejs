var express = require('express');
var router = express.Router();
const Autor = require ("../models/autor");

router.get('/', async function(req, res, next ){
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});
router.get('/inserir', async function(req, res, next){
  let autor ={
    nome:"samara",
    sobrenome:"sona",
  datanascimento:"1998-05-09"
  };
  const autores = await Autor.inserir(autor);
  res.json(autores.rows);
});
module.exports = router;
