const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/notes.js');



const PORT = process.env.PORT || 3001;



// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api/notes', routes);



//GET user routes for front end
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});


app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at https://glacial-shore-68409-1a441e5df445.herokuapp.com`)
);

