$(document).ready(function () {

    var movie_array = JSON.parse(movies);

    for (i = 0; i < movie_array.length; i++) {

        let movie = `<div class = "movie">
        <img src="${movie_array[i].image}">
            
            <div class="info">
            <div class = "name">
             <p><h3>${movie_array[i].name}</h3></p>
             </div>
             
             <div class = "desc">
             <br>
             <p>${movie_array[i].description}</p>
             </div>

             <div id="${i} "class = "button">
             <button>Like &#128077;</button>
             <div class="likes">  </div>
             </div>

         </div>`;


        $(".wrapper").append(movie);
    }

    
     var likes = 0;
        $(".button").on("click", function(){
            likes += 1;
          // let selector = $("#" + this.id).find(".likes");
       $(".likes").text(likes);
       //selector.text(likes);
 
        }) 


    
    


})
