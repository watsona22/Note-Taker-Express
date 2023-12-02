const express = require('express');
const path = require('path');
const api = require('./public/assets/js/index');
const app = express();
const { clog } = require('./middleware/clog');
const routes = require('./routes/notes.js');


// Import custom middleware, "cLog"
app.use(clog);

const PORT = process.env.PORT || 3001;



// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);
app.use('/routes', routes);


// GET Route for notes page
app.get('/api/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/notes.html'))
);

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);
