document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("searchButton").addEventListener("click", function(){
        let searchQuery = document.getElementById("searchBar").value;

        fetch("/search")
        .then(function (response){
            return response.json();
        }).then((json) => {
            console.log(json);
          });
    });
    document.getElementById("tryButton").addEventListener("click", function(){
        let searchQuery = document.getElementById("searchBar").value;
    });



});