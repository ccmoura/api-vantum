const mongoose = require('mongoose');

let userSchema = new Schema({  
    nome: {type: String, required: true},  
    email: {type: String, required: true}, 
    telefone: {type: String, required: true}, 
    endereco: {type: String, required: true}, 
}, {collection: 'users'}); 
   
module.exports = mongoose.model('User', userSchema);  