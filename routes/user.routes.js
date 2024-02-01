const userController = require('../controllers/user.controller')
module.exports = (app)=>{
app.get('/v1/auth/sign-up',[],userController.signup)
app.post('/v1/auth/sign-in',[],)
app.post('/v1/auth/forgot-password',[],)
app.post('/v1/auth/reset-password',[],)
}