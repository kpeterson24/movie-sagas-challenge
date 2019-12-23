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
// GET specific movie id when click on movie poster
router.get('/:id', (req, res) =>{
    const id = [req.params.id]
    let queryText = `
        SELECT "genres"."name", "movies"."title", "movies"."poster", "movies"."description"
        FROM "movies-and-genres"
        JOIN "movies" ON "movies"."id" = "movies-and-genres"."movie".id"
        JOIN "genres" ON "genres"."id" = "movies-and-genres"."genre"."id"
        WHERE "movies-and-genres"."movieId" = $1`
    pool.query(queryText, id)
    .then( (result) => {
        res.send(result.rows);
    }).catch( (error) => {
        console.log('error getting movie id', error);
        res.sendStatus(500);
    });
})

//will eventually need to put another get here when clicking Movie poster to grab its details by as parameter( probably by id. )



module.exports = router;