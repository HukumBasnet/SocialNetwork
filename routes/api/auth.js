const express = require('express')
const router = express.Router();
const auth = require('../../middleware/auth')

const User = require('../../models/User');

router.get('/', (req, res) => {
    res.send("Auth route");
  })



module.exports = router;