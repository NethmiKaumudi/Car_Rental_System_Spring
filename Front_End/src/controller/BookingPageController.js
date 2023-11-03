const BASE_URL = "http://localhost:8080/Back_End/";

$(document).ready(function () {

    // Retrieve the booking data from local storage
    const adminBookingData = JSON.parse(localStorage.getItem('bookingData')) || [];

    // Reference to the admin table body
    const adminTableBody = $('#Booking-table tbody');

    // Check if adminBookingData is an array
    if (Array.isArray(adminBookingData)) {
        // Loop through the booking data and add it to the admin table
        adminBookingData.forEach(function (bookingData) {
            addBookingToAdminTable(bookingData);
        });
    } else {
        // Handle the case where adminBookingData is not an array
        console.error('Invalid admin booking data in local storage.');
    }

    function addBookingToAdminTable(bookingData) {
        const newRow = `
                <tr>
                    <td>${bookingData.bookingId}</td>
                     <td>${bookingData.customerEmail}</td>
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

        adminTableBody.append(newRow);
    }

    // Handle the click event on the "Approve" button
    adminTableBody.on('click', '.approve-button', function () {

        const bookingData = $(this).data('bookingdata');


        if (bookingData) {
            // Construct the data object with all fields
            const dataToSend = {
                bookingId: bookingData.bookingId,
                customerId: bookingData.customerId,
                vehicleId: bookingData.vehicleId,
                driverId: bookingData.driverId,
                takenLocation: bookingData.takenLocation,
                returnLocation: bookingData.returnLocation,
                takenDate: bookingData.takenDate,
                returnDate: bookingData.returnDate,
                lossDamageAgreement: bookingData.lossDamageAgreement,
                vehicleQty: bookingData.vehicleQty
            };
            $.ajax({
                url: BASE_URL + 'bookings/send-email',
                method: 'POST',
                data: {
                    customerEmail: bookingData.customerEmail,
                    bookingData: dataToSend // Include booking data in the email request
                },
                success: function (response) {
                    // Handle success (e.g., show a confirmation message)
                },
                error: function (error) {
                    // Handle error (e.g., show an error message)
                }
            });
            // Send an AJAX request with all fields
            $.ajax({
                url: BASE_URL + 'bookings/add-booking',
                method: 'POST',
                contentType: 'application/json', // Set the content type to JSON
                data: JSON.stringify(dataToSend), // Convert to JSON string
                success: function (response) {
                    // Handle success (e.g., show a confirmation message)
                },
                error: function (error) {
                    // Handle error (e.g., show an error message)
                }
            });

            // Update the vehicle table quantity
            $.ajax({
                url: BASE_URL + 'bookings/update-vehicle-quantity',
                method: 'PUT',
                contentType: 'application/json', // Set the content type to JSON
                data: JSON.stringify({
                    vehicleId: bookingData.vehicleId,
                    vehicleQty: bookingData.vehicleQty
                }),
                success: function (response) {
                    // Handle success (e.g., show a confirmation message)
                },
                error: function (error) {
                    // Handle error (e.g., show an error message)
                }
            });

            // Update the driver status (if driverId is provided)
            if (bookingData.driverId && bookingData.driverId !== 'Not Applicable') {
                $.ajax({
                    url: BASE_URL + 'bookings/update-driver-status',
                    method: 'PUT',
                    contentType: 'application/json', // Set the content type to JSON
                    data: JSON.stringify({
                        driverId: bookingData.driverId

                    }),
                    success: function (response) {
                        // Handle success (e.g., show a confirmation message)
                    },
                    error: function (error) {
                        // Handle error (e.g., show an error message)
                    }
                });
            }
        } else {
            alert('Invalid booking data');
        }
    });


});