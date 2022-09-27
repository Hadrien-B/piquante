const express = require('express');
const auth = require('../middleware/auth');//middleware d'authentification
const router = express.Router();
const multer = require('../middleware/multer-config');


const saucesCtrl = require('../controllers/sauces');

router.post('/', auth, multer, saucesCtrl.createSauce);//route POST permettant de créer une nouvelle sauce
router.put('/:id', auth, multer, saucesCtrl.modifySauce);//route PUT permettant de modifier une nouvelle sauce
router.delete('/:id', auth, saucesCtrl.deleteSauce);//route DELETE permettant de supprimer une nouvelle sauce
router.get('/:id', auth, saucesCtrl.getOneSauce);//route GET permettant de récupérer une sauce
router.get('/', auth, saucesCtrl.getAllSauce);//route GET permettant de récupérér toutes les sauces
router.post('/:id/like', auth, saucesCtrl.likeSauce);//Route POST permettant de récupérer les likes et dislikes

module.exports = router;