$(document).ready(function () {
    const BASE_URL = "http://localhost:8080/Back_End/";

    $('#txtCustomerIdInput').keydown(function (e) {
        if (e.keyCode === 13) {
            e.preventDefault(); // Prevent form submission
            let customerId = $('#txtCustomerIdInput').val();
            searchCustomerAndPopulateFields(customerId);
        }
    });


    function searchCustomerAndPopulateFields(customerId) {
        $.ajax({
            url: BASE_URL + 'customer?id=' + customerId,
            method: 'GET',
            // dataType: "json",
            // success: function (response) {
            //     console.log("Received response from backend:", response);
            //
            //     let customers = response.data;
            //     if (customers.length > 0) {
            //         let cus = customers.find(cus => cus.customerId === customerId);
            //         if (cus) {
            //             console.log("Customer data to populate:", cus);
            //             $("#txtNicInput").val(cus.nic);
            //             $("#txtNameInput").val(cus.customerName);
            //             $("#txtAddressInput").val(cus.customerAddress);
            //             $("#txtContactInput").val(cus.customerContact);
            //             $("#txtLicenceNoInput").val(cus.customerLicenceNo);
            //             $("#txtEmailInput").val(cus.customerEmail);
            //             // ... (rest of the code)
            //         } else {
            //             // ... (rest of the code)
            //         }
            //     }
            // },
            success: function (response) {
                console.log("Received response from backend:", response);

                // Access the data property
                let customerData = response.data;

                // Populate the input fields with customer data
                $("#txtNicInput").val(customerData.nic);
                $("#txtNameInput").val(customerData.customerName);
                $("#txtAddressInput").val(customerData.customerAddress);
                $("#txtContactInput").val(customerData.customerContact);
                $("#txtLicenceNoInput").val(customerData.customerLicenceNo);
                $("#txtEmailInput").val(customerData.customerEmail);
            },
            error: function (error) {
                console.log("Failed to fetch customer data: " + error);
                alert("Error occurred while fetching data. Check the console for details.");
            }

        });
    }

    $("#btnUpdate").click(function () {
        let customerId = $("#txtCustomerIdInput").val();
        let nic = $('#txtNicInput').val();
        let customerName = $('#txtNameInput').val();
        let customerAddress = $('#txtAddressInput').val();
        let customerContact = $('#txtContactInput').val();
        let customerLicenceNo = $('#txtLicenceNoInput').val();
        let customerEmail = $('#txtEmailInput').val();


        // Create an object with the updated data
        let updateCustomerData = {
            customerId: customerId,
            nic: nic,
            customerName: customerName,
            customerAddress: customerAddress,
            customerContact: customerContact,
            customerLicenceNo: customerLicenceNo,
            customerEmail: customerEmail

        };

        // Send an AJAX request to update the driver
        $.ajax({
            url: BASE_URL + 'customer',
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(updateCustomerData),
            success: function (resp) {
                alert(resp.message);
                // updateDriverRow(updateCustomerData); // Update the row in the table
                clearCustomerInputFields();
            },
            error: function (error) {
                alert(error.message);
            }
        });
    });

    function clearCustomerInputFields() {
        $("#txtCustomerIdInput,#txtNicInput,#txtNameInput,#txtAddressInput,#txtContactInput,#txtLicenceNoInput,#txtEmailInput").val("");
        $("#txtCustomerIdInput").focus();
    }

})
;
