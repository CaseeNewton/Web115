    // JavaScript code for form validation
		
// Retrieve the input field element using JavaScript
const form = document.getElementById('myForm');
const inputField = document.getElementById('inputField');

// Regular expression pattern for alphanumeric input
const alphanumericPattern = /^[a-zA-Z0-9]+$/;

// Event listener for form submission
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  const inputValue = inputField.value;

  // Check if the input value matches the pattern
  if (alphanumericPattern.test(inputValue)) {
    // Valid input: display confirmation
    alert('Alphanumeric Form Submitted Successfully!');
  } else {
    // Invalid input: display error message
    alert('Error: Please Enter Alphanumeric Characters Only.');
  }
});
