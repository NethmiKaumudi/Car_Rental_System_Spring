$('#inputField').change(function() {
    var inputField = document.getElementById('inputField');
    var showImg = document.getElementById('showImg');

    if (inputField.files && inputField.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            var img = new Image();
            img.src = e.target.result;
            img.style.width = '170px';
            img.style.height = '120px';


            showImg.innerHTML = '';
            showImg.appendChild(img);
        };

        reader.readAsDataURL(inputField.files[0]);
    }
});

$(document).ready(function () {
    $('#register-form').submit(function (event) {
        event.preventDefault();
        var customerId = $('#customerIdInput').val();
        var nic = $('#nicInput').val();
        var name = $('#nameInput').val();
        var address = $('#addressInput').val();
        var contact = $('#contactInput').val();
        var licenceNo = $('#licenceNoInput').val();
        var email = $('#emailInput').val();
        var selectedImage = $('#inputField')[0].files[0];


        var reader = new FileReader();

        reader.onload = function (e) {
            var imageDataURL = e.target.result;
            var customer = {
                customerId: customerId,
                nic: nic,
                name: name,
                address: address,
                contact: contact,
                licenceNo: licenceNo,
                email: email,
                image: imageDataURL
            };

            localStorage.setItem('newCustomer', JSON.stringify(customer));
        };
        reader.readAsDataURL(selectedImage);

        // Redirect to the admin page
        window.location.href = 'AdminCustomerApprovedPage.html';
    });
});