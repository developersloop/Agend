import { validatePayloadLogin } from '../src/validations/userValidation';
import { verifyJWT } from '../src/middlewares/index';
const express = require('express');
const routes = express.Router();
const  UserController  = require('./Controllers/UserController');
const ContactController = require('./Controllers/ContactController');

routes.get('/users',UserController.index);
routes.get('/users/:id',verifyJWT,UserController.show);

routes.get('/contatos',ContactController.index);
routes.get('/contatos/:id',ContactController.show);
routes.get('/contatos/user/:id',ContactController.userByContact);
routes.post('/contatos',ContactController.store);


// register user

routes.post('/register',UserController.register);
routes.post('/login',
                    validatePayloadLogin(),
                    UserController.login)


module.exports = routes;