const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET MAH MOVIES from the db...
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "movies" ORDER BY "title" ASC;';
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch (error => {
        console.log('error getting movies', error);
        res.sendStatus(500);
    });
});


// GET specific details for the clicked movie
router.get(`/:id`, (req, res) =>{
    const id = [req.params.id]
    let queryText = `SELECT "title", "description", "id" FROM "movies" WHERE id=$1;`;
    pool.query(queryText, id)
    .then( (result) => {
        res.send(result.rows);
    }).catch( (error) => {
        console.log('error getting movie id', error);
        res.sendStatus(500);
    });
})

// This PUT lets us edit our movie selection and it wiull update our DB witrh the changes.
router.put('/:id', (req, res) =>{
    let id = req.params.id;
    let title = req.body.description
    let description = req.body.title;
    const queryText = `UPDATE "movies" SET "title" = $1, "description" = $2 WHERE id = $3;`;
    pool.query(queryText, [title, description, id]
        ).then( (result) => {
            res.sendStatus(200);
        }).catch( (error) => {
            console.log(`error updating movie selection`, error);
            res.sendStatus(500);
        });
})

module.exports = router;