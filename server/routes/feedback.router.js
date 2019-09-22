const express = require('express');
const router = express.Router();

const pool = require('../module/pool');



router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "feedback";';

    pool.query(queryText)
        .then((result) => {
            console.log(result)
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('Error: ', err);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    const data = req.body;
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4);`;
    
    pool.query(queryText, [data.feeling, data.understanding, data.support, data.comments])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('Error posting: ', err);
            res.sendStatus(500);
        });

});

module.exports = router;