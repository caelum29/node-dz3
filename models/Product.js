const uuid = require('uuid').v4;

const {getProductFile, writeToProductFile} = require('../utils/product');

module.exports = class Product {
    constructor(title, price, id) {
        this.id = id || uuid();
        this.title = title;
        this.price = price
    }
    async create() {
        const products = await getProductFile();
        products.push(this);
        await writeToProductFile(products)
    }
    async update(){
        const products = await getProductFile();
        const existingProductIndex = products.findIndex(product => product.id === this.id);
        products[existingProductIndex] = this;
        await writeToProductFile(products)
    }

    static async fetchAll() {
        return await getProductFile()
    }
    static  async deleteById(id) {
        let products = await getProductFile();
        products = products.filter(product => product.id !== id);
        await writeToProductFile(products)
    }

    static async findById(id) {
       const product = await getProductFile();
      return  product.find(product => product.id === id)
    }
};
