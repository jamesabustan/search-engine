const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const axios = require('axios').default;

app.set("view engine", "ejs");

// app.use(express.urlencoded({extended: false}));
// app.use(express.static('public'));
app.use(express.static('views'));

//route for home
app.get("/results", (req, res) =>{
    async function getResults() {
        try {
          const response = await axios.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyDrslYgDkwY3EExeY_LsNFwTImkwwikHwk&cx=016475248988972668580:dlwhrrkbeox&q=test');
          let results = (response.data)
          res.render("results", {results : results});
          console.log(results);
        } catch (error) {
          console.error(error);
        }
      }
      getResults();
    });



//route for search

// route for results

// app.get("/search", async function (req, res){
//     let url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyDrslYgDkwY3EExeY_LsNFwTImkwwikHwk&cx=016475248988972668580:dlwhrrkbeox&q=test";
//     let response = await axios.get(url);
//     res.send(response.data.items); 
// });



app.listen(PORT, function() {
    console.log(`Ironman - I love you ${PORT}`);
})