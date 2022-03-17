const router = require('express').Router();
const mongoose = require('mongoose');

const Favorites = require('../models/Favorites.model');
const { isAuthenticated } = require('../middleware/jwt.middleware');

router.post('/favorites', isAuthenticated, (req, res, next) => {
    const { _id } = req.payload;
    
    Favorites.create({ user: _id, movies: [] })
        .then((response) => res.json(response))
        .catch((err) => next(err));
});

router.get('/favorites', (req, res, next) => {
    Favorites.find()
    .populate('movies')
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.get('/favorites/:favoritesId', (req, res, next) => {
    const { favoritestId } = req.params;

    if(!mongoose.Types.ObjectId.isValid(favoritesId)) {
        res.status(400).json({ message: 'Specified Id is not valid' });
        return;
    }

    Favorites.findById(moviesId)
    .populate('favorites')
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.put('/favorites/:favoritesId', (req, res, next) => {
    const { favoritesId } = req.params;

    if(!mongoose.Types.objectId.isValid(moviesId)) {
        res.status(400).json({ message: 'Specified Id is not valid' });
        return;
    }

    Favorites.findByIdAndUpdate(projectId, req.body, { new: true })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.delete('/favorites/:favoritesId', (req, res, next) => {
    const { projectId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(FavoritesId)) {
        res.status(400).json({ message: 'Specified Id is not valid' });
        return;
    }
    
    Favorites.findByIdAndRemove(projectId)
    .then(() => res.json({ message: `Movie with ${favoritesId} was removed`}))
    .catch((err) => res.json(err));
});

module.exports = router;