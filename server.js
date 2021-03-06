const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_mt4sb07g:oe5bseiqmqkjf9c2sjevd8nal3@ds139960.mlab.com:39960/heroku_mt4sb07g', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/quiz.controller.server')(app);
require('./controllers/question.controller.server')(app);

const bodyParser = require( 'body-parser' );
app.use ( bodyParser.urlencoded ({ extended : false }));
app.use ( bodyParser.json ());
require('./controllers/quiz-attempts.controller.server')(app)

app.listen(process.env.PORT || 3000)
