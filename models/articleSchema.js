const mongoose = require('mongoose');
const {Schema} = mongoose

const article= new Schema({
    titleTask: String,
    taskDetalis: String,
    taskStatus: String,
},{ timestamps: true });

const dbTask = mongoose.model('dbTask', article);
module.exports = dbTask