$(document).ready(function(){

var animals = ['cat', 'dog', 'horse', 'goldfish', 'goat', 'donkey', 'squirrel'];


function renderButtons() {

  $("#btns").empty();

        
        for (var i = 0; i < animals.length; i++) {

          var a = $("<button>");
          
          a.addClass("btn btn-primary animalia");
          
          a.attr("data-animal", animals[i]);
          
          a.text(animals[i]);
          
          $("#btns").append(a);
        }
      }

       $("#add-gif").on("click", function(event) {
      
        event.preventDefault();

        
        var animal = $("#giphy-input").val();
        
        animals.push(animal);

        
     renderButtons();
      });

      renderButtons();
       


 $(document).on("click", '.animalia', function() {


 	event.preventDefault();
      
      var button = $(this).data('animal');
      
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + button + "&api_key=dc6zaTOxFJmzC&limit=10";


      $.ajax({
          url: queryURL,
          method: "GET"
        })
      
        .done(function(response) {
      
          var results = response.data;
          console.log(response);
          
          for (var i = 0; i < results.length; i++) {
              
              var gifDiv = $("<div class='item'>");

              var gifImage = $("<img>");
              var rating = results[i].rating;
              var p = $("<p>").text("Rating: " + rating);

             
              gifImage.attr("src", results[i].images.fixed_height.url);

              
              gifDiv.append(p);
              gifDiv.append(gifImage);

              
              $("#gifs").prepend(gifDiv);
            } 
          })
        });
    
})


















































