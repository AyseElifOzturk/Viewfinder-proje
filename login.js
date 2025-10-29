document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    
    // Basic validation
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    
    // Here you would typically send a request to your backend
    // For demo purposes, we'll just simulate a successful login
    
    console.log('Login attempt:', {
      email,
      password: '********', // Don't log actual passwords
      remember
    });
    
    // Simulate successful login
    setTimeout(() => {
      // Store in localStorage if remember is checked
      if (remember) {
        localStorage.setItem('user_email', email);
      }
      
      // Redirect to home page
      window.location.href = 'homePage.html';
    }, 1000);
  });
  
  // Check if user email is stored in localStorage
  const storedEmail = localStorage.getItem('user_email');
  if (storedEmail) {
    document.getElementById('email').value = storedEmail;
    document.getElementById('remember').checked = true;
  }
}); 