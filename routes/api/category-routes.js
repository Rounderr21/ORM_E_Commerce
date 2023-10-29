const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
  const categories = await Category.findAll({
    include: Product
  });
  res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
 //find all categories



  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: Product
    });
    res.json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try{
    const category = await Category.create(req.body);
    res.json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  try{
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try{
    const category = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
  // delete a category by its `id` value
});

module.exports = router;
