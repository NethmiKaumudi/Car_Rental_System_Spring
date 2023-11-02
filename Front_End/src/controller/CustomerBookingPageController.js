$(document).ready(function () {
    const BASE_URL = "http://localhost:8080/Back_End/";
    console.log("Document ready!");
    loadVehicleIds();

    // Function to generate the next booking ID and populate it in the input field
    function generateNextBookingId() {
        console.log("Generating the next booking ID...");
        $.ajax({
            url: BASE_URL + 'bookings/generate-next-booking-id',
            method: 'GET',
            success: function (response) {
                $('#txtBookingId').val(response);
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
        },
        error: function (error) {
            console.error(error);
        }
    });

    function loadVehicleIds() {
        const selectVehicleId = document.getElementById("selectVehicleId");

        // Make an AJAX GET request to fetch vehicle IDs
        $.ajax({
            url: BASE_URL + "vehicle/getVehicleIds",
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
            },
            error: function (error) {
                alert('Error: ' + error.message);
            },
        });
    });

    // Function to get customer details by ID
    function getCustomerDetailsById(customerId) {
        $.ajax({
            type: 'GET',
            url: BASE_URL + 'customer/' + customerId,
            success: function (data) {
                // Populate fields with retrieved customer details
                $('#txtNameInput').val(data.customerName);
                $('#txtNicInput').val(data.nic);
                $('#txtContactInput').val(data.customerContact);
                $('#txtEmailInput').val(data.customerEmail);
            },
            error: function (error) {
                alert('Error: ' + error.message);
                console.error('Error:', error);
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
                isDriverNeeded: document.querySelector("input[name='driverAvailability']:checked").value,
                customerId: document.querySelector("#selectCustomerId").value,
                customerEmail: document.querySelector("#txtEmailInput").value,
                lossDamageWaiver: document.querySelector("#txtLossDamageVawier").value,
            }
            // Add more objects as needed for additional bookings
        ];

        // Handle the case when a driver is needed
        if (bookingDataArray[0].isDriverNeeded === "yes") {
            selectDriverFromServer()
                .then((selectedDriverId) => {
                    if (selectedDriverId) {
                        bookingDataArray[0].driverId = selectedDriverId;
                    } else {
                        // Handle the case where no driver is available
                        bookingDataArray[0].driverId = "No available driver";
                        console.log('No available driver found.');
                    }

                    // Continue with the booking
                    performBooking(bookingDataArray);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            // If a driver is not needed, set the driverId column to "Not Applicable"
            bookingDataArray[0].driverId = "Not Applicable";

            // Continue with the booking
            performBooking(bookingDataArray);
        }
    });

    function performBooking(bookingDataArray) {
        // Assuming that bookingDataArray is an array of booking data objects
        localStorage.setItem('bookingData', JSON.stringify(bookingDataArray));

        // Reload the admin table after updating the driver ID
        loadAvailableDrivers();

        // Redirect to the response page
        window.location.href = '../pages/Booking Response Page.html'; // Replace with the actual URL
    }

    function loadAvailableDrivers() {
        $.ajax({
            url: BASE_URL + 'driver/available',
            type: 'GET',
            success: function (data) {
                if (data && data.length > 0) {
                    const selectedDriver = selectDriverBasedOnCriteria(data);
                    if (selectedDriver) {
                        // Set the selected driver's ID to the admin page booking table
                        setDriverIdInTable(selectedDriver.driverId);
                    } else {
                        console.log('No valid driver found.');
                    }
                } else {
                    console.log('No available drivers.');
                }
            },
            error: function () {
                console.log('Error fetching drivers');
            }
        });
    }

    function selectDriverBasedOnCriteria(drivers) {
        const selectedDriver = drivers.find(driver => driver.driverStatus === 'Available');
        return selectedDriver || null;
    }

    function setDriverIdInTable(driverId) {
        const adminTable = document.getElementById('Booking-table');
        if (adminTable) {
            const tbody = adminTable.querySelector('tbody');
            if (tbody) {
                const firstRow = tbody.querySelector('tr:first-child');
                if (firstRow) {
                    const driverIdCell = firstRow.querySelector('td:nth-child(5)');
                    if (driverIdCell) {
                        driverIdCell.textContent = driverId;
                    } else {
                        console.log('No "driverId" cell found in the table.');
                    }
                } else {
                    console.log('No rows found in the table.');
                }
            } else {
                console.log('No tbody found in the table.');
            }
        } else {
            console.log('Admin table not found.');
        }
    }

    function selectDriverFromServer() {
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
                            reject('No valid driver selected');
                        }
                    } else {
                        // No available drivers
                        reject('No available drivers');
                    }
                },
                error: function () {
                    console.log('Error fetching drivers');
                    reject('Error fetching drivers');
                }
            });
        });
    }

// Call the function to load available drivers when needed (e.g., on page load or button click)
    loadAvailableDrivers();
});







