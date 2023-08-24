const express = require('express');

const router = express.Router();

router.get('/', (requete, reponse)=>{
    reponse.render('index', {
        'titre': 'Exemple de titre',
        'login': 'joseph@gmail.com'
    });
});
router.get('/listeUsers', (requete, reponse)=>{
    reponse.render('listeusagers', {
        'titre': 'Page liste des usagers',
        'login': 'joseph@gmail.com',
        'listeusers': [{}]
    });
});
router.get('/listeLivres', (requete, reponse)=>{
    reponse.render('listelivres', {
        'titre': 'Page liste des usagers',
        'login': 'joseph@gmail.com',
        'listelivres': [{}]
    });
});
router.get('/quitter', (requete, reponse)=>{
    reponse.render('quitter', {
        'titre': 'Sortie du site',
        'login': 'joseph@gmail.com'
    });
});

module.exports = router;