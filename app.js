require('dotenv').config();

const express = require('express');
const passport = require('passport');
const session = require('express-session');
const createError = require('http-errors');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const { connect } = require('./models');

require('./routes/auth/');
const pokemonsRouter = require('./routes/pokemons');
const batalhaRouter = require('./routes/batalha');
const autenticacaoRouter = require('./routes/auth');
const apiRouter = require('./routes/api');
const homeRouter = require('./routes/home');

const { checaAutenticado } = require('./routes/middlewares/checa-autenticacao');

const app = express();

//configure body reading
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//configure authentication
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

//configure ejs
app.set('viwes', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

//confifgure statics fils (fonts, imgs, style.css)
app.use(express.static(path.join(__dirname, 'public')));

//declare route
app.use('/pokemons', checaAutenticado, pokemonsRouter);
app.use('/batalha', checaAutenticado, batalhaRouter);
app.use('/auth', autenticacaoRouter);
app.use('/', checaAutenticado, homeRouter);

//declare api routes
app.use('/api', apiRouter);

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