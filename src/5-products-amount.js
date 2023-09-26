const stockProducts = require('./data.json');

const getProductsAmount = () => {
  let totalStock = 0;
  for (index = 0; index < stockProducts.length; index += 1) {
    totalStock += stockProducts[index].quantityInStock;
  }
  return totalStock;
};

module.exports = { getProductsAmount };
