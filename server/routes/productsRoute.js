const express = require('express')
const productsContoller = require('../controllers/productsController')

productsRouter = express.Router()


productsRouter.route('/').get(productsContoller.getAllProducts).post(productsContoller.createAProduct)
productsRouter.route('/:id').get(productsContoller.getAProduct).patch(productsContoller.updateAProduct).delete(productsContoller.deleteAProduct)


module.exports = productsRouter