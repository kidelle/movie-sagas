const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Set up routes here:
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

module.exports = router;
