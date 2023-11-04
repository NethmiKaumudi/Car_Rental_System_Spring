$(document).ready(function () {
    const customerDataUrl = "http://localhost:8080/Back_End/customer/getAllCustomers";

    const tableBody = $("#customer-table tbody");

    $.ajax({
        url: customerDataUrl,
        method: "GET",
        success: function (data) {
            data.forEach(function (customer) {
                const newRow = `
                    <tr>
                        <td>${customer.customerId}</td>
                        <td>${customer.nic}</td>
                        <td>${customer.customerName}</td>
                        <td>${customer.customerAddress}</td>
                        <td>${customer.customerContact}</td>
                        <td>${customer.customerLicenceNo}</td>
                        <td>${customer.customerEmail}</td>
                        <td><img src="data:image/jpeg;base64,${customer.image}" alt="Customer Image" style="width: 100px; height: 100px;"></td>
                        <td> <button class="delete-link">Delete</button></td>
                    </tr>`;
                const row = $(newRow);
                tableBody.append(row);

                row.find(".delete-link").on("click", function () {
                    deleteCustomer(customer.customerId);
                });
            });
        },
        error: function (error) {
            console.error("Failed to load customer data: " + error);
        },
    });

    function deleteCustomer(customerId) {
        if (confirm("Are you sure you want to delete this customer?")) {
            $.ajax({
                url: "http://localhost:8080/Back_End/customer/deleteCustomer/" + customerId,
                method: "DELETE",
                success: function (response) {
                    $(`#customer-table tbody tr:contains(${customerId})`).remove();
                },
                error: function (error) {
                    console.error("Failed to delete customer: " + error);
                },
            });
        }
    }

    $('#searchField').on('input', function () {
        const searchText = $(this).val().toLowerCase();
        const rows = $('#customer-table tbody tr');

        rows.each(function () {
            const row = $(this);
            const customer = row.text().toLowerCase();

            if (customer.includes(searchText)) {
                row.show();
            } else {
                row.hide();
            }
        });
    });
});
