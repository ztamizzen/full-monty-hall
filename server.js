const express = require('express');
const app = express();
const port = 4080;
const Monty = require('./monty');
// just to trigger caching of the loops, cause why now?
/* console.log('Wins: Change my mind!', Monty());
console.log('Wins: I\'m fine thanks...', Monty(false)); */
app.use(express.static('public'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4080/*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
    next();
});
app.get('/', (req, res) => res.send('Stuff'));
app.get('/monty', (req, res) => {
    const monty = Monty(JSON.parse(req.query.nah), Number(req.query.count));
    console.log(req.query, monty);
    res.status(200).json({ wins: monty });
});

app.listen(port, () => console.log(`Monty is alive on port http://localhost:${port}, go say hi!`));
