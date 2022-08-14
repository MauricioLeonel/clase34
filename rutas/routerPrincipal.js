const rutas = require('express').Router()
const autorizationUser = require('../middleware/autorization.js')
const controllerPrincipal = require('../controller/controllerPrincipal.js')
const passport = require('passport')

rutas.get('/',controllerPrincipal.inicio)
rutas.get('/principal',controllerPrincipal.principal)
rutas.get('/login',autorizationUser,controllerPrincipal.loginGet)
rutas.get('/register',autorizationUser,controllerPrincipal.registerGet)
rutas.post('/logout',controllerPrincipal.logoutPost)
rutas.post('/register',passport.authenticate('register',{failureRedirect:'/failedRegister'}),controllerPrincipal.registerPost)
rutas.get('/failedRegister',controllerPrincipal.failedRegister)
rutas.post('/login',passport.authenticate('login',{failureRedirect:'/failedLogin'}),controllerPrincipal.loginPost)
rutas.get('/failedLogin',controllerPrincipal.failedLogin)


module.exports = rutas
