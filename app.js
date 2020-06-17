const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const axios = require('axios').default;

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.static('views'));


// route for homepage
app.get('/', (req,res)=>{
    res.render("home")
})

//route for results
app.get("/results", (req, res) =>{
    let qs = req.query.search;
    let url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyDrslYgDkwY3EExeY_LsNFwTImkwwikHwk&cx=016475248988972668580:dlwhrrkbeox&q=${qs}`
    async function getResults() {
        try {
          const response = await axios.get(url);
          let results = (response.data)
          res.render("results", {results : results});
          console.log(results);
        } catch (error) {
          console.error(error);
        }
      }
      getResults();
    });


app.listen(PORT, function() {
    console.log(`Ironman - I love you ${PORT}`);
})