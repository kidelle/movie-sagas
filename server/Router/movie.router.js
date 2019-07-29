const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Set up routes here:

// GET for movies
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "movies";`;
    pool.query(sqlText)
        .then( (response) => {
            res.send(response.rows);
        })
        .catch( (error) => {
            console.log(`Error getting Movies. Try again later`, error);
            res.sendStatus(500);
        })
})

// GET for details
router.get('/:id', (req, res) => {{
    let movieId = req.params.id;
    const sqlText = `SELECT "movies"."title", "movies"."description", "genres"."name",
    "movies"."id"
    FROM "movie_genre"
    JOIN "movies" ON "movies"."id" = "movie_genre"."movie_id"
    JOIN "genres" ON "genres"."id" = "movie_genre"."genre_id"
    WHERE "movies"."id" = $1;`; 
    const values = [movieId]
    pool.query(sqlText, values)
    .then( (response) => {
        res.send(response.rows[0]);
    })
    .catch( (error) => {
        console.log(`Error selecting movie genre.`, error);
        res.sendStatuts(500);
    })
}})

// PUT updates movies
router.put('/update/:id', (req, res) => {
    const sqlText = `UPDATE "movies" SET "title" = $1, "description" = $2
    WHERE "id" = $3;`;
    values = [req.body.name, req.body.description, req.body.id]
    pool.query(sqlText, values)
    .then( (response) => {
        res.sendStatus (200);
    })
    .catch( (error) => {
        console.log(`Error updating movies.`, error);
        res.sendStatus(500);
    })
})

module.exports = router;
