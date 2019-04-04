const bodyParser = require("body-parser");

const excursions = require('./data/excursions_list');

module.exports = (app) => {

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.get('/excursions', (request, response) => {
        response.type('application/json').send(excursions)
    });

    app.post('/admin/token', (request, response) => {
        if (request.body.name === 'name' && request.body.password === '123') {
            response.type('application/json').send({"token": "this_is_token", "status": 0, "errorMessage": ""})
        } else {
            response.type('application/json').send({"token": "", "status": -1, "errorMessage": "incorrect password"})
        }
    });
};