const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');


//création d'un compte utilisateur
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)//Salage du mot de passe x10
        .then(hash => {
            const user = new User({//Création de l'utilisateur unique dans la base de données
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

//fonction qui vérifie l'existence d'un utilisateur et la validité du mot de passe renseigné
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)//Comparaison du mot de passe reçu avec le hash dans la base de données
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(//La méthode  sign()  du package  jsonwebtoken  utilise une clé secrète pour encoder un token
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }//Le token est valable 24h
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};