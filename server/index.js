const express = require('express')
const app = express()
const cors = require('cors');
const port = 3005
const activities = require('../activities.json');

app.use(cors());

app.get('/', (req, res) => res.send('Hi there!'));

app.get('/activities', (req, res) => {
    res.send(activities.tours.slice(0, Math.min(activities.tours.length, 50)));
});

app.get('/activities/:queryString', (req, res) => {
    const retActivites = activities.tours.filter(tour => {
        return tour.title.toLowerCase().includes(req.params.queryString.toLowerCase());
    });
    res.send(retActivites);
});

app.listen(port, () => console.log(`Demo server listening on port ${port}!`))