const Products = require('../models/productsModel')

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Products.find()
        res.status(200).json({
            status: 'All Products Retrieved',
            data: {
                products
            }
        })
        
    } catch (error) {
        res.status(404).json({
            status: 'Failed to retrieve Products',
            message: error
        }) 
    }
}

exports.createAProduct = async (req, res) => {
    try {
        const product = await Products.create(req.body)
        res.status(201).json({
            status: 'Product Created',
            data: {
                product
            }
        })
        
    } catch (error) {
        res.status(404).json({
            status: 'Failed to create product',
            message: error
        }) 
    }
}

exports.getAProduct = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}

exports.updateAProduct = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}

exports.deleteAProduct = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}
