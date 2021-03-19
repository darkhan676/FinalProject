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

var email = document.getElementById('email');
var passwordd = document.getElementById('password');
var btn = document.getElementById('Btns');
btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  option = checkWhich();
  ourRequest.open('GET', "http://localhost:3000/POST");
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();
});
function renderHTML(data) {
	for (var i = 0; i < data.length; i++){
		if(data[i].email == email && data[i].password == passwordd){
			alert("login succesfully")
		}
		else
		{
			alert("Incorrect email or password!")
			break;
		}
	}
}
