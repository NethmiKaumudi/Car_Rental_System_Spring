const BASE_URL = "http://localhost:8080/Back_End/";

$(document).ready(function () {
    // Retrieve the customer data from localStorage
    var newCustomer = JSON.parse(localStorage.getItem('newCustomer'));
    var newCustomer1 = JSON.parse(localStorage.getItem('customer'));

    console.log(newCustomer)
    console.log(newCustomer1);

    if (newCustomer) {
        // Append the new customer data to the table
        var approveButton = '<button class="approve-button">Approve</button>';
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
                <td>${approveButton}</td>
            </tr>`;
        $('#customer-table tbody').append(newRow);

        // Remove the stored customer data to avoid duplication
        localStorage.removeItem('newCustomer');
    }
    $('#customer-table').on('click', '.approve-button', function () {
        var row = $(this).closest('tr');
        var customerId = row.find('td:first').text();

        // Send an AJAX request to your Spring backend to approve and insert the data
        $.ajax({
            type: 'POST',
            url: BASE_URL+'customer',
            data: {customerId: customerId},
            success: function (data) {
                // Data successfully approved and inserted into the database
                console.log('Customer data approved and added:', data);
                alert(this.success.message);

                // Update the button appearance
                row.find('.approve-button').text('Approved').css('background-color', 'blue').prop('disabled', true);
            },
            error: function (error) {
                alert(error.message);
            },
        });
    });
});
