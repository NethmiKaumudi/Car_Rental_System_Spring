const BASE_URL = "http://localhost:8080/Back_End/";

$(document).ready(function () {

    const adminBookingData = JSON.parse(localStorage.getItem('bookingData')) || [];

    const adminTableBody = $('#Booking-table tbody');

    function addOrUpdateBookingInAdminTable(bookingData) {
        const existingRow = adminTableBody.find(`td:first-child:contains(${bookingData.bookingId})`).closest('tr');

        if (existingRow.length > 0) {
            // Update the existing row
            existingRow.replaceWith(createTableRow(bookingData));
        } else {
            // Add a new row
            adminTableBody.append(createTableRow(bookingData));
        }
    }

    function createTableRow(bookingData) {
        return `
        <tr>
            <td>${bookingData.bookingId}</td>
            <td>${bookingData.customerId}</td>
            <td>${bookingData.customerEmail}</td>
            <td>${bookingData.vehicleId}</td>
            <td>${bookingData.driverId || 'Not Applicable'}</td>
            <td>${bookingData.takenLocation}</td>
            <td>${bookingData.returnLocation}</td>
            <td>${bookingData.takenDate}</td>
            <td>${bookingData.returnDate}</td>
            <td>${bookingData.lossDamageWaiver}</td>
            <td>${bookingData.vehicleQty}</td>
            <td>
                <button class="approve-button" 
                    data-bookingdata='${JSON.stringify(bookingData)}'
                    data-customeremail="${bookingData.customerEmail}"
                    data-bookingid="${bookingData.bookingId}">Approve</button>
            </td>
        </tr>`;
    }

    if (Array.isArray(adminBookingData)) {
        adminBookingData.forEach(function (bookingData) {
            addOrUpdateBookingInAdminTable(bookingData);
        });
    } else {
        console.error('Invalid admin booking data in local storage.');
    }


    adminTableBody.on('click', '.approve-button', function () {

        const approveButton = $(this);
        const bookingData = $(this).data('bookingdata');
        if (bookingData) {
            const bookingId = $(this).data('bookingid');
            const customerEmail = $(this).data('customeremail');

            // Step 1: Send an email to the customer
            sendEmailToCustomer(customerEmail);

            // Step 2: Add booking to the booking table in the database
            addBookingToDatabase(bookingId, bookingData, function () {
                approveButton.removeClass('approve-button').addClass('approved-button').text('Approved').prop('disabled', true);
            });

            // Step 3: Update the vehicle quantity in the vehicle table
            updateVehicleQuantity(bookingData.vehicleId, bookingData.vehicleQty);

            // Step 4: If a driver is assigned, update the driver's status
            if (bookingData.driverId) {
                updateDriverStatus(bookingData.driverId);
            }

            // Additional: Remove the row from the admin table (if needed)
            $(this).closest('tr').remove();
        } else {
            console.error('Invalid booking data in the "data-bookingdata" attribute.');
        }
    });

    function sendEmailToCustomer(customerEmail) {
        $.ajax({
            type: 'POST',
            url: BASE_URL + 'email/sendEmail',
            data: {
                email: customerEmail,
                message: 'Your booking has been approved.'
            },
            success: function () {
                alert("Email Send to customer Sucessfully");
            },
            error: function () {
                alert("Email didn't send")
            }
        });
    }

    function addBookingToDatabase(bookingId, bookingData, successCallback) {
        $.ajax({
            type: 'POST',
            url: BASE_URL + 'bookings/addBooking',
            contentType: 'application/json',
            data: JSON.stringify({
                bookingId: bookingId,
                customerId: bookingData.customerId,
                vehicleId: bookingData.vehicleId,
                driverId: bookingData.driverId,
                takenLocation: bookingData.takenLocation,
                returnLocation: bookingData.returnLocation,
                takenDate: bookingData.takenDate,
                returnDate: bookingData.returnDate,
                lossDamageAgreement: bookingData.lossDamageWaiver,
                vehicleQty: bookingData.vehicleQty


            }),
            success: function () {
                if (successCallback) {
                    successCallback();
                }
                alert("Booking Added Sucessfully");

            },
            error: function () {
            }
        });
    }

    if (Array.isArray(adminBookingData)) {
        adminBookingData.forEach(function (bookingData) {
            if (bookingData) {
                addOrUpdateBookingInAdminTable(bookingData);
            }

        });
    } else {
        console.error('Invalid admin booking data in local storage.');
    }


    function updateVehicleQuantity(vehicleId, vehicleQty) {
        $.ajax({
            type: 'POST',
            url: BASE_URL + 'bookings/updateVehicleQuantity',
            data: {
                vehicleId: vehicleId,
                vehicleQty: vehicleQty
            },
            success: function () {
                // Handle success
                alert("Vehicle Qty Updated Sucessfully");

            },
            error: function () {
                // Handle error
            }
        });
    }

    function updateDriverStatus(driverId) {
        $.ajax({
            type: 'POST',
            url: BASE_URL + 'bookings/updateDriverStatus',
            data: {
                driverId: driverId,
                status: 'Booked'
            },
            success: function () {
                alert(" Driver Status Updated Sucessfully");

            },
            error: function () {
            }
        });
    }


});