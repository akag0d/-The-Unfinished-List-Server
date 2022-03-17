const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const favoritesSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    movies: [{ type: Schema.Types.ObjectId, ref: 'Movie'}],
});

module.exports = model('Favorites', favoritesSchema);