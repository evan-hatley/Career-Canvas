const path = require('path');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'pulic')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});

// chart.js npm library for home page charts
// Node
// Express
// MySQL2
// Sequelize