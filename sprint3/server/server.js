const express = require('express');
const app = express();

// const cors = require('cors');
const PORT = 8080;
const videos = require('./routes/videos');

app.use(express.json());

// app.use(cors());

app.use((req, res, next) => {
    console.log('Incoming');
    next();
});



app.use('/videos', videos);

app.listen(PORT, () => {
    console.log(`This server is ${PORT}` );
});



