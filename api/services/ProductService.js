module.exports = {
  getProducts: function(res, next){
    Product.find().exec(function(err, products){
      if(err){
        console.log(err)
        return res.serverError(err)
      }
      if(!products){
        return res.notFound('Could not find products, sorry.')
      }

      next(products)
    })
  },

  getOneProduct: function(res, productName, next){
    Product.findOne({name: productName}).exec(function (err, product){
		  if (err) {
		    return res.serverError(err);
		  }
		  if (!product) {
		    return res.notFound('Could not find that product, sorry.');
		  }

      next(product)
		});
  }
}
