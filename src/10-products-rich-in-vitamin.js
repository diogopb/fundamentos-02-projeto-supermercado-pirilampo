const stockProducts = require('./data.json');

// const xablau = (products) => {
//   let arrayVitamins = [];
//   let key;
//   let value;
//   let object = {};
//   let keysProducts = Object.values(products);
//   let vitaminsList;

//   for (let index = 0; index < keysProducts.length; index++) {
//     // console.log(keysProducts[index]);
//     if (keysProducts[index].vitamins) {
//       vitaminsList = products.nutritionalInfo.vitamins;
//       key = Object.keys(vitaminsList);
//       value = Object.values(vitaminsList);
//       for (let x = 0; x < key.length; x++) {
//         arrayVitamins.push(`${key[x]} - ${value[x]}`);
//       }
//       object = {
//         description: products.description,
//         formattedPrice: `R$ ${products.price.toFixed(2)}`,
//         vitaminsInformation: arrayVitamins,
//       }
//     }
//   }
//   return object;
// }

// const getProductsRichInVitamin = () => {
//   let array1 = [];

//   for (let index = 0; index < stockProducts.length; index++) {
//     let ifVitamins = xablau(stockProducts[index]);
//     if (ifVitamins === true) {
//       array1.push(ifVitamins);
//     }
//   }
//   return array1;
// }

const getProductsRichInVitamin = () => {
  let findProducts;
  let findVitamins = [];
  let arrayVitamins = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].nutritionalInfo.vitamins) {
      let values = Object.values(stockProducts[index].nutritionalInfo.vitamins);
      let priceProducts = stockProducts[index].price;
      let keys = Object.keys(stockProducts[index].nutritionalInfo.vitamins);
      for (let x = 0; x < keys.length; x++) {
        arrayVitamins.push(`${keys[x]} - ${values[x]}`);
      }
      findProducts = {
        description: stockProducts[index].description,
        formattedPrice: `R$ ${priceProducts.toFixed(2)}`,
        vitaminsInformation: arrayVitamins,
      }
      findVitamins.push(findProducts);
    }
  }
  return findVitamins;
};

module.exports = { getProductsRichInVitamin };
