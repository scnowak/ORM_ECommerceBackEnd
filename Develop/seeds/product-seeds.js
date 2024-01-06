const { Product } = require('../models');

const productData = [
  {
    product_name: 'All Terrain Shoes',
    price: 125.00,
    stock: 15,
    category_id: 1,
  },
  {
    product_name: 'Graphic Tees',
    price: 35.00,
    stock: 16,
    category_id: 2,
  },

  {
    product_name: 'Basketball Shorts',
    price: 65.00,
    stock: 17,
    category_id: 3,
  },
  {
    product_name: 'No Show Socks',
    price: 75.00,
    stock: 18,
    category_id: 4,
  },
  {
    product_name: 'Low Rise Jeans',
    price: 30.99,
    stock: 19,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
