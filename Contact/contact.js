function validateForm() {
  if (document.getElementById('fname').value == "") {
    alert('Please enter your first name');
    document.getElementById('fname').style.borderColor="red";
    return false;
    }

  if (document.getElementById('lname').value =="" ) {
    alert('Please enter your last name');
    document.getElementById('lname').style.borderColor="red";
    return false;
  }
  
  if (document.getElementById('pnumber').value =="" ) {
    alert('Please enter your phone number');
    document.getElementById('lname').style.borderColor="red";
    return false;

  } else {
    if (document.getElementById('form').value =="lname", "fname", "pnumber") {
    alert('You have submitted the form!');
    return true;
    }
  }
}