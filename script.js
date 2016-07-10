"use strict"; //makes sure I'm doing it right
document.addEventListener("DOMContentLoaded", function() { //loads page after html loads
    //alert ("loaded");
    document.querySelector("#text").addEventListener("click", function() {
        this.value = ""
    });

    document.querySelector("#button").addEventListener("click", function() {
var query= document.querySelector("#text").value;

for (var i in query) {
  if (i === ' ') {query[i] = "%20";}
}  console.log("query=" + query);
if (query == 'Search wikipedia' || query == '') {
            text = "Please enter a search term";
        } else { makeRequest(query);}
});


  function makeRequest(query) {
  //   $.getJSON('https://en.wikipedia.org/w/api.php?action=query&format=json&titles=' + "frog" + '&callback=?' , function(json){
  // console.log(json);
  //   )}

$.ajax({
  type: 'GET',
  url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + query + '&limit=3&namespace=0&format=json&callback=?',
jsonp: "$jsonp",
  dataType: "jsonp",
}).done(function(data) {
$("#result1").html(data[1][0]);
$("#resulta").html(data[2][0]);
$("#result2").html(data[1][1]);
$("#resultb").html(data[2][1]);
$("#result3").html(data[1][2]);
$("#resultc").html(data[2][2]);
});
}
}); //close DOMcontentLoaded function
