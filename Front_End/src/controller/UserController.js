const BASE_URL = "http://localhost:8080/Back_End/";

$("#SignUpBtn").click(function () {
    signUp();
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

$("#LoginBtn").click(function () {
    const userName = $("#userName").val();
    const password = $("#passWord").val();
    console.log(userName);
    console.log(password);

    const loginData = {
        "userId": null,
        "userName": userName,
        "password": password,
        "userRole": null,
        "userEmail": null
    };

    $.ajax({
        type: 'POST',
        url: BASE_URL + 'user/login',
        contentType: 'application/json',
        data: JSON.stringify(loginData),
        success: function (response) {
            console.log(response.state);
            if (response.state === 'Ok') {
                const userRole = response.data.userRole;
                console.log(userRole)
                if (userRole === 'Admin') {
                    window.location.href = './pages/AdminDashBoardPage.html';
                } else if (userRole === 'RegisteredCustomer') {
                    window.location.href = './pages/RegisteredCustomerDashBoard.html';
                } else if (userRole === 'GuestCustomer') {
                    window.location.href = './pages/GuestCustomerDashBoard.html';
                } else if (userRole === 'Driver') {
                    window.location.href = './pages/DriverDashBoard.html';
                } else {
                    alert('Invalid user role');
                }
            } else {
                alert('Login failed: ');
            }
        },

        error: function () {
            alert('An error occurred during login');
        },
    });
});
