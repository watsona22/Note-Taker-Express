const express = require('express');
const fs = require('fs');
const path = require('path');
// const api = require('./public/assets/js/index');
const app = express();
// const { clog } = require('./middleware/clog');
const routes = require('./routes/notes.js');
// const router = express.Router();


// Import custom middleware, "cLog"
// app.use(clog);

const PORT = process.env.PORT || 3001;
// app.use(app.router);
// routes.initialize(app);


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use('/api', api);
app.use('/api/notes', routes);



//GET user routes for front end
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});


app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);
