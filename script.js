function validEmail(str) {
  //your JS code here.
	  // Regular expression to validate email addresses
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Check if the string matches the email pattern
  return emailRegex.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
