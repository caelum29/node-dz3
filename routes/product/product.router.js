const productRouter = require('express').Router();

const {isProductExist, isProductValid} = require('../../middlewares');

const {productController} = require('../../controllers');

productRouter.get('/', productController.getProducts);
productRouter.get('/:id',isProductExist, productController.getProduct);
productRouter.post('/',isProductValid, productController.createProduct);
productRouter.delete('/:id', productController.deleteProduct);
productRouter.put('/:id',isProductValid, productController.updateProduct);

module.exports = productRouter;
