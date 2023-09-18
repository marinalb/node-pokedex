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

const router = express.Router();

//declare routes
router.use('/captura', cors(corsOption), capturaRouter);
router.use('/status', cors(corsOption), statusRouter);

module.exports = router;