document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("searchButton").addEventListener("click", function(){
        let searchQuery = document.getElementById("searchBar").value;

        fetch("/search")
        .then(function (response){
            return response.json();
        }).then((data) => {
            console.log(data);
          });
    });
    document.getElementById("tryButton").addEventListener("click", function(){
        let searchQuery = document.getElementById("searchBar").value;
    });



});