const bodyParser = require("body-parser");

const excursions = require('./data/excursions_list');

module.exports = (app) => {

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.get('/excursions', (request, response) => {
        console.log('get excursions');
        response.type('application/json').send(excursions)
    });

    app.post('/login', (request, response) => {
        if (request.body.name === 'name' && request.body.password === '123') {
            response.type('application/json').send({"answer": "correct password"})
        } else {
            response.type('application/json').send({"answer": "incorrect password"})
        }
    });
};