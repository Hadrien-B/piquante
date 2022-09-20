const express = require('express');
const auth = require('../middleware/auth');//middleware d'authentification
const router = express.Router();
const multer = require('../middleware/multer-config');


const saucesCtrl = require('../controllers/sauces');

router.post('/',auth, multer, saucesCtrl.createSauce);//route POST permettant de créer une nouvelle sauce
router.put('/:id',auth, multer, saucesCtrl.modifySauce);//route PUT permettant de modifier une nouvelle sauce
router.delete('/:id',auth, saucesCtrl.deleteSauce);//route POST permettant de supprimer une nouvelle sauce
router.get('/:id',auth, saucesCtrl.getOneSauce);//route POST permettant de récupérer une sauce
router.get('/',auth, saucesCtrl.getAllSauce);//route POST permettant de récupérér toutes les sauces

module.exports = router;