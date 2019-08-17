const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const mongoAddress = 'mongodb+srv://ccmoura:12345@cluster0-bg927.mongodb.net/test?retryWrites=true&w=majority';
const port = 5050;
const app = express();
app.use(bodyParser.json());

app.use(require('./routes'));
mongoose.connect(mongoAddress, {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.listen(port, () =>{
    console.log(`Server running: http://localhost:${port}\n`);
})