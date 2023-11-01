const BASE_URL = "http://localhost:8080/Back_End/";

$(document).ready(function () {
    generateNextBookingId();

    function generateNextBookingId() {
        console.log("Generating next booking ID...");
        $.ajax({
            url: BASE_URL + 'customer/generate-next-customer-id', // Adjust the URL as needed
            method: 'GET',
            success: function (data) {
                $('#customerIdInput').val(data); // Populate the next customer ID in the input field
            },
            error: function (error) {
                console.error('Error fetching the next customer ID: ' + error.message);
            }
        });
    }

    $('#register-form').submit(function (e) {
        e.preventDefault();

        // Collect form data
        var formData = {
            customerId: $('#customerIdInput').val(),
            nic: $('#nicInput').val(),
            name: $('#nameInput').val(),
            address: $('#addressInput').val(),
            contact: $('#contactInput').val(),
            licenceNo: $('#licenceNoInput').val(),
            email: $('#emailInput').val(),
            // Add code to get the image file
        };

        // Add the image as a data URL to the form data
        var fileInput = document.getElementById('inputField');
        if (fileInput.files.length > 0) {
            var imageFile = fileInput.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                formData.image = e.target.result;

                // Save the form data to local storage
                localStorage.setItem('newCustomer', JSON.stringify(formData));

                // Redirect to the success page
                window.location.href = '../pages/CustomerAddMsgPage.html';
            };
            reader.readAsDataURL(imageFile);
        }
    });
});

