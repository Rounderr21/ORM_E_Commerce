const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: Product
    });
    res.json(tags);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/:id', async (req, res) => {
  try{
    const tag = await Tag.findByPk(req.params.id, {
      include: Product
    });
    res.json(tag);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.json(tag);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  try {
    const tag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.json(tag);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
  // update a tag's name by its `id` value
});



router.delete('/:id', async (req, res) => {
  try {
    const tag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json(tag);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
  // delete on tag by its `id` value
});

module.exports = router;
