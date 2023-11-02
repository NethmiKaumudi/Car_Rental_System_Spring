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
                // alert('SuccessFully Generated Booking Id ');

            },
            error: function (error) {
                alert('Error: ' + error.message);

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
            // alert('Success load Customer Ids');

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
                    // alert('Successfully load Vehicle Ids ');

                });
            },
            error: function (error) {
                alert('Error: ' + error.message);
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
                $("#txtLossDamageVawier").val(data.lossDamageVawier);


                // alert('Successfully loaded Vehicle details');

            },
            error: function (error) {
                alert('Error: ' + error.message);
            },
        });
    });

// Function to get customer details by ID
    $('#selectCustomerId').on('change', function () {
        var selectedCustomerId = $(this).val();

        if (selectedCustomerId !== 'Select Id') {
            $.ajax({
                type: 'GET',
                url: BASE_URL + 'customer/' + selectedCustomerId,
                success: function (data) {
                    // Populate fields with retrieved customer details
                    $('#txtNameInput').val(data.customerName);
                    $('#txtNicInput').val(data.nic);
                    $('#txtContactInput').val(data.customerContact);
                    $('#txtEmailInput').val(data.customerEmail);
                    // alert('SuccessFully loaded Customer Data');
                },
                error: function (error) {
                    alert('Error: ' + error.message);
                    console.error('Error:', error);
                }
            });
        }
    });

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

    // document.getElementById('booking-button').addEventListener('click', function () {
    //     // Simulate booking and storing data in local storage
    //     const bookingData = {
    //         bookingId: document.querySelector("#txtBookingId").value,
    //         takenDate: document.querySelector("#txtTakenDate").value,
    //         returnDate: document.querySelector("#txtReturnDate").value,
    //         takenLocation: document.querySelector("#txtTakenLocation").value,
    //         returnLocation: document.querySelector("#txtReturnLocation").value,
    //         vehicleId: document.querySelector("#selectVehicleId").value,
    //         // rateDuration: document.querySelector("#selectVehicleRateDuration").value,
    //         // vehicleRate: document.querySelector("#txtVehicleRate").value,
    //         // freeKilometers: document.querySelector("#txtFreeKms").value,
    //         // extraKmPrice: document.querySelector("#txtExtraKmPrice").value,
    //         vehicleQty: document.querySelector("#txtVehicleQty").value,
    //         isDriverNeeded: document.querySelector("input[name='driverAvailability']:checked").value,
    //         customerId: document.querySelector("#selectCustomerId").value,
    //         // customerNic: document.querySelector("#txtNicInput").value,
    //         // customerName: document.querySelector("#txtNameInput").value,
    //         // customerContact: document.querySelector("#txtContactInput").value,
    //         customerEmail: document.querySelector("#txtEmailInput").value,
    //         lossDamageWaiver: document.querySelector("#txtLossDamageVawier").value
    //     };
    //
    //     // Check if driver is needed
    //     if (bookingData.isDriverNeeded === "yes") {
    //         // Simulate selecting a driver from driverTable (you should implement this)
    //         const selectedDriverId = selectDriverFromTable();
    //         if (selectedDriverId) {
    //             bookingData.driverId = selectedDriverId;
    //         } else {
    //             // Handle the case where no driver is available
    //             console.log("No available drivers.");
    //             return; // Exit the function
    //         }
    //     }
    //
    //     // localStorage.setItem('bookingData', JSON.stringify(bookingData));
    //     localStorage.setItem('bookingData', JSON.stringify(bookingDataArray));
    //
    //
    //     // Redirect to the response page
    //     window.location.href = '../pages/Booking Response Page.html'; // Replace with the actual URL
    // });
    document.getElementById('booking-button').addEventListener('click', function () {
        // Assuming bookingDataArray is an array of booking data objects
        const bookingDataArray = [
            {
                bookingId: document.querySelector("#txtBookingId").value,
                takenDate: document.querySelector("#txtTakenDate").value,
                returnDate: document.querySelector("#txtReturnDate").value,
                takenLocation: document.querySelector("#txtTakenLocation").value,
                returnLocation: document.querySelector("#txtReturnLocation").value,
                vehicleId: document.querySelector("#selectVehicleId").value,
                vehicleQty: document.querySelector("#txtVehicleQty").value,
                // isDriverNeeded: document.querySelector("input[name='driverAvailability']:checked").value,
                isDriverNeeded: document.querySelector("input[name='driverAvailability']:checked").value,
                customerId: document.querySelector("#selectCustomerId").value,
                customerEmail: document.querySelector("#txtEmailInput").value,
                lossDamageWaiver: document.querySelector("#txtLossDamageVawier").value
            }
            // Add more objects as needed for additional bookings
        ];

        if (bookingDataArray[0].isDriverNeeded === "yes") {
            // Simulate selecting a driver from driverTable (you should implement this)
            const selectedDriverId = selectDriverFromTable();
            if (selectedDriverId) {
                bookingDataArray[0].driverId = selectedDriverId;
            } else {
                // Handle the case where no driver is available
                console.log("No available drivers.");
                return; // Exit the function
            }
        }
        // Assuming that bookingDataArray is an array of booking data objects
        localStorage.setItem('bookingData', JSON.stringify(bookingDataArray));

        // Redirect to the response page
        window.location.href = '../pages/Booking Response Page.html'; // Replace with the actual URL
    });

    function selectDriverFromTable() {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: BASE_URL + 'driver/available',
                type: 'GET',
                success: function (data) {
                    if (data && data.length > 0) {
                        const selectedDriver = selectDriverBasedOnCriteria(data);
                        if (selectedDriver && selectedDriver.driverId) {
                            resolve(selectedDriver.driverId);
                        } else {
                            // No valid driver found, handle it gracefully
                            console.log("No valid driver selected");
                            reject('No valid driver selected');
                        }
                    } else {
                        // No available drivers
                        console.log("No available drivers.");
                        reject('No available drivers');
                    }
                },
                error: function () {
                    console.log("Error fetching drivers");
                    reject('Error fetching drivers');
                }
            });
        });
    }

    // function selectDriverBasedOnCriteria(drivers) {
    //     const availableDrivers = drivers.filter(driver => driver.isAvailable === true);
    //
    //     if (availableDrivers.length > 0) {
    //         // You can implement your selection logic here
    //         // For simplicity, we'll just return the first available driver
    //         return availableDrivers[0];
    //     } else {
    //         // If no available drivers meet the criteria, return null
    //         return null;
    //     }
    // }

    function selectDriverBasedOnCriteria(drivers) {
        // Find the first driver with driverStatus "Available"
        const selectedDriver = drivers.find(driver => driver.driverStatus === "Available");

        if (selectedDriver) {
            return selectedDriver.customerId; // Return the customerId of the selected driver
        } else {
            return null; // Return null if no valid driver is found
        }
    }


});







