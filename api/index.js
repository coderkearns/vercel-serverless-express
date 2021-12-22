// A serverless function for vercel with four endpoints:
// /api/
// /api/hello/
// /api/hello/:name
// /api/time

const express = require('express');
const app = express();


app.use(express.json());

// Caching
app.use((req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    next();
})


app.get('/api/', (req, res) => {
    res.json("Hello World!");
});

app.get('/api/hello/', (req, res) => {
    res.json('Hello World!');
});

app.get('/api/hello/:name', (req, res) => {
    res.json(`Hello ${req.params.name}`);
});

app.get('/api/time', (req, res) => {
    res.json(new Date().toString());
});

module.exports = app;