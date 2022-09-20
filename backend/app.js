const express = require('express');//Importation de Express
const bodyParser = require('body-parser');
const mongoose = require('mongoose');//Importation de mongoDB
const path = require('path');

const saucesRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://hadrien:Tagadatagada@first.isqrjh7.mongodb.net/?retryWrites=true&w=majority',//connexion à mongoDB
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use(express.json());//Middleware permettant d'intercepter une requête POST
app.use('/images', express.static(path.join(__dirname, 'images')));

//CORS - sécurité
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');//Header autorisant l'accès à l'API
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');//Header permettant d'envoyer des requêtes avec les méthodes GET, POST etc
    next();
  });

//Conversion des fichiers JSON 
app.use(bodyParser.json());


app.use('/api/sauces', saucesRoutes);
app.use('/api/auth/', userRoutes);

module.exports = app;
