const BASE_URL = "http://localhost:8080/Back_End/";

$("#SignUpBtn").click(function () {
    signUp();
});
$("#LoginBtn").click(function () {
    login();
});

// function signUp() {
//     // Collect user data from the signup form
//     const userData = {
//         userId: document.getElementById('txtUserId').value,
//         username: document.getElementById('txtUserName').value,
//         password: document.getElementById('txtPassWord').value,
//         userRole: document.getElementById('txtUserRole').value,
//         userEmail: document.getElementById('txtUserEmail').value,
//
//     };
//
//     // Send the data to the server using AJAX
//     $.ajax({
//         type: 'POST',
//         url: BASE_URL + 'user', // Replace with your Spring endpoint URL
//         contentType: 'application/json',
//         data: JSON.stringify(userData),
//         success: function (response) {
//             console.log(userData);
//             console.error("Error:", response.responseJSON.details);
//             alert("Error: " + response.responseJSON.message);
//         },
//         error: function (error) {
//             console.log(userData);
//
//             console.error("Error:", error.responseJSON.details);
//             alert("Error: " + error.responseJSON.message);
//         },
//     });
//     // let formData = $("#User-Form").serialize();
//     // $.ajax({
//     //     url: BASE_URL + "user",
//     //     method: "post",
//     //     data: formData,
//     //     success: function (res) {
//     //         alert(res.responseJSON.message);
//     //     },
//     //     error: function (error) {
//     //         alert(error.responseJSON.message);
//     //     }
//     // });
//
//
// // function login() {
// //     // Collect user data from the login form
// //     const loginData = {
// //         username: document.getElementById('txtUserName').value,
// //         password: document.getElementById('txtPassWord').value,
// //     };
// //
// //     // Send the data to the server using AJAX
// //     $.ajax({
// //         type: 'POST',
// //         url: '/login', // Replace with your Spring endpoint URL
// //         contentType: 'application/json',
// //         data: JSON.stringify(loginData),
// //         success: function (response) {
// //             // Handle the response, e.g., redirect to the appropriate dashboard
// //             if (response === 'admin') {
// //                 window.location.href = '/admin/dashboard';
// //             } else if (response === 'driver') {
// //                 window.location.href = '/driver/dashboard';
// //             } else if (response === 'registered_customer') {
// //                 window.location.href = '/customer/dashboard';
// //             }else if (response === 'guest_customer') {
// //                 window.location.href = '/customer/dashboard';
// //             } else {
// //                 // Handle login failure
// //             }
// //         },
// //         error: function () {
// //             // Handle any errors
// //         },
// //     });
// }
function signUp() {
    const userId = document.getElementById('txtUserId').value;
    if (!userId) {
        alert('Please provide a user ID.');
        return; // Prevent the API call if userId is empty
    }

    // Continue with the API call and data submission
    const userData = {
        userId,
        userName: document.getElementById('txtUserName').value,
        password: document.getElementById('txtPassWord').value,
        userRole: document.getElementById('txtUserRole').value,
        userEmail: document.getElementById('txtUserEmail').value,
    };

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
        username,
        password,
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

