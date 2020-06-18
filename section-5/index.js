const express = require('express');
const redis = require('redis');

const app = express();
const PORT = 8080;
const client = redis.createClient({
    host: 'redis-server', // name of the docker service
    port: 6379
});

client.set('visits', 0);

app.get('/', (req, res) => {
    // fetch num of visits
    client.get('visits', (err, visits) => {
        res.send(`<h1 style='color: brown'>Number of visits: <span style='color: green'> ${visits}</span></h1>`);
        client.set('visits', +visits + 1);
    });
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
