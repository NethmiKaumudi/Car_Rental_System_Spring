// Add this code to your JavaScript file
$(document).ready(function () {
    const BASE_URL = "http://localhost:8080/Back_End/";

    console.log("Document ready!");
    loadVehicleIds();

    // Function to generate the next booking ID and populate it in the input field
    function generateNextBookingId() {
        console.log("Generating next booking ID...");
        $.ajax({
            url: BASE_URL + 'bookings/generate-next-booking-id',
            method: 'GET',
            success: function (response) {
                $('#txtBookingId').val(response);
            },
            error: function (error) {
                console.error(error);
            }
        });
    }

    // Call the function to generate the next booking ID when the page loads
    generateNextBookingId();
    // Get the current date in the format "YYYY-MM-DD"
    var currentDate = new Date().toISOString().split('T')[0];

    // Set the value of the "Taken Date" input field to the current date
    $('#txtTakenDate').val(currentDate);


    // Reference to your select field
    const selectField = $('#selectCustomerId');

    // Make an AJAX request to load customer IDs
    $.ajax({
        url: BASE_URL + 'customer/getCustomerIds',
        method: 'GET',
        success: function (customerIds) {
            // Clear existing options in the select field
            selectField.empty();

            // Add a default option
            selectField.append($('<option>', {
                value: '',
                text: 'Select ID'
            }));

            // Add each customer ID as an option in the select field
            customerIds.forEach(function (customerId) {
                selectField.append($('<option>', {
                    value: customerId,
                    text: customerId
                }));
            });
        },
        error: function (error) {
            console.error(error);
        }
    });

    function loadVehicleIds() {
        const selectVehicleId = document.getElementById("selectVehicleId");

        // Make an AJAX GET request to fetch vehicle IDs
        $.ajax({
            url: BASE_URL + "vehicle/getVehicleIds", // The URL of your Spring backend endpoint
            type: "GET",
            dataType: "json",
            success: function (data) {
                // Clear the select field
                selectVehicleId.innerHTML = "";

                // Add options for each vehicle ID
                data.forEach(function (vehicleId) {
                    const option = document.createElement("option");
                    option.value = vehicleId;
                    option.text = vehicleId;
                    selectVehicleId.appendChild(option);
                });
            },
            error: function (error) {
                console.error("Failed to load vehicle IDs: " + error);
            },
        });
    }


    $("#selectVehicleId, #selectVehicleRateDuration").on("change", function () {
        var vehicleId = $("#selectVehicleId").val();
        var rateDuration = $("#selectVehicleRateDuration").val();

        $.ajax({
            url: BASE_URL + 'vehicle/vehicle-detail',
            method: "GET",
            data: {
                vehicleId: vehicleId,
                rateDuration: rateDuration,
            },
            success: function (data) {
                // Update the form fields with the received data
                if (rateDuration === "Daily") {
                    $("#txtVehicleRate").val(data.dailyRate);
                    $("#txtFreeKms").val(data.freeKmADay);
                } else if (rateDuration === "Monthly") {
                    $("#txtVehicleRate").val(data.monthlyRate);
                    $("#txtFreeKms").val(data.freeKmAMonth);
                }
                $("#txtExtraKmPrice").val(data.priceExtraKm);
            },
            error: function () {
                // Handle errors
            },
        });
    });

    // Function to get customer details by ID
    function getCustomerDetailsById(customerId) {
        $.ajax({
            url: BASE_URL + 'customer/customer-details', // Replace with your endpoint URL
            method: 'GET',
            data: {
                customerId: customerId
            },
            success: function (data) {
                // Update text fields with customer details
                $('#txtNicInput').val(data.nic);
                $('#txtNameInput').val(data.customerName);
                $('#txtContactInput').val(data.customerContact);
                $('#txtEmailInput').val(data.customerEmail);
            },
            error: function () {
                // Handle errors here
            }
        });
    }

// Trigger the function when the customer ID is selected
    $('#selectCustomerId').on('change', function () {
        var selectedCustomerId = $(this).val();
        if (selectedCustomerId) {
            getCustomerDetailsById(selectedCustomerId);
        } else {
            // Clear text fields if no customer is selected
            $('#txtNicInput, #txtNameInput, #txtContactInput, #txtEmailInput').val('');
        }
    });

});
