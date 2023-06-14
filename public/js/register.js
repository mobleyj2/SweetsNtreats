document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // const confirmPassword = document.getElementById('confirm-password').value;
    // if (password !== confirmPassword) {
    //   alert('Passwords do not match');
    //   return;
    // }
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to register');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  });
  
  // document.getElementById('show register-form').addEventListener('click', function() {
  //   document.getElementById('register-form').style.display = 'block';

  // })



