var jokeContainer = document.getElementById("joke");
var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://api.icndb.com/jokes/15');
  ourRequest.onreadystatechange = function() {
    if (ourRequest.readyState === XMLHttpRequest.DONE) {
      jokeContainer.innerHTML = JSON.parse(ourRequest.responseText).value.joke;
    }

  };
  ourRequest.send();
});