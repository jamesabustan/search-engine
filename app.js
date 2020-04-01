const axios = require('axios');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(express.static('view'));


app.get("/search", async function (req, res){
    let url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyDrslYgDkwY3EExeY_LsNFwTImkwwikHwk&cx=016475248988972668580:dlwhrrkbeox&q=test";
    let response = await axios.get(url);
    res.send(response.data.items); 
});

app.listen(PORT, function() {
    console.log(`I love you ${PORT}`);
});