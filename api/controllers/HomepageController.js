/**
 * HomepageController
 *
 * @description :: Server-side logic for managing homepages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (request, response) {
    return response.view('main_pages/index', {title: 'BetaPod', css: ['../styles/index.css']});
  }
};
