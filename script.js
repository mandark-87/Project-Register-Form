document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    // Here you would typically send the data to a server
    // For this example, we'll just alert the user
    alert(`User  registered successfully!\nUsername: ${username}`);

    // Clear the form
    this.reset();
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Here you would typically check the credentials against a server
    // For this example, we'll just alert the user
    alert(`Login attempted!\nUsername: ${username}`);

    // Clear the form
    this.reset();
});