const BASE_URL = "http://localhost:8080/Back_End/";
$(document).ready(function () {


    // Load customer data from local storage
    var newCustomer = JSON.parse(localStorage.getItem('newCustomer'));

    if (newCustomer) {
        // Append the new customer data to the table
        var newRow = `
            <tr>
                <td>${newCustomer.customerId}</td>
                <td>${newCustomer.nic}</td>
                <td>${newCustomer.name}</td>
                <td>${newCustomer.address}</td>
                <td>${newCustomer.contact}</td>
                <td>${newCustomer.licenceNo}</td>
                <td>${newCustomer.email}</td>
                <td><img src="${newCustomer.image}" alt="Customer Image" width="100"></td>
                <td><button class="approve-button">Approve</button></td>
            </tr>`;

        $('#customer-table tbody').append(newRow);
    }
    $('#customer-table').on('click', '.approve-button', function () {
        console.log(localStorage.getItem('newCustomer'))
        var row = $(this).closest('tr');
        var customerData = {
            customerId: row.find('td:eq(0)').text(),
            nic: row.find('td:eq(1)').text(),
            customerName: row.find('td:eq(2)').text(),
            customerAddress: row.find('td:eq(3)').text(),
            customerContact: row.find('td:eq(4)').text(),
            customerLicenceNo: row.find('td:eq(5)').text(),
            customerEmail: row.find('td:eq(6)').text(),
            image: encodeImageToBase64(row.find('img')[0])
        };

        // Send an AJAX request to your backend to add data to the database
        $.ajax({
            type: 'POST',
            url: BASE_URL + 'customer',
            contentType: 'application/json', // Set the content type to JSON
            data: JSON.stringify(customerData), // Convert customerData to JSON
            success: function (data) {
                console.log(data);
                // Data successfully approved and inserted into the database
                console.log('Customer data approved and added:', data);

                // Update the button appearance
                row.find('.approve-button').text('Approved').css('background-color', 'blue').prop('disabled', true);
            },
            error: function (error) {
                alert('Error: ' + error.message);
            },
        });
    });

    function encodeImageToBase64(imageElement) {
        var canvas = document.createElement("canvas");
        canvas.width = imageElement.width;
        canvas.height = imageElement.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(imageElement, 0, 0, imageElement.width, imageElement.height);

        // Convert the image to Base64
        return canvas.toDataURL("image/jpeg"); // You can change the format as needed
    }

});

