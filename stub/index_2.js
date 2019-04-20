const axios = require("axios");
const express = require("express");
const fs = require("fs");
const path = require('path');
const excursions = require('./data/excursions_list');

const app = express();

app.get("/api/v3/search", (req, res) => {
  const page = req.query.page || 0;

  try {
    let mock = require(`./search/${page}`);
    res.send(mock);
  } catch (e) {
    const realUrl = `https://meduza.io${req.url}`;
    console.log('Fallback to real URL:', realUrl)
    axios
      .get(realUrl)
      .then((data) => {
        console.log('Trying to save ', path.resolve(`./stub/search/${page}.json`));
        fs.writeFileSync(path.resolve(`./stub/search/${page}.json`), JSON.stringify(data.data));
        res.send(data.data);
      })
  }

});

app.get('/admin/excursions', (request, response) => {
    response.type('application/json').send(excursions);
});

app.get('/admin/token', (request, response) => {
    console.log('admin/token');
    if (request.query.login === 'name' && request.query.pass === '123') {
        response.type('application/json').send({"token": "this_is_token", "status": 0, "errorMessage": ""})
    } else {
        response.type('application/json').send({"token": "", "status": -1, "errorMessage": "incorrect password"})
    }
});

app.listen(8090, () => console.log("Listening on port 8090!"));

module.exports = app;
