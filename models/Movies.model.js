const mongoose = require ('mongoose');
const { model, Schema } = mongoose;

const movieSchema = new Schema({
    title: String,
    year: Number,
    
})

module.exports = model('Movie', movieSchema );