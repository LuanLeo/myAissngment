var express = require('express');
var router = express.Router();
var Product = require('./../db/model/product');


router.get('/account', (req, res) => {
    Product.find({})
        .then(products => {
            res.render('account', { products: products })
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
});

/**
 * Home page: loading all product
 */
router.get('/productManager', (req, res) => {
    Product.find({})
        .then(products => {
            res.render('home', { products: products })
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
});



//ADD
router.get('/addproduct', (req, res) => {
    Product.find({})
        .then(products => {
            res.render('add-product', { products: products })
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
});

router.get('/', (req, res) => {
    Product.find({})
        .then(products => {
            res.render('index', { products: products })
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
});
router.get('/products', (req, res) => {
    Product.find({})
        .then(products => {
            res.render('product', { products: products })
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
});

/**
 * Go to Add Product page
 */
router.get('/add-product', (req, res) => {
    res.render('add-product');
});


/**
 * Add new Product
 */
 router.post('/', (req, res) => {
    let newProduct = new Product({
        name: req.body.productName,
        brand: req.body.productBrand
    });
    newProduct.save()
        .then(doc => {
            res.redirect('/productManager')
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
});



/**
 * Go to Update Product page
 */
router.get('/update-product/:productId', (req, res) => {
    Product.findById(req.params.productId, (err, product) => {
        if (err) {
            console.log(err);
            throw err
        }
        res.render('update-product', { product: product });
    })
});


/**
 * Delete product
 */
router.delete('/:productId', (req, res) => {
    let productId = req.params.productId;
    Product.findByIdAndDelete(productId, (err, doc) => {
        if (err) throw err;
        res.send(doc)
    })
});



/**
 * Update product
 */
 router.post('/:productId', (req, res) => {
    let productId = req.params.productId;
    Product.findByIdAndUpdate(
        { _id: productId },
        { $set: { name: req.body.productName, brand: req.body.productBrand } },
        { useFindAndModify: false })
        .then(doc => {
            res.redirect('/productManager')
        })
});
module.exports = router;
