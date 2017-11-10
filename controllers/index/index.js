const express = require('express')
const User = require('../../models/user');


function index(req, res, next) {
  User.find({}, (err, result) => {
    res.render('users/index', {
      users: result
    });
  });
}

function show(req, res, next) {
  res.send('Hola Express!!!!');
}


function create(req, res, next) {
  let user = new User({
    name: "Luis",
    lastName: "Ramirez",
    email: "l@uach.mx"
  });
  user.save((err) => {
    if (err) {
      res.send('error!!!!');
    } else {
      res.send('usuario creado!!!!');
    }
  });

}

module.exports = {
  index,
  show,
  create
};
