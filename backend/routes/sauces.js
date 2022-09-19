const express = require('express');
const router = express.Router();

const saucesCtrl = require('../controllers/sauces');

router.post('/', saucesCtrl.createSauce);//route POST permettant de créer une nouvelle sauce
router.put('/:id', saucesCtrl.modifySauce);//route PUT permettant de modifier une nouvelle sauce
router.delete('/:id', saucesCtrl.deleteSauce);//route POST permettant de supprimer une nouvelle sauce
router.get('/:id', saucesCtrl.getOneSauce);//route POST permettant de récupérer une sauce
router.get('/', saucesCtrl.getAllSauce);//route POST permettant de récupérér toutes les sauces

module.exports = router;