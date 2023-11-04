const BASE_URL = "http://localhost:8080/Back_End/";

$(document).ready(function () {
    //
    // // Retrieve the booking data from local storage
    // const adminBookingData = JSON.parse(localStorage.getItem('bookingData')) || [];
    //
    // // Reference to the admin table body
    // const adminTableBody = $('#Booking-table tbody');
    //
    // // Check if adminBookingData is an array
    // if (Array.isArray(adminBookingData)) {
    //     // Loop through the booking data and add it to the admin table
    //     adminBookingData.forEach(function (bookingData) {
    //         addBookingToAdminTable(bookingData);
    //     });
    // } else {
    //     // Handle the case where adminBookingData is not an array
    //     console.error('Invalid admin booking data in local storage.');
    // }
    //
    // function addBookingToAdminTable(bookingData) {
    //     const newRow = `
    //     <tr>
    //         <td>${bookingData.bookingId}</td>
    //                     <td>${bookingData.customerId}</td>
    //
    //         <td>${bookingData.customerEmail}</td>
    //         <td>${bookingData.vehicleId}</td>
    //         <td>${bookingData.driverId || 'Not Applicable'}</td>
    //         <td>${bookingData.takenLocation}</td>
    //         <td>${bookingData.returnLocation}</td>
    //         <td>${bookingData.takenDate}</td>
    //         <td>${bookingData.returnDate}</td>
    //         <td>${bookingData.lossDamageWaiver}</td>
    //         <td>${bookingData.vehicleQty}</td>
    //         <td>
    //             <button class="approve-button"
    //                 data-bookingdata='${JSON.stringify(bookingData)}'
    //                 data-customeremail="${bookingData.customerEmail}"
    //                 data-bookingid="${bookingData.bookingId}">Approve</button>
    //         </td>
    //     </tr>`;
    //
    //     adminTableBody.append(newRow);
    // }
// Retrieve the booking data from local storage
//     const adminBookingData = JSON.parse(localStorage.getItem('bookingData')) || [];
//
//     // Reference to the admin table body
//     const adminTableBody = $('#Booking-table tbody');
//
//     // Check if adminBookingData is an array
//     if (Array.isArray(adminBookingData)) {
//         // Loop through the booking data and add it to the admin table
//         adminBookingData.forEach(function (bookingData) {
//             if (!isRowExists(bookingData.bookingId)) {
//                 addBookingToAdminTable(bookingData);
//             }
//         });
//     } else {
//         // Handle the case where adminBookingData is not an array
//         console.error('Invalid admin booking data in local storage.');
//     }
//
//     function isRowExists(bookingId) {
//         // Check if a row with the same bookingId already exists in the table
//         return adminTableBody.find(`td:first-child:contains(${bookingId})`).length > 0;
//     }
//
//     function addBookingToAdminTable(bookingData) {
//         const newRow = `
//         <tr>
//             <td>${bookingData.bookingId}</td>
//             <td>${bookingData.customerId}</td>
//             <td>${bookingData.customerEmail}</td>
//             <td>${bookingData.vehicleId}</td>
//             <td>${bookingData.driverId || 'Not Applicable'}</td>
//             <td>${bookingData.takenLocation}</td>
//             <td>${bookingData.returnLocation}</td>
//             <td>${bookingData.takenDate}</td>
//             <td>${bookingData.returnDate}</td>
//             <td>${bookingData.lossDamageWaiver}</td>
//             <td>${bookingData.vehicleQty}</td>
//             <td>
//                 <button class="approve-button"
//                     data-bookingdata='${JSON.stringify(bookingData)}'
//                     data-customeremail="${bookingData.customerEmail}"
//                     data-bookingid="${bookingData.bookingId}">Approve</button>
//             </td>
//         </tr>`;
//
//         adminTableBody.append(newRow);
//     }
    const adminBookingData = JSON.parse(localStorage.getItem('bookingData')) || [];

// Reference to the admin table body
    const adminTableBody = $('#Booking-table tbody');

// Function to add or update a booking in the admin table
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

// Function to create a table row HTML
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
        // Loop through the booking data and add or update it in the admin table
        adminBookingData.forEach(function (bookingData) {
            addOrUpdateBookingInAdminTable(bookingData);
        });
    } else {
        // Handle the case where adminBookingData is not an array
        console.error('Invalid admin booking data in local storage.');
    }


    // Function to handle the "Approve" button click
    adminTableBody.on('click', '.approve-button', function () {
        // const approveButton = $(this); // Cache the button element
        // const bookingData = $(this).data('bookingdata'); // Removed JSON.parse
        //
        // if (bookingData) {
        //     const bookingId = $(this).data('bookingid');
        //     const customerEmail = $(this).data('customeremail');
        //
        //     // Step 1: Send an email to the customer
        //     sendEmailToCustomer(customerEmail);
        //
        //     // Step 2: Add booking to the booking table in the database
        //     addBookingToDatabase(bookingId, bookingData, function () {
        //         // Success callback: Change button style and disable it
        //         approveButton.removeClass('approve-button').addClass('approved-button').text('Approved').prop('disabled', true);
        //     });
        //
        //     // Step 3: Update the vehicle quantity in the vehicle table
        //     updateVehicleQuantity(bookingData.vehicleId, bookingData.vehicleQty);
        //
        //     // Step 4: If a driver is assigned, update the driver's status
        //     if (bookingData.driverId) {
        //         updateDriverStatus(bookingData.driverId);
        //     }
        //
        //     // Additional: Remove the row from the admin table (if needed)
        //     $(this).closest('tr').remove();
        // } else {
        //     console.error('Invalid booking data in the "data-bookingdata" attribute.');
        // }
        const approveButton = $(this); // Cache the button element
        const bookingData = $(this).data('bookingdata'); // Removed JSON.parse

        if (bookingData) {
            const bookingId = $(this).data('bookingid');
            const customerEmail = $(this).data('customeremail');

            // Step 1: Send an email to the customer
            sendEmailToCustomer(customerEmail);

            // Step 2: Add booking to the booking table in the database
            addBookingToDatabase(bookingId, bookingData, function () {
                // Success callback: Change button style and disable it
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
        // AJAX request to send an email to the customer
        $.ajax({
            type: 'POST',
            url: BASE_URL + 'email/sendEmail', // Replace with your email sending endpoint
            data: {
                email: customerEmail,
                message: 'Your booking has been approved.'
            },
            success: function () {
                alert("Email Send to customer Sucessfully");
            },
            error: function () {
                // Handle error
            }
        });
    }

    function addBookingToDatabase(bookingId, bookingData, successCallback) {
        // AJAX request to add booking to the database
        $.ajax({
            type: 'POST',
            url: BASE_URL + 'bookings/addBooking', // Replace with your booking endpoint
            contentType: 'application/json', // Set the content type to JSON
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
                // Handle success
                if (successCallback) {
                    successCallback();
                }
                alert("Booking Added Sucessfully");

            },
            error: function () {
                // Handle error
            }
        });
    }

    if (Array.isArray(adminBookingData)) {
        // Loop through the booking data and add it to the admin table
        adminBookingData.forEach(function (bookingData) {
            // Check if bookingData is not null
            if (bookingData) {
                addOrUpdateBookingInAdminTable(bookingData);
            }
            // alert("Fill all coloumn first, Can not place Booking")

        });
    } else {
        // Handle the case where adminBookingData is not an array
        console.error('Invalid admin booking data in local storage.');
    }


    function updateVehicleQuantity(vehicleId, vehicleQty) {
        // AJAX request to update vehicle quantity in the database
        $.ajax({
            type: 'POST',
            url: BASE_URL + 'bookings/updateVehicleQuantity', // Replace with your vehicle update endpoint
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
        // AJAX request to update driver status in the database
        $.ajax({
            type: 'POST',
            url: BASE_URL + 'bookings/updateDriverStatus', // Replace with your driver update endpoint
            data: {
                driverId: driverId,
                status: 'Booked'
            },
            success: function () {
                // Handle success
                alert(" Driver Status Updated Sucessfully");

            },
            error: function () {
                // Handle error
            }
        });
    }


});