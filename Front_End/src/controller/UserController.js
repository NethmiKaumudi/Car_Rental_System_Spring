const BASE_URL = "http://localhost:8080/Back_End/";

$("#SignUpBtn").click(function () {
    signUp();
});
// $("#LoginBtn").click(function () {
//     login();
// });
// $("#LoginBtn").click(function () {
//     // Add the JSON data for login
//     const username = $("#txtUserName").val();
//     const password = $("#txtPassWord").val();
//
//     // Create a login data object with the input values
//     const loginData = {
//         "userName": username,
//         "password": password
//     };
//
//     login(loginData);
// });

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
                    window.location.href = '../pages/AdminDashBoardPage.html';
                } else if (userRole === 'RegisteredCustomer') {
                    window.location.href = '../pages/RegisteredCustomerDashBoard.html';
                } else if (userRole === 'GuestCustomer') {
                    window.location.href = '../pages/GuestCustomerDashBoard.html';
                } else if (userRole === 'Driver') {
                    window.location.href = '../pages/DriverDashBoard.html';
                } else {
                    alert('Invalid user role');
                }
            } else {
                alert('Login failed: ' + response.message);
            }
        },

        error: function () {
            alert('An error occurred during login');
        },
    });
});

// $("#LoginBtn").click(function () {
//     const userName = $("#username").val();
//     const password = $("#password").val();
//
//     const loginData = {
//         "userName": userName,
//         "password": password,
//     };
//
//     $.ajax({
//         type: 'POST',
//         url: BASE_URL + 'user/login',
//         contentType: 'application/json',
//         data: JSON.stringify(loginData),
//         success: function (response) {
//             if (response.status === 'Ok') {
//                 // Redirect to the appropriate dashboard
//                 window.location.href = response.data;
//             } else {
//                 alert('Login failed: ' + response.message);
//             }
//         },
//         error: function () {
//             alert('An error occurred during login');
//         },
//     });
// });

//
// function login() {
//     const username = document.getElementById('txtUserName').value;
//     const password = document.getElementById('txtPassWord').value;
//
//     const loginData = {
//         "userName": username,
//         "password": password,
//     };
//
//     $.ajax({
//         type: 'POST',
//         url: BASE_URL + 'user/login',
//         contentType: 'application/json',
//         data: JSON.stringify(loginData),
//         success: function (response) {
//             if (response.status === 'Ok') {
//                 // Handle successful login, e.g., redirect to the appropriate dashboard
//                 const userRole = response.data.userRole;
//                 if (userRole === 'Admin') {
//                     window.location.href = '../pages/AdminCustomerPage.html';
//                 } else if (userRole === 'Driver') {
//                     window.location.href = '../pages/AdminCustomerPage.html';
//                 } else if (userRole === 'RegisteredCustomer') {
//                     window.location.href = '../pages/RegisteredCustomerDashBoard.html';
//                 } else if (userRole === 'GuestCustomer') {
//                     window.location.href = '../pages/GuestCustomerDashBoard.html';
//                 } else {
//                     // Handle login failure
//                     alert('Invalid user role');
//                 }
//             } else {
//                 // Handle login failure
//                 alert('Login failed: ' + response.message);
//             }
//         },
//         error: function () {
//             // Handle any errors
//             alert('An error occurred during login');
//         },
//     });
// }
// $("#LoginBtn").click(function () {
//     login();
// });
//
// function login() {
//     const username = document.getElementById('txtUserName').value;
//     const password = document.getElementById('txtPassWord').value;
//
//     const loginData = {
//         "userName": username,
//         "password": password,
//     };
//
//     $.ajax({
//         type: 'POST',
//         url: BASE_URL + 'user/login',
//         contentType: 'application/json',
//         data: JSON.stringify(loginData),
//         success: function (response) {
//             if (response.status === 'Ok') {
//                 const userRole = response.data.userRole;
//                 redirectToDashboard(userRole);
//             } else {
//                 alert('Login failed: ' + response.message);
//             }
//         },
//         error: function () {
//             alert('An error occurred during login');
//         },
//     });
// }
//
// function redirectToDashboard(userRole) {
//     // Define your URLs for different roles
//     const dashboardUrls = {
//         'Admin': '../pages/AdminCustomerPage.html',
//         'RegisteredCustomer': '../pages/RegisteredCustomerDashBoard.html',
//         'GuestCustomer': '../pages/GuestCustomerDashBoard.html',
//         'Driver': '../pages/driver-dashboard.html', // Define the URL for the driver dashboard
//     };
//
//     if (dashboardUrls[userRole]) {
//         window.location.href = dashboardUrls[userRole];
//     } else {
//         alert('Invalid user role');
//     }
// }
//
// function login(loginData) {
//     $.ajax({
//         type: 'POST',
//         url: BASE_URL + 'user/login',
//         contentType: 'application/json',
//         data: JSON.stringify(loginData),
//         success: function (response) {
//             // if (response.status === 'Ok') {
//             //     // Handle successful login, e.g., redirect to the appropriate dashboard
//             //     const userRole = response.data.userRole;
//             //     if (userRole === 'Admin') {
//             //         window.location.href = '../pages/AdminCustomerPage.html';
//             //     } else if (userRole === 'Driver') {
//             //         window.location.href = '../pages/DriverPage.html';
//             //     } else if (userRole === 'RegisteredCustomer') {
//             //         window.location.href = '../pages/RegisteredCustomerDashBoard.html';
//             //     } else if (userRole === 'GuestCustomer') {
//             //         window.location
//             //         href = '../pages/GuestCustomerDashBoard.html';
//             //     } else {
//             //         // Handle login failure
//             //         alert('Invalid user role');
//             //     }
//             // } else {
//             //     // Handle login failure
//             //     alert('Login failed: ' + response.message);
//             // }
//             if (response.status === 'Ok') {
//                 window.location.href = response.data; // Redirect to the appropriate dashboard page
//             } else {
//                 alert('Login failed: ' + response.message);
//             }
//         },
//         error: function () {
//             // Handle any errors
//             alert('An error occurred during login');
//         },
//     });
// }