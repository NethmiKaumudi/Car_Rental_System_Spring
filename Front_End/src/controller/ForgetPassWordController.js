const BASE_URL = "http://localhost:8080/Back_End/";

$(document).ready(function () {
    // Handle form submission for initiating the password reset
    $('#forgetPasswordForm').on('submit', function (e) {
        e.preventDefault();
        const email = $('#emailInput').val();

        // Make an AJAX request to your back-end to initiate the password reset
        $.ajax({
            type: 'POST',
            url: BASE_URL + 'user-password-reset/reset-password', // Your back-end endpoint for initiating the password reset
            data: {email: email},
            success: function (response) {
                // Display a message to the user
                $('#message').text('Password reset email sent to your email address.');
            },
            error: function (error) {
                $('#message').text('Error: ' + error.responseText);
            }
        });
    });
});
