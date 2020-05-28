const path = require('path');
const fsp = require('fs').promises;

const pathToProduct = path.join(process.cwd(), 'data', 'product.json');

async function getProductFile() {
    const content = await fsp.readFile(pathToProduct);
    JSON.parse(content);
    return  JSON.parse(content);
}
async function writeToProductFile(product) {
    await fsp.writeFile(pathToProduct, JSON.stringify(product))
}
module.exports.getProductFile = getProductFile;
module.exports.writeToProductFile = writeToProductFile;
