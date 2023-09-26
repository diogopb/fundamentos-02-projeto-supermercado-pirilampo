const stockProducts = require('./data.json');

const searchProductByName = (item) => {
  let findProducts = null;
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].productName === item) {
      let priceProducts = stockProducts[index].price;
      findProducts = {
        description: stockProducts[index].description,
        formattedPrice: `R$ ${priceProducts.toFixed(2)}`,
      }
    }
  }
  return findProducts;
};

module.exports = { searchProductByName };
