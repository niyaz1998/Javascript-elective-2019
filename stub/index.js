const express = require("express");
const excursions = require('./data/excursions_list');

const app = express();

app.get('/admin/excursions', (request, response) => {
    response.type('application/json').send(excursions);
});

app.get('/admin/token', (request, response) => {
    if (request.query.login === 'name' && request.query.pass === '123') {
        response.type('application/json').send({"token": "this_is_token", "status": 0, "errorMessage": ""})
    } else {
        response.type('application/json').send({"token": "", "status": -1, "errorMessage": "incorrect password"})
    }
});

app.post('/admin/excursions', (request, response) => {
    response.type('application/json').send({"status": 0, "errorMessage": "", "id": 1});
});

app.listen(8090, () => console.log("Listening on port 8090!"));

module.exports = app;
