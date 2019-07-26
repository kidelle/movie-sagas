const express = require('express');
const router = express.Router();
const pool = require('./modules/pool');

// Set up routes here:
router.get('/movies', (req, res) => {
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