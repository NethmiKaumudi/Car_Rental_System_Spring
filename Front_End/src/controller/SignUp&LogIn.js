
function signUp() {
    // Collect user data from the signup form
    const userData = {
        userId: document.getElementById('txtUserId').value,
        username: document.getElementById('txtUserName').value,
        password: document.getElementById('txtPassWord').value,
        userRole: document.getElementById('txtUserRole').value,
    };

    // Send the data to the server using AJAX
    $.ajax({
        type: 'POST',
        url: '/signup', // Replace with your Spring endpoint URL
        contentType: 'application/json',
        data: JSON.stringify(userData),
        success: function (response) {
            // Handle the response (e.g., show a success message)
            alert(response.message);

        },
        error: function (error) {
            alert(error.message);
            // Handle any errors
        },
    });
}

function login() {
    // Collect user data from the login form
    const loginData = {
        username: document.getElementById('txtUserName').value,
        password: document.getElementById('txtPassWord').value,
    };

    // Send the data to the server using AJAX
    $.ajax({
        type: 'POST',
        url: '/login', // Replace with your Spring endpoint URL
        contentType: 'application/json',
        data: JSON.stringify(loginData),
        success: function (response) {
            // Handle the response, e.g., redirect to the appropriate dashboard
            if (response === 'admin') {
                window.location.href = '/admin/dashboard';
            } else if (response === 'driver') {
                window.location.href = '/driver/dashboard';
            } else if (response === 'registered_customer') {
                window.location.href = '/customer/dashboard';
            }else if (response === 'guest_customer') {
                window.location.href = '/customer/dashboard';
            } else {
                // Handle login failure
            }
        },
        error: function () {
            // Handle any errors
        },
    });
}