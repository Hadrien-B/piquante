const mongoose =require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//Modèle utilisateur
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);//Plug-in permettant qu'un e-mail ne soit pas utilisé deux fois comme identifiant

module.exports = mongoose.model('User', userSchema);