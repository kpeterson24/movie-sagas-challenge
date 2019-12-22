const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET MAH MOVIES from the db...
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "movies";';
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch (error => {
        console.log('error getting movies', error);
        res.sendStatus(500);
    });
});

//will eventually need to put another get here when clicking Movie poster to grab its details by as parameter( probably by id. )



module.exports = router;