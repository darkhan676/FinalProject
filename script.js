function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
var form = document.getElementById('form');
var container = document.getElementById("results");
var btn = document.getElementById('BtnS');

var radioList = ["POST", "historyName", "wars", "HistoryPeriod", "TheFirstHumans"];
var option;

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  option = checkWhich();
  ourRequest.open('GET', "http://localhost:3000/" + option);
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();
});

var numberOfResult = 1;

function renderHTML(data) {

  var userIdValue = document.getElementById('userId').value;

  for (var i = 0; i < data.length; i++) {
    if (option == "POST") {
      if (data[i].email == userIdValue) {
        container.insertAdjacentHTML('beforeend', "<h4> Result #" + numberOfResult +"</h2>");
        container.insertAdjacentHTML('beforeend', "<h6> Password: " + data[i].password +"</h4>");
		container.insertAdjacentHTML('beforeend', "<h6> Email id: " + data[i].id +"</h4>");
        numberOfResult++;
      }
    }
    if (option == "historyName") {
      if (data[i].name == userIdValue) {
        container.insertAdjacentHTML('beforeend', "<h4> Result #" + numberOfResult +"</h2>");
        container.insertAdjacentHTML('beforeend', "<h6> Born Year: " + data[i].year +"</h4>");
		container.insertAdjacentHTML('beforeend', "<h6> Country: " + data[i].country +"</h4>");
        numberOfResult++;
      }
    }
    if (option == "wars") {
      if (data[i].name == userIdValue) {
        container.insertAdjacentHTML('beforeend', "<h4> Result #" + numberOfResult +"</h2>");
        container.insertAdjacentHTML('beforeend', "<h6> Year: " + data[i].year +"</h4>");
		container.insertAdjacentHTML('beforeend', "<h6> Country: " + data[i].country +"</h4>");
        numberOfResult++;
      }
    }
    if (option == "HistoryPeriod") {
      if (data[i].name == userIdValue) {
       container.insertAdjacentHTML('beforeend', "<h4> Result #" + numberOfResult +"</h2>");
        container.insertAdjacentHTML('beforeend', "<h6> Year: " + data[i].year +"</h4>");
        numberOfResult++;
      }
    }
    if (option == "TheFirstHumans") {
      if (data[i].name == userIdValue) {
        container.insertAdjacentHTML('beforeend', "<h4> Result #" + numberOfResult +"</h2>");
        container.insertAdjacentHTML('beforeend', "<h6> Year: " + data[i].year +"</h4>");
        numberOfResult++;
      }
    }
  }
}

function checkWhich() {
  for (var i = 0; i < 5; i++) {
    if (document.getElementById(radioList[i]).checked == true) {
      return radioList[i];
    }
  }
}
