const express = require('express');
const app = express();
const port = 4080;
const Monty = require('./monty');
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    next();
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
    next();
});
app.get('/', (req, res) => res.send('Stuff'));
app.get('/monty', (req, res) => {
    const monty = Monty(JSON.parse(req.query.nah), Number(req.query.count));
    console.log(req.query, monty);
    res.status(200).json({ wins: monty });
});

app.listen(port, () => console.log(`Monty is alive on port http://localhost:${port}, go say hi!`));
