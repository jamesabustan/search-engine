const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(express.static('view'));

app.listen(PORT, function() {
    console.log(`I love you ${PORT}`);
});