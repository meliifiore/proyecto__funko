const express = require('express');
const router = express.Router();

router.get('/shop', (req, res) => res.send('router for shop view'))
router.get('/shop/item/:id', (req, res) => res.send('router for find and retrieve a product from an ID'))
router.get('/shop', (req, res) => res.send('router for shop view'))
router.get('/shop', (req, res) => res.send('router for shop view'))


module.exports = router