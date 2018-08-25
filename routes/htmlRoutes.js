var db = require('../models');

module.exports = (app) => {
  // home page
  app.get('/', (req, res) => {
      res.render('index');
  });

  // navigate between pages from the navbar
  app.get('/:page', (req, res) => {
    var page = req.params.page;
    switch(page) {
      case ('services'):
      return res.render('services');
      case ('equipment'):
      return db.Equipment.findAll({
        raw: true
      }).then((equipment) => {
        res.render('equipment');
      });
      case ('clients'):
      return db.Client.findAll({
        raw: true
      }).then((clients) => {
        res.render('clients', {
          clients: clients
        });
      });
      case ('contact'):
      return res.render('contact');
      case ('default'):
      return res.redirect('/');
    }
  });

  // Render 404 page for any unmatched routes
  app.get('*', (req, res) => {
    res.render('404');
  });
};
