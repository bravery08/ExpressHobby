var express = require('express');
var router = express.Router();
var Hobbies = require('../models').Hobbies;

/* GET hobby listings. */
router.get('/', function(req, res) {
  Hobbies.all({
    order: [
      ['createdAt', 'ASC']
    ]
  })
    .then( function(hobbies) {
    })
});

/* POST add hobby listing */
router.post('/', function(req, res) {
  var title = req.body.title;
  Hobbies.create({ hobby: hobby })
    .then( function() {
      res.redirect('/hobbies');
  });
});

router.delete('/:id', function(req, res) {
  Hobbies.findById(req.params.id)
    .then( function(hobbies) {
      hobbies.destroy()
    })
    .then( function() {
      return res.redirect('/hobbies');
  });
});

router.get('/:id/edit', function(req, res) {
 Hobbies.findById(req.params.id)
    .then( function(hobbies) {
      return res.render('edit', { hobbies: hobbies });
  });
});

router.put('/:id', function(req, res) {
  Hobbies.update(
    { title: req.body.title },
    { where: { id: req.params.id } }
  )
  .then( function() {
    return res.redirect('/hobbies');
  })
});



module.exports = router;