const userController = require('../controllers/user');
module.exports = function(app){
    app.route('/user/')
        .get(userController.get)
}

