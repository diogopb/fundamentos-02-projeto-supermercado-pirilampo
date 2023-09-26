const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  let findProducts;
  let findSale = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].onSale === true) {
      let priceProducts = stockProducts[index].price;
      findProducts = {
        description: stockProducts[index].description,
        formattedPrice: `R$ ${priceProducts.toFixed(2)}`,
        onSale: stockProducts[index].onSale,
      }
      findSale.push(findProducts);
    }
  }
  return findSale;
};

module.exports = { getProductsOnSale };
