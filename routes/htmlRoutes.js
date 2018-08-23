var db = require('../models');

module.exports = (app) => {
  // home page
  app.get('/', (req, res) => {
      res.render('index')
  });

  // navigate between pages from the navbar
  app.get('/:page', (req, res) => {
    var page = req.params.page;
    switch(page) {
      case ('services'):
      return res.render('services');
      case ('equipment'):
      return res.render('equipment');// db.Equipment.findAll({ <- the alternative to specific equipment urls will look something like this
        // include: []                    where we include each associated model and populate our template modals with the data
      // }).then((equipment) => {
        // res.render('equipment');
      // });
      case ('clients'):
      return db.Client.findAll({}).then((clients) => {
        res.render('clients');
      });
      case ('contact'):
      return res.render('contact');
      case ('default'):
      return res.redirect('/');
    }
  });

  // equipment urls **these don't need to be their own urls**
  // these could just be built into our equipment template 
  app.get('/equipment/:gear', (req, res) => {
    var gear = req.params.gear;
  }) 

  // Render 404 page for any unmatched routes
  app.get('*', (req, res) => {
    res.render('404');
  });
};
