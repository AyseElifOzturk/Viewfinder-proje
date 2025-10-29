document.addEventListener('DOMContentLoaded', function() {
  const signupForm = document.getElementById('signupForm');
  
  signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;
    
    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (!terms) {
      alert('Please agree to the Terms of Service and Privacy Policy');
      return;
    }
    
    // Here you would typically send a request to your backend
    // For demo purposes, we'll just simulate a successful registration
    
    console.log('Registration attempt:', {
      name,
      email,
      password: '********' // Don't log actual passwords
    });
    
    // Simulate successful registration
    setTimeout(() => {
      // Store user info
      localStorage.setItem('user_name', name);
      localStorage.setItem('user_email', email);
      
      // Redirect to login page
      alert('Account created successfully! Please log in.');
      window.location.href = 'login.html';
    }, 1000);
  });
}); 