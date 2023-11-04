const BASE_URL = "http://localhost:8080/Back_End/";

$(document).ready(function () {
    // Function to extract the token from the URL
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        var results = regex.exec(url);
        if (!results) return null;
        // Return null if the parameter is present but has no value
        if (!results[2]) return null;
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    const token = getParameterByName('token');

    // Handle token presence
    if (token) {
        $('#passwordResetForm').show();
    } else {
        $('#message').text('Invalid or expired token.');
    }

    $('#passwordResetForm').on('submit', function (e) {
        e.preventDefault();
        const newPassword = $('#newPassword').val();
        const confirmPassword = $('#confirmPassword').val();

        if (newPassword === confirmPassword) {
            $.ajax({
                type: 'POST',
                url: BASE_URL + 'updatePassword/update-password',
                data: { token: token, newPassword: newPassword },
                success: function (response) {
                    alert('Password updated successfully.');
                    window.location.href = '/login'; // Redirect to the login page
                },
                error: function (error) {
                    alert('Error updating password: ' + error.responseText);
                }
            });
        } else {
            alert('Passwords do not match.');
        }
    });
});
