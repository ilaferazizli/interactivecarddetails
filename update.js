function formatcardnumber() {
    var number = document.getElementById("number").value;
    var formattedcardnumber = "";
    for (var i = 0; i < number.length; i++) {
      if (i % 4 == 0 && i != 0) {
        formattedcardnumber += "&nbsp;&nbsp;";
      }
      formattedcardnumber += number.charAt(i);
    }
    document.getElementById("displaycardnumber").innerHTML = formattedcardnumber;
  }
  function updateUsername() {
    var username = document.getElementById("username").value;
    document.getElementById("displayUsername").innerHTML = username;
  }
  
  function formatmonth() {
    var month = document.getElementById("month").value;
    document.getElementById("displaymonth").innerHTML = month;
  }

  function formatyear() {
    var year = document.getElementById("year").value;
    document.getElementById("displayyear").innerHTML = year;
  }

    function formatcvv() {
    var cvv = document.getElementById("cvv").value;
    document.getElementById("displaycvv").innerHTML = cvv;
    }

function addLogo() {
  var number = document.getElementById("number").value;
  var logo = document.getElementById("logo");
  if (number.charAt(0) == "4") {
    logo.src = "./design/Visa card.png";
  } else if (number.charAt(0) == "5") {
    logo.src = "./design/Master card.png";
  } else {
    logo.src = "./images/card-logo.svg";
  }
}

function validatecardnumber() {
    var cardnumber = document.getElementById("number").value;
    var regex = /^[0-9]{16}$/;
    if (!regex.test(cardnumber)) {
      document.getElementById("number-error").innerHTML = "Please enter a valid 16-digit card number";
    } else {
      document.getElementById("number-error").innerHTML = "";
    }
  }
  
  function validateName() {
    var username = document.getElementById("username").value;
    var regex = /^[a-zA-Z\s ]+$/;
    if (!regex.test(username)) {
      document.getElementById("name-error").innerHTML = "Only English letters";
    } else {
      document.getElementById("name-error").innerHTML = "";
    }
  }
  
  function validateMonth() {
    var month = document.getElementById("month").value;
    var regex = /^(0?[1-9]|1[0-2])$/;   
    if (!regex.test(month)) {
      document.getElementById("month-error").innerHTML = "Please enter a valid month (01-12)";
    } else {
      document.getElementById("month-error").innerHTML = "";
    }
  }
  
  function validateYear() {
    var year = document.getElementById("year").value;
    var regex = /^\d{2}$/;
    if (!regex.test(year)) {
      document.getElementById("year-error").innerHTML = "Only number (YY)";
    } else {
      document.getElementById("year-error").innerHTML = "";
    }
  }
  
  function validateCVV() {
    var cvv = document.getElementById("cvv").value;
    var regex = /^[0-9]{3,4}$/;
    if (!regex.test(cvv)) {
      document.getElementById("cvv-error").innerHTML = "Only number CVV";
    } else {
      document.getElementById("cvv-error").innerHTML = "";
    }
  }
  function validateForm() {
    var cardnumber = document.getElementById("number").value;
    var username = document.getElementById("username").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var cvv = document.getElementById("cvv").value;
    var regex = /^[0-9]{16}$/;
    var regex1 = /^[a-zA-Z\s ]+$/;
    var regex2 = /^(0?[1-9]|1[0-2])$/;
    var regex3 = /^\d{2}$/;
    var regex4 = /^[0-9]{3,4}$/;
    if (
      regex.test(cardnumber) &&
      regex1.test(username) &&
      regex2.test(month) &&
      regex3.test(year) &&
      regex4.test(cvv)
    ) {
      document.getElementById("form").style.display = "none";
      document.getElementById("success").style.display = "block";
      return false;
    } else {
      return false;
    }
  }
  function reloadPage() {
    location.reload();
  }