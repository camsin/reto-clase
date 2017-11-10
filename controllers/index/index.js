const express = require('express')
const User = require('../../models/user');


function index(req, res, next) {
  User.find({}, (err, result) => {
    res.render('index', {
      users: result
    });
  });
}


function create(req, res, next) {

    let user = new User({
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex
    });
    user.save((err) => {
        if (err) {
            console.log("ERROR", err);
            res.send('error!!!!');
        } else {
            console.log("SI GUARFE");
    res.redirect('/users/');
}
});

}

module.exports = {
  index,
  create
};
