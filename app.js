const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes')/*requerimos esto para que nuestro middleware funcione y valide la ruta de mainRoutes.js que esta en src */

app.use(express.static('public'));
/*middleware que configuramos arriba en mainRoutes */
app.use('/', mainRoutes);

app.get('/home', (req, res) => res.sendFile(__dirname +'public/pages/shop.html'));
app.get('/ping', (req, res) => res.send('pong'));

app.listen(4000, () => console.log('servidor corriendo en http://localhost:4000'));