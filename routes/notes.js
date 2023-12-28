const router = require('express').Router();
const fs = require('fs');
const path = require('path');
//https://www.npmjs.com/package/uniqid
const { v4: uuidv } = require('uuid');
const express = require('express');
router.use(express.json());

// GET behind the scences routes for notes page
//referenced heynode for assistance reading and writing json: https://heynode.com/tutorial/readwrite-json-files-nodejs/
router.get('/api/notes', (req, res) => {

    fs.promises.readFile('db/db.json', 'utf8', (err, jsonString) => {
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
//referenced multiple sources including: https://codeforgeek.com/handle-get-post-request-express-4/
const dbFilePath = path.join('db/db.json')
router.post('../api/notes', async (req, res) => {
    try {
        //read existing notes
        const presentNote = await fs.readFile(dbFilePath);
        const notes = JSON.parse(presentNote);

        // Destructure for the items in req.body
        const { title, text } = req.body;

        //set required properties and validate
        if (!title && !text) {
            return res.status(400).json({ msg: 'Title and text are required for a new note.' });
        }
        //create new note object
        const newNote = {
            id: uuidv(),
            title,
            text,
        };
        //Add new note to exisiting notes
        notes.push(newNote);
        //write updated notes to db.json
        await fs.writeFile(dbFilePath, JSON.stringify(notes));
        //respond with new note
        res.json(newNote);
        //create catch statement for server errors
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error in posting note' });
    }
});

module.exports = router;

//get previously stored list
//read file
//get notes
//turn into object
//push array to get data
// rewrite as fs.writeFile back to json
//add id property