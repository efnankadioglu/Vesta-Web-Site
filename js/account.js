function registerUser() {
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var user = {
        email: email,
        password: password
    };

    var users = JSON.parse(localStorage.getItem('users')) || [];

    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));

    alert('User registered successfully!');

    location.reload();
}

function loginUser() {
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    var users = JSON.parse(localStorage.getItem('users')) || [];

    var user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert('Login successful!');
        window.location.href = 'index.html';    
    } 
    else {
        alert('Invalid email or password. Please try again.');
    }
}