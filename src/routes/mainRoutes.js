const express = require('express');
const router = express.Router(); /* este metodo nos permite tener muchos rutas separadas en distintas carpetas y despues hacer
que todos se lean desde app.js */

router.get('/home', (req, res) => res.send('router for home view'));/*ruta para la vista de inicio */
router.get('/contact', (req, res) => res.send('router for contact view'));
router.get('/about', (req, res) => res.send('router for about view'));
router.get('/faqs', (req, res) => res.send('router for faqs views'));
module.exports = router