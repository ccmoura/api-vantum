const mongoose = require('mongoose');

let userSchema = new Schema({  
    nome: {type: String, required: true},  
    email: {type: String, required: true}, 
    telefone: {type: String, required: true}, 
}); 
   
module.exports = mongoose.model('User', userSchema);  