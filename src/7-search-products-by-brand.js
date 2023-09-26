const stockProducts = require('./data.json');

const searchProductsByBrand = (item) => {
  let findProducts;
  let findBrands = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].brand === item) {
      let priceProducts = stockProducts[index].price;
      findProducts = {
        description: stockProducts[index].description,
        formattedPrice: `R$ ${priceProducts.toFixed(2)}`,
      }
      findBrands.push(findProducts);
    }
  }
  return findBrands;
};


module.exports = { searchProductsByBrand };
