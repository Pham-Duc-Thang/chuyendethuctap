const Product = require('../models/products');

exports.searchProducts = async (req, res) => {
  try {
    const searchTerm = req.query.q;
    const results = await Product.find({ name: { $regex: searchTerm, $options: 'i' } });
    res.json(results);
  } catch (err) {
    res.status(500).send({ error: 'An error occurred while searching for products' });
  }
};

exports.getAutocomplete = async (req, res) => {
  try {
    const searchTerm = req.query.q;
    const results = await Product.find({ name: { $regex: searchTerm, $options: 'i' } }).limit(10);
    const autocompleteResults = results.map(product => ({
      name: product.name,
      url: `/product/${product._id}`
    }));
    res.json(autocompleteResults);
  } catch (err) {
    res.status(500).send({ error: 'An error occurred while fetching autocomplete suggestions' });
  }
};
