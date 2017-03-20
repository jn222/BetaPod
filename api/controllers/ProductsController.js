/**
 * Products-homepageController
 *
 * @description :: Server-side logic for managing products-homepages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (request, response) {

		ProductService.getProducts(response, function(productsArray){
			return response.view('main_pages/products-homepage', {title: 'BetaPod Products', css: ['../styles/products-homepage.css'], products: productsArray});
		});

  },

	show: function (request, response) {
		productName = request.param('name');

		ProductService.getOneProduct(response, productName, function(product){
			return response.view('main_pages/product', {layout: 'layout.handlebars', title: productName, css: ['../styles/products.css'], product_image: product.image, product_title: product.name, product_info: product.description});
		});

	}

};
