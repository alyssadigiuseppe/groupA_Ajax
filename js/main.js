(function (){
  var httpRequest,
  ajaxText = document.querySelector('.placeholder'),
  ajaxButton = document.querySelector('.wrapper');

  function makeRequest(url) {
    httpRequest = new XMLHttpRequest();

    if(!httpRequest) {
      console.log('Giving up, cannot use Ajax');
      return false;
    }

    httpRequest.onreadystatechange = showResults;
    httpRequest.open('GET', url);
    httpRequest.send();
  }
//i need to change stuff blah blah blah
  function showResults() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) { // good to go
      if(httpRequest.status === 200) { // status ok good to work with
        var response = httpRequest.responseText; // data we got back
        ajaxText.innerHTML = response; // switching out paragrph tag
      } else {
        console.log('There was an error with your request');
      }
    }
  }

  ajaxButton.addEventListener('click', function() {makeRequest('text.txt');}, false);
  //add listener, run its own function and pass this ^ into it (url is text.txt)

})();
