const express = require('express');

const router = express.Router();

const middleware = (req, res, next) => {
  console.log("I have access to req");

  next();
};

router.get('/', middleware, (_req, res) => {
    res.json({
        status: "ok",
    });
});

module.exports = router;