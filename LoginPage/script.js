function View() {
  var password = document.getElementById("password");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

function Verify() {
  var e = document.getElementById("email");
  var p = document.getElementById("password");
  var Email = e.value;
  var Password = p.value;

  if (Email === "admin" && Password === "admin") {
    var forms = document.getElementsByClassName("Form");
    for (var i = 0; i < forms.length; i++) {
      forms[i].style.display = "none";
    }

    var lsElements = document.getElementsByClassName("LS");
    for (var j = 0; j < lsElements.length; j++) {
      lsElements[j].style.display = "block";
    }
  } else if (Email === "" && Password === "") {
    alert("Must Fill up the Form");
  } else if (Password === "") {
    alert("Password is Missing");
  } else if (Email === "") {
    alert("Email is Missing");
  } else {
    alert("Invalid Email or Password");
  }
}
