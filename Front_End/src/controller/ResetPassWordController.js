const BASE_URL = "http://localhost:8080/Back_End/";

$(document).ready(function () {
    $('#forgetPasswordForm').submit(function (event) {
        event.preventDefault();
        var email = $('#emailInput').val();
        $.ajax({
            type: 'POST',
            url:  BASE_URL +'user-password-reset/forgot-password',
            data: JSON.stringify({email: email}),
            contentType: 'application/json',
            success: function (data) {
                if (data === 'success') {
                    // Redirect to Reset Password page after sending the reset link
                    // window.location.href = '/pages/ResetPassWordPage.html';
                } else {
                    alert('Password reset request failed.');
                }
            }
        });
    });
});

$(document).ready(function () {
    $('#resetPasswordForm').submit(function (event) {
        event.preventDefault();
        var email = $('#emailInput').val();
        var token = $('#tokenInput').val();
        var newPassword = $('#passwordInput').val();
        $.ajax({
            type: 'POST',
            url:  BASE_URL +'user-password-reset/reset-password',
            data: JSON.stringify({email: email, token: token, newPassword: newPassword}),
            contentType: 'application/json',
            success: function (data) {
                if (data === 'success') {
                    // Redirect to a success page or login page
                    window.location.href = '../index.html';
                } else {
                    alert('Password reset failed. Please check the token and try again.');
                }
            },
            error: function (error) {
                alert('An error occurred. Please try again later.');
            }
        });
    });
});
