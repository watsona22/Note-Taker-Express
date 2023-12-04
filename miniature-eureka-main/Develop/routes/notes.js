const router = require('express').Router();
const fs = require('fs');
// localhost:3001/api/notes

// GET behind the scences routes for notes page
//referenced heynode for assistance reading and writing json: https://heynode.com/tutorial/readwrite-json-files-nodejs/

router.get('/', (req, res) => {

    fs.readFile('db/db.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("error reading file", err);
            return res.status(500).json(err);
        }
        console.log('File:', jsonString);

        try {
            const notes = JSON.parse(jsonString);
            res.json(notes);
        } catch (parseError) {
            console.log(parseError);
        }
    });
});

module.exports = router;
