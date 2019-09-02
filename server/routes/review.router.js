const express = require('express');
const router = express.Router();

const pool = require('../module/pool');



router.get('/prime_feedback', (req, res) => {
    const queryText = 'SELECT * FROM "feedback;';

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

router.post('/feedback', (req, res) => {
    const newFeedback = req.body;
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged", "date")
                        VALUES ($1, $2, $3, $4, $5, $6);`;
    
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments, newFeedback.flagged, newFeedback.date])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('Error posting: ', err);
            res.sendStatus(500);
        });

});

module.exports = router;