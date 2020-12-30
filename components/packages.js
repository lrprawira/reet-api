const express = require('express');
const router = express.Router();
const sqlite = require('./sqlite');

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM packages';
    sqlite.all(sql, [], (err, data) => {
        if (err)
            return res.status(500).send('An Error Occurred');
        return res.json({
            status: 'success',
            data: data
        });
    })
});

module.exports = router;