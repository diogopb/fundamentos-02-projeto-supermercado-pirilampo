const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  let findProducts;
  let findAlergyproducts = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].allergyOrIntolerance) {
      let priceProducts = stockProducts[index].price;
      findProducts = {
        description: stockProducts[index].description,
        formattedPrice: `R$ ${priceProducts.toFixed(2)}`,
        allergyOrIntoleranceMessage: `Pode conter: ${stockProducts[index].allergyOrIntolerance.join(' ')}`,
      }
      findAlergyproducts.push(findProducts);
    }
  }
  return findAlergyproducts;
};

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
