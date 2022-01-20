
const express = require('express');
const bodyParser = require('body-parser');
const posts = require('../model/posts');
const router = express.Router();
const cors = require('cors');
//Site de dependência que pode alterar uma método Get.
options = {
  origin: 'http://localhost:3000'
};

//Com o cors pode-se atribuir uma rota de um site que pode inserir uma método Get. Também pode-se acessa tanto com o endereço 'IP' ou o 'Localhost' da máquina que está rodando o servidor Node.js.
router.use(cors(this.options));

router.get('/all', (req, res)=>{
  //Adicinando o método getAll() para imprimir como resposta do método GET;
  res.json(JSON.stringify(posts.getAll()));
});

router.post('/new', bodyParser.json(),(req, res)=>{

  let tittle = req.body.tittle;
  let description = req.body.description;
  //Chamando a função newPost() do model.js
  posts.newPost(tittle, description);

  res.send("Poste adicionado com sucesso!");
});

router.delete('/del/:id', (req, res)=>{
  let id = req.params.id;
  posts.deletePost(id);
  res.json(JSON.stringify(posts.getAll()))
})

module.exports = router;