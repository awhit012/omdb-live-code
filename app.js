// Movie poster getter from OMDB API

// event listener to send data from form to OMDB API

$( document ).ready(function(){
  myapp = new App();
  myapp.addEventListener();
});

function App(){
  this.$searchButton = $('#searchButton');
  this.$searchInput  = $('#searchInput');
  this.$posterContainer = $('#posterContainer');
}

App.prototype.addEventListener = function(){
  var app = this;
  this.$searchButton.click( function(){
    app.sendQuery(event);
  });
};

App.prototype.sendQuery = function() {
  event.preventDefault();
  var searchInput = this.$searchInput.val();
  this.makeAjaxCall(searchInput)
};

App.prototype.makeAjaxCall = function(searchInput){
  var app = this;
  $.ajax({
    url: "http://www.omdbapi.com/?t="+ searchInput +"&y=&plot=short&r=json",
    }).done(function(data) {
      app.addPosterToPage(data.Poster)
    });
};

App.prototype.addPosterToPage = function(poster){
  this.$posterContainer.html("<img src=" + poster + ">")
}


// data.Poster
