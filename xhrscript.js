"use strict"; //makes sure I'm doing it right
document.addEventListener("DOMContentLoaded", function() { //loads page after html loads
    //alert ("loaded");
    document.querySelector("#text").addEventListener("click", function() {
        this.value = ""
    });

    document.querySelector("#button").addEventListener("click", function() {
console.log("button clicked");
var query= document.querySelector("#text").value;
  console.log("query=" + query);
if (text.value == 'Search wikipedia') {
            text.value = "Please enter a search term";
        } else {
            xhr(query);
            document.querySelector("#text").value = "Search Wikipedia";
        }
    });

    function xhr(query) {
        console.log("xhr called");
        if (window.XMLHttpRequest) var xhr = new XMLHttpRequest();
        //console.log(xhr);
        makeRequest(query, xhr);
    }

    function makeRequest(query, xhr) {
        if ("withCredentials" in xhr) {
            console.log("processing xhr");
            var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&callback=callback&titles=" + "frog";

            try {
                console.log("in try");
                xhr.onload = processResponse;
                xhr.open('GET', url, true);
                // xhr.setRequestHeader("Content-type", "text/plain");
                // xhr.responseType = 'text';
                xhr.send();
            } catch (e) {
                console.log(e);
            }
        } else {
            console.log("no credentials");
        }

function callback() {
console.log("callback called");
}
        function processResponse() {
            console.log("processResponse called");
            console.log(xhr.readyState, xhr.status);
            if (xhr.readyState === 4 && 200<=xhr.status<=400) {
                xhr.responseXML;
var data = xhr.response;
                console.log(data);
//                document.querySelector("#result1").innerHTML = batchcomplete.query.pages;
            }
        }
    }

}); //close DOMcontentLoaded function

//https://en.wikipedia.org/w/api.php
