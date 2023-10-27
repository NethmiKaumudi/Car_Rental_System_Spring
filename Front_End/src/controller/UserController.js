const BASE_URL = "http://localhost:8080/Back_End/";

$("#SignUpBtn").click(function () {
    signUp();
});
$("#LoginBtn").click(function () {
    login();
});


function signUp() {
    const userId = document.getElementById('txtUserId').value;
    if (!userId) {
        alert('Please provide a user ID.');
        return;
    }


    const userData = {
        "userId": userId,
        "userName": document.getElementById('txtUserName').value,
        "password": document.getElementById('txtPassWord').value,
        "userRole": document.getElementById('txtUserRole').value,
        "userEmail": document.getElementById('txtUserEmail').value,
    };
    console.log(userData);
    console.log(JSON.stringify(userData));

    // Send the data to the server using AJAX
    $.ajax({
        type: 'POST',
        url: BASE_URL + 'user/signUp',
        contentType: 'application/json',
        data: JSON.stringify(userData),
        success: function (response) {
            console.log(userData);

            alert(response.message);
        },
        error: function (error) {
            console.log(userData);

            alert(error.message);
        },
    });
}

function login() {
    const username = document.getElementById('txtUserName').value;
    const password = document.getElementById('txtPassWord').value;

    const loginData = {
        "userName": username,
        "password": password,
    };

    $.ajax({
        type: 'POST',
        url: BASE_URL + 'user/login',
        contentType: 'application/json',
        data: JSON.stringify(loginData),
        success: function (response) {
            if (response.status === 'Ok') {
                // Handle successful login, e.g., redirect to the appropriate dashboard
                const userRole = response.data.userRole;
                if (userRole === 'admin') {
                    window.location.href = '../pages/AdminCustomerPage.html';
                } else if (userRole === 'driver') {
                    window.location.href = '../pages/AdminCustomerPage.html';
                } else if (userRole === 'registered_customer') {
                    window.location.href = '../pages/RegisteredCustomerDashBoard.html';
                } else if (userRole === 'guest_customer') {
                    window.location.href = '../pages/GuestCustomerDashBoard.html';
                } else {
                    // Handle login failure
                    alert('Invalid user role');
                }
            } else {
                // Handle login failure
                alert('Login failed: ' + response.message);
            }
        },
        error: function () {
            // Handle any errors
            alert('An error occurred during login');
        },
    });
}

