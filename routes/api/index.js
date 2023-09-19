const express = require('express');
const cors = require('cors');

//configure cors
const corsOption = {
    origin: '*',
    optionsSuccessStatus: 200, 
}

//import routes
const capturaRouter = require('./captura');
const statusRouter = require('./status');
const pokemonsRouter = require('./pokemons');

const router = express.Router();

router.use(express.json());

//declare routes
router.use('/captura', cors(corsOption), capturaRouter);
router.use('/status', cors(corsOption), statusRouter);
router.use('/pokemons', cors(corsOption), pokemonsRouter);

module.exports = router;