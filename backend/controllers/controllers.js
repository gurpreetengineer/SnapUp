'use strict';

var mongoose = require('mongoose');
var Users = mongoose.model('Users');
var Products = mongoose.model('Products');

exports.create_a_user = function(req, res) {
    var newUser = new Users(req.body);
    console.log('Users:::', newUser);
    newUser.save(function(err, user) {
        if(err) {
            console.log('error:::', err);
            res.send(err);
        }
        console.log('Users:::', user)
        res.json(user);
    });
};

exports.list_all_products = function(req, res) {
  Products.find({}, function(err, Products) {
        if(err) res.send(err);
        console.log('Products:::', Products);
        res.json(Products);
    })
}

exports.login = async function(req, res) {
    const user = await Users.findOne({
        email: {
            $eq: req.body.email
        },
    });

    console.log('user:::', user)
    console.log('verfication body:::', req.body);

    if(user) {
        if(user.password == req.body.password) {
            res.json(user)
        } else {
            res.json('password not matched');
        }
    } else {
        res.json('user not found')
    }
}