const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shoes',
  },
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Socks',
  },
  {
    category_name: 'Jeans',
  },

];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
