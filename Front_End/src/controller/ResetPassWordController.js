const BASE_URL = "http://localhost:8080/Back_End/";
// const BASE_URL = "http://localhost:8080/Back_End/";


// $('#passwordResetForm').on('submit', function (e) {
//     e.preventDefault();
//     const token = getParameterByName('token'); // Function to retrieve token from URL
//     const newPassword = $('#newPassword').val();
//     const confirmPassword = $('#confirmPassword').val();
//
//     if (newPassword === confirmPassword) {
//         // Make an AJAX request to update the password
//         $.ajax({
//             type: 'POST',
//             url: '/update-password', // Your back-end endpoint for updating the password
//             data: { token: token, newPassword: newPassword },
//             success: function (response) {
//                 // Display a success message or redirect to the login page
//                 alert('Password updated successfully.');
//                 window.location.href = '/login'; // Redirect to the login page
//             },
//             error: function (error) {
//                 // Handle password update errors
//                 alert('Error updating password: ' + error.responseText);
//             }
//         });
//     } else {
//         alert('Passwords do not match.');
//     }
// });
// $(document).ready(function () {
//     const BASE_URL = "http://localhost:8080/Back_End/";
//
//     // Function to extract the token from the URL
//     function getParameterByName(name, url) {
//         if (!url) url = window.location.href;
//         name = name.replace(/[\[\]]/g, '\\$&');
//         var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
//             results = regex.exec(url);
//         if (!results) return null;
//         if (!results[2]) return '';
//         return decodeURIComponent(results[2].replace(/\+/g, ' '));
//     }
//
//     const token = getParameterByName('token');
//
//     // Handle token presence
//     if (token) {
//         // If the token is present in the URL, show the password reset form
//         $('#passwordResetForm').show();
//     } else {
//         // If the token is not present, show a message or redirect to an error page
//         $('#message').text('Invalid or expired token.');
//     }
//
//     // Handle form submission for password reset
//     $('#passwordResetForm').on('submit', function (e) {
//         e.preventDefault();
//         const newPassword = $('#newPassword').val();
//         const confirmPassword = $('#confirmPassword').val();
//
//         if (newPassword === confirmPassword) {
//             // Make an AJAX request to update the password
//             $.ajax({
//                 type: 'POST',
//                 url: BASE_URL + 'updatePassword/update-password', // Your back-end endpoint for updating the password
//                 data: {token: token, newPassword: newPassword},
//                 success: function (response) {
//                     // Display a success message or redirect to the login page
//                     alert('Password updated successfully.');
//                     window.location.href = '/login'; // Redirect to the login page
//                 },
//                 error: function (error) {
//                     // Handle password update errors
//                     alert('Error updating password: ' + error.responseText);
//                 }
//             });
//         } else {
//             alert('Passwords do not match.');
//         }
//     });
//
//     // Handle form submission for initiating the password reset
//     $('#forgetPasswordForm').on('submit', function (e) {
//         e.preventDefault();
//         const email = $('#emailInput').val();
//
//         // Make an AJAX request to your back-end to initiate the password reset
//         $.ajax({
//             type: 'POST',
//             url: BASE_URL + 'user-password-reset/reset-password', // Your back-end endpoint for initiating the password reset
//             data: {email: email},
//             success: function (response) {
//                 // Display a message to the user
//                 $('#message').text('Password reset email sent to your email address.');
//             },
//             error: function (error) {
//                 $('#message').text('Error: ' + error.responseText);
//             }
//         });
//     });
//     // $(document).ready(function () {
//     //     $('#forgetPasswordForm').on('submit', function (e) {
//     //         e.preventDefault();
//     //         const email = $('#emailInput').val();
//     //
//     //         // Make an AJAX request to your back-end to initiate the password reset
//     //         $.ajax({
//     //             type: 'POST',
//     //             url: BASE_URL + 'user-password-reset/reset-password', // Your back-end endpoint for initiating the password reset
//     //             data: {email: email},
//     //             success: function (response) {
//     //                 // Display a message to the user
//     //                 $('#message').text('Password reset email sent to your email address.');
//     //             },
//     //             error: function (error) {
//     //                 $('#message').text('Error: ' + error.responseText);
//     //             }
//     //         });
//     //     });
//     // });
// });
// const BASE_URL = "http://localhost:8080/Back_End/";
//
// $(document).ready(function () {
//     // const BASE_URL = "http://localhost:8080/Back_End/";
//
//     // Function to extract the token from the URL
//     function getParameterByName(name, url) {
//         if (!url) url = window.location.href;
//         name = name.replace(/[\[\]]/g, '\\$&');
//         var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
//         var results = regex.exec(url);
//         if (!results) return null;
//         if (!results[2]) return null; // Return null if the parameter is present but has no value
//         return decodeURIComponent(results[2].replace(/\+/g, ' '));
//     }
//
//     const token = getParameterByName('token');
//
//     // Handle token presence
//     if (token) {
//         // If the token is present in the URL, show the password reset form
//         $('#passwordResetForm').show();
//     } else {
//         // If the token is not present, show a message or redirect to an error page
//         $('#message').text('Invalid or expired token.');
//     }
//
//     // Handle form submission for password reset
//     $('#passwordResetForm').on('submit', function (e) {
//         e.preventDefault();
//         const newPassword = $('#newPassword').val();
//         const confirmPassword = $('#confirmPassword').val();
//
//         if (newPassword === confirmPassword) {
//             // Make an AJAX request to update the password
//             $.ajax({
//                 type: 'POST',
//                 url: BASE_URL + 'updatePassword/update-password', // Your back-end endpoint for updating the password
//                 data: {token: token, newPassword: newPassword},
//                 success: function (response) {
//                     // Display a success message or redirect to the login page
//                     alert('Password updated successfully.');
//                     window.location.href = '/login'; // Redirect to the login page
//                 },
//                 error: function (error) {
//                     // Handle password update errors
//                     alert('Error updating password: ' + error.responseText);
//                 }
//             });
//         } else {
//             alert('Passwords do not match.');
//         }
//     });
//
//     // Handle form submission for initiating the password reset
//     $('#forgetPasswordForm').on('submit', function (e) {
//         e.preventDefault();
//         const email = $('#emailInput').val();
//
//         // Make an AJAX request to your back-end to initiate the password reset
//         $.ajax({
//             type: 'POST',
//             url: BASE_URL + 'user-password-reset/reset-password', // Your back-end endpoint for initiating the password reset
//             data: {email: email},
//             success: function (response) {
//                 // Display a message to the user
//                 $('#message').text('Password reset email sent to your email address.');
//             },
//             error: function (error) {
//                 $('#message').text('Error: ' + error.responseText);
//             }
//         });
//     });
// });
// $(document).ready(function () {
//     const BASE_URL = "http://localhost:8080/Back_End/";
//
//     // Function to extract the token from the URL
//     function getParameterByName(name, url) {
//         if (!url) url = window.location.href;
//         name = name.replace(/[\[\]]/g, '\\$&');
//         var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
//         var results = regex.exec(url);
//         if (!results) return null;
//         if (!results[2]) return ''; // Return an empty string if the parameter is present but has no value
//         return decodeURIComponent(results[2].replace(/\+/g, ' '));
//     }
//
//     const token = getParameterByName('token');
//
//     // Handle token presence
//     if (token) {
//         // If the token is present in the URL, show the password reset form
//         $('#passwordResetForm').show();
//     } else {
//         // If the token is not present, show a message or redirect to an error page
//         $('#message').text('Invalid or expired token.');
//     }
//
//     // Handle form submission for password reset
//     $('#passwordResetForm').on('submit', function (e) {
//         e.preventDefault();
//         const newPassword = $('#newPassword').val();
//         const confirmPassword = $('#confirmPassword').val();
//
//         if (newPassword === confirmPassword) {
//             // Make an AJAX request to update the password
//             $.ajax({
//                 type: 'POST',
//                 url: BASE_URL + 'updatePassword/update-password', // Your back-end endpoint for updating the password
//                 data: { token: token, newPassword: newPassword },
//                 success: function (response) {
//                     // Display a success message or redirect to the login page
//                     alert('Password updated successfully.');
//                     window.location.href = '/login'; // Redirect to the login page
//                 },
//                 error: function (error) {
//                     // Handle password update errors
//                     alert('Error updating password: ' + error.responseText);
//                 }
//             });
//         } else {
//             alert('Passwords do not match.');
//         }
//     });
//
//     // Handle form submission for initiating the password reset
//     $('#forgetPasswordForm').on('submit', function (e) {
//         e.preventDefault();
//         const email = $('#emailInput').val();
//
//         // Make an AJAX request to your back-end to initiate the password reset
//         $.ajax({
//             type: 'POST',
//             url: BASE_URL + 'user-password-reset/reset-password', // Your back-end endpoint for initiating the password reset
//             data: { email: email },
//             success: function (response) {
//                 // Display a message to the user
//                 $('#message').text('Password reset email sent to your email address.');
//             },
//             error: function (error) {
//                 $('#message').text('Error: ' + error.responseText);
//             }
//         });
//     });
// });
$(document).ready(function () {
    // Function to extract the token from the URL
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        var results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return null; // Return null if the parameter is present but has no value
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    const token = getParameterByName('token');

    // Handle token presence
    if (token) {
        // If the token is present in the URL, show the password reset form
        $('#passwordResetForm').show();
    } else {
        // If the token is not present, show a message or redirect to an error page
        $('#message').text('Invalid or expired token.');
    }

    // Handle form submission for password reset
    $('#passwordResetForm').on('submit', function (e) {
        e.preventDefault();
        const newPassword = $('#newPassword').val();
        const confirmPassword = $('#confirmPassword').val();

        if (newPassword === confirmPassword) {
            // Make an AJAX request to update the password
            $.ajax({
                type: 'POST',
                url: BASE_URL + 'updatePassword/update-password', // Your back-end endpoint for updating the password
                data: { token: token, newPassword: newPassword },
                success: function (response) {
                    // Display a success message or redirect to the login page
                    alert('Password updated successfully.');
                    window.location.href = '/login'; // Redirect to the login page
                },
                error: function (error) {
                    // Handle password update errors
                    alert('Error updating password: ' + error.responseText);
                }
            });
        } else {
            alert('Passwords do not match.');
        }
    });
});
