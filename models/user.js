

module.exports = (sequelize, Datatypes) => {
    var Admin = sequelize.define('Admin', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Datatypes.INTEGER
        },
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
         username:{
          type: Datatypes.STRING,
          allowNull:false
        },
        password:{
          type:Datatypes.STRING,
          allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
        },
     password: {
        type: Sequelize.STRING,
        allowNull: false
        },

    last_login: {
        type: Sequelize.DATE
    },

    status: {
        type: Sequelize.ENUM('active', 'inactive'),
        defaultValue: 'active'
    }

    });
    return Admin;
};


// adminLogin.methods.setPassword = function(password) {
//     this.salt = crypto.randomBytes(16).toString('hex');
//     this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
//   };
  
// adminLogin.methods.validatePassword = function(password) {
//     const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
//     return this.hash === hash;
//   };
  
// adminLogin.methods.generateJWT = function() {
//     const today = new Date();
//     const expirationDate = new Date(today);
//     expirationDate.setDate(today.getDate() + 60);
  
//     return jwt.sign({
//       email: this.email,
//       id: this._id,
//       exp: parseInt(expirationDate.getTime() / 1000, 10),
//     }, 'secret');
//   }
  
//   adimLogin.methods.toAuthJSON = function() {
//     return {
//       _id: this._id,
//       email: this.email,
//       token: this.generateJWT(),
//     };
//   };



//   var authController = require('../controllers/authcontroller.js');
 
//   module.exports = function(app) {
   
//       app.get('/signup', authController.signup);
   
//   }