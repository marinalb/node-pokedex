const express = require('express');
const createError = require('http-errors');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const { connect } = require('./models');

const pokemonsRouter = require('./routes/pokemons');
const batalhaRouter = require('./routes/batalha');
const capturaRouter = require('./routes/api/captura');

const app = express();

//configure ejs
app.set('viwes', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

//confifgure statics fils (fonts, imgs, style.css)
app.use(express.static(path.join(__dirname, 'public')));

//declare route
app.use('/pokemons', pokemonsRouter);
app.use('/batalha', batalhaRouter);

//declare api routes
app.use('/api', capturaRouter);

//treating 404 - Not Found
app.use((_req, _res, next) => {
    next(createError(404))
});

//treating generic error
app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    res.render('paginas/erro', {
        mensagem: err.message,
        erro: err,
    });
});


const porta = 3000;
app.listen(porta, () => {
    connect();

    console.log('Server up!');

});