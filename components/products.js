const express = require('express');
const router = express.Router();
const sqlite = require('./sqlite');

const findProducts = (sql, req, res) => {
    sqlite.all(sql, [], (err, data) => {
        if (err)
            return res.status(500).send('An Error Occurred');
        return res.json({
            status: 'success',
            data: data
        });
    });
};

router.get('/', (req, res) => {
    sql = 'SELECT * FROM products';
    return findProducts(sql, req, res);
});

router.get('/:id', (req, res) => {
    id = req.params.id;
    if (!id)
        return res.status(400).send('Incorrect Parameter');
    sql = `SELECT * FROM products WHERE products.id = ${id}`;
    return findProducts(sql, req, res);
});

module.exports = router;