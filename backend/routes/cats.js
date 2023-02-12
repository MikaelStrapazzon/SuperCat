const express = require('express');
const router = express.Router();

const Cat = require("../entity/Cat");

router.get('/', async function (request, response) {
  response.send(await Cat.findAll());
});

router.post('/', async function (request, response) {
  const resultCreate = await Cat.create({
    name: request.name,
    color: request.color,
    gender: request.gender
  })

  response.send(resultCreate);
});

router.get('/:id', async function (request, response) {
  response.send(Cat.findByPk(request.params['id']));
});

router.patch('/:id', async function (request, response) {
  const cat = await Cat.findByPk(request.params['id'])

  cat.name = request.name ?? cat.name;
  cat.color = request.color ?? cat.color;
  cat.gender = request.gender ?? cat.gender;

  response.send(cat.save());
});

router.get('/:id', async function (request, response) {
  response.send(
      Cat.destroy({
        where: { id: request.params['id'] }
      })
  );
});

module.exports = router;
