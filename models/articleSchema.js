const mongoose = require('mongoose');
const {Schema} = mongoose

const articleSchema = new Schema({
    titleTask: String,
    taskDetalis: String,
    taskStatus: String,
},{ timestamps: true });

const dbTask = mongoose.model(mongoose.model('dUser', articleSchema));
module.exports = dbTask