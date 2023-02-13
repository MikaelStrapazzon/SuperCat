const express = require('express');
const router = express.Router();

const Cat = require("../entity/Cat");

router.get('/', async function (request, response) {
  response.send(await Cat.findAll());
});

router.post('/', async function (request, response) {
  try {
    const resultCreate = await Cat.create({
      name: request.body.name,
      color: request.body.color,
      gender: request.body.gender
    })

    response.send(resultCreate);
  }
  catch (e) {
    response.send(e);
  }
});

router.get('/:id', async function (request, response) {
  response.send(await Cat.findByPk(request.params['id']));
});

router.patch('/:id', async function (request, response) {
  const cat = await Cat.findByPk(request.params['id'])

  cat.name = request.body.name ?? cat.name;
  cat.color = request.body.color ?? cat.color;
  cat.gender = request.body.gender ?? cat.gender;

  response.send(cat.save());
});

router.delete('/:id', async function (request, response) {
  response.send(
      Cat.destroy({
        where: { id: request.params['id'] }
      })
  );
});

module.exports = router;
