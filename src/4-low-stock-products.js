const stockProducts = require('./data.json');


const getLowStockProducts = () => {
  let stockQuantity = [];
  for (let index = 0; index < stockProducts.length; index += 1) {

    if (stockProducts[index].quantityInStock > 0 && stockProducts[index].quantityInStock <= 10) {
      stockQuantity.push(`${stockProducts[index].productName}: ${stockProducts[index].quantityInStock} unidades`);
    }

  }
  return stockQuantity;
};

module.exports = { getLowStockProducts };
