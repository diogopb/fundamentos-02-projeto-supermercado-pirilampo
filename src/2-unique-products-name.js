const stockProducts = require('./data.json');


const getUniqueProductsName = () => {
  let uniqueProducts = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    uniqueProducts.push(stockProducts[index].productName);
  }
  return uniqueProducts;
};

module.exports = { getUniqueProductsName };
