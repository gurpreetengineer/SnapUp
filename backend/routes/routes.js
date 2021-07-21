'use strict';

module.exports = function (app) {
  var users = require('../controllers/controllers');

  app.route('/Users')
    .post(users.create_a_user)

  app.route('/Users/login')
    .post(users.login)

  app.route('/ProductDetails')
    .get(users.list_all_products)
}
