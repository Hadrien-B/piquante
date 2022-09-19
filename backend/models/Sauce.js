const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    userId: { type: String, required: true },//identifiant MongoDB unique de l'utilisateur qui a créé la sauce
    name: { type: String, required: true },//nom de la sauce
    manufacturer: { type: String, required: true },//fabricant de la sauce
    description: { type: String, required: true },//description de la sauce
    mainPepper: { type: String, required: true },//ingrédient épicé principal de la sauce
    imageUrl: { type: String, required: true },//URL de l'image de la sauce téléchargée par l'utilisateur
    heat: { type: Number, required: true },//mesure de la force de la sauce
    likes: { type: Number, required: true, default : 0 },//nombre d'utilisateur aimant la sauce
    dislikes: { type: Number, required: true, default : 0 },//nombre d'utilisateur n'aimant pas la sauce
    usersLiked: { type: Array, required: true },//tableau des identifiants des utilisateurs ayant aimé la sauce
    usersDisliked: { type: Array, required: true },//tableau des identifiants des utilisateurs n'ayant pas aimé la sauce
});

module.exports = mongoose.model('Sauce', sauceSchema);