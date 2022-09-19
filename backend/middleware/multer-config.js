//Middleware de gestion des fichiers grâce au package multer
const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

//constante storage qui contient la logique pour indiquer à Multer où enregistrer les fichiers entrants
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');//remplace les espaces par des underscores
        const extension = MIME_TYPES[file.mimetype];//résolution de l'extension de fichier
        callback(null, name + Date.now() + '.' + extension);//ajout d'un timestamp comme nom de fichier
    }
});

module.exports = multer({ storage: storage }).single('image');//export de l'élément configuré, seuls les fichiers images seront téléchargés