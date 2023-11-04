const BASE_URL = "http://localhost:8080/Back_End/";

$(document).ready(function () {
    $('#forgetPasswordForm').on('submit', function (e) {
        e.preventDefault();
        const email = $('#emailInput').val();

        $.ajax({
            type: 'POST',
            url: BASE_URL + 'user-password-reset/reset-password',
            data: {email: email},
            success: function (response) {
                $('#message').text('Password reset email sent to your email address.');
            },
            error: function (error) {
                $('#message').text('Error: ' + error.responseText);
            }
        });
    });
});
