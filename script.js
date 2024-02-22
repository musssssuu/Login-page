document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Perform login logic here
    console.log(`Username: ${username}, Password: ${password}`);
  });
  
  document.getElementById('facebookLogin').addEventListener('click', function() {
    // Perform Facebook login logic here
    console.log('Facebook login clicked');
  });
  
  document.getElementById('googleLogin').addEventListener('click', function() {
    // Perform Google login logic here
    console.log('Google login clicked');
  });