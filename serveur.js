const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const PORT = 8000;

// configuration de Express et des intergiciels

app.use(expressLayouts);

app.use('/css', express.static('./statiques/css'));
app.use('/js', express.static('./statiques/js'));
app.use('/images', express.static('./statiques/images'));

app.use('/', require('./routes/index'));

app.set('views', './views');
app.set('view engine', 'ejs');


app.listen( PORT, console.log(`Serveur démarré sur le port ${PORT}`));