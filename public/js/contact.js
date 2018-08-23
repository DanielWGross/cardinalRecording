// Event Handler for Submit Button
// Grab submit button.
const submitButton = document.querySelector('.main-btn');
// Add click event handler to submit button
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  // Create new object with the values from the form
  const newContact = {
    name: document.querySelector('#name').value.trim(),
    email: document.querySelector('#email').value.trim(),
    subject: document.querySelector('#subject').value.trim(),
    message: document.querySelector('#message').value.trim(),
  };
  // POST fetch call passing newContact object
  fetch('/', {
    method: "POST",
    // Set headers for JSON
    headers: 
    {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newContact)
    // Once complete...
  }).then(response => {
    // Reset values of contact form
    document.querySelector('#name').value = "";
    document.querySelector('#email').value = "";
    document.querySelector('#subject').value = "";
    document.querySelector('#message').value = "";
  });
});