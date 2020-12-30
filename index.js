const express = require('express');
const cors = require('cors');
const timeout = require('connect-timeout');

// Components
const products = require('./components/products');
const packages = require('./components/packages');

// CORS Settings
const whitelistOrigin = ['http://localhost:[0-9]{2-5}'];
const corsOptions = {
    origin: true
};

// App
const app = express();

// Middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use(timeout(30000));
app.get('/', (req, res, next) => {
    return res.status(418).send('Useless Route');
    next();
});
app.use('/products', products);
app.use('/packages', packages);

// Debugging

// Run
const port = process.env.PORT || 3099;
app.listen(port, () => console.log(`Listening on port ${port}`));