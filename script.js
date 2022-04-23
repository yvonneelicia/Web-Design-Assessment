
    function ValidateForm() {
        var name = document.forms["RegForm"]["Name"];
        var email = document.forms["RegForm"]["Email"];
        var phone = document.forms["RegForm"]["Phone"];
        var message = document.forms["RegForm"]["Message"];
  
        if (name.value == "") {
            window.alert("Please enter your name.");
            name.focus();
            return false;
        }
  
        if (message.value == "") {
            window.alert("Please enter your message.");
            address.focus();
            return false;
        }
  
        if (email.value == "") {
            window.alert(
              "Please enter a valid e-mail address.");
            email.focus();
            return false;
        }
  
        if (phone.value == "") {
            window.alert(
              "Please enter your phone number.");
            phone.focus();
            return false;
        }

    }
