module.exports = {
    appPort: 7000,
    mongoUri: 'mongodb://localhost:27017/online-store',
    jwt: {
        secret: 'helloWorld',
        tokens: {
            acces: {
                type: 'access',
                expiresIn: '2m'
            },
            refresh: {
                type: 'refresh',
                expiresIn: '3m'
            }
        }
    } 
};
