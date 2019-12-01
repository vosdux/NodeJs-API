const products = require('../app/controllers/product');
const users = require('../app/controllers/user');
const authMiddleware = require('../app/middleware/auth');

module.exports = (app) => {
    //products
    app.get('/products', authMiddleware, products.getAll);
    app.post('/products', authMiddleware, products.create);
    app.put('/products/:id', authMiddleware, products.update);
    app.delete('/products/:id', authMiddleware, products.remove);

    //auth
    app.post('/auth', users.signIn);
    app.post('./refresh-tokens', users.refreshTokens);
}