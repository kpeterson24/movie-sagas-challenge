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
// GET all genres for selected film
router.get(`/:id`, (req, res) =>{
    const id = [req.params.id]
    let queryText = `
        SELECT "genres"."name"
        FROM "movies"
        JOIN "movies_and_genres" ON "movies_and_genres"."movie_id" = "movies"."id"
        JOIN "genres" ON "genres"."id" = "movies_and_genres"."genre_id"
        WHERE "movies"."id" = $1;`;
    pool.query(queryText, id)
    .then( (result) => {
        res.send(result.rows);
    }).catch( (error) => {
        console.log('error getting movie id', error);
        res.sendStatus(500);
    });
})

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


module.exports = router;