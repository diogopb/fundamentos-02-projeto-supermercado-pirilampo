const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  let productsOutOfStock = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    
    if (stockProducts[index].quantityInStock === 0) {
      productsOutOfStock.push(stockProducts[index].productName);
    }
  }
  return productsOutOfStock;
};

module.exports = { getOutOfStockProducts };
