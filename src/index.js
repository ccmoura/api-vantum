const express = require('express')
const mongoose = require('mongoose');

const port = 5050
const app = express()
app.use(require('./routes'));

mongoose.connect('mongodb+srv://ccmoura:mongopass@cluster0-nfkpt.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.listen(port, () =>{
    console.log(`Server running: http://localhost:${port}\n`)
})