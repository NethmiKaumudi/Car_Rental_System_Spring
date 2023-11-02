$(document).ready(function () {
    const BASE_URL = "http://localhost:8080/Back_End/";

    // Retrieve the booking data from local storage
    const adminBookingData = JSON.parse(localStorage.getItem('bookingData')) || [];

    // Reference to the admin table body
    const adminTableBody = $('#Booking-table');

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

    console.log(adminBookingData);

    function addBookingToAdminTable(bookingData) {
        console.log(bookingData);

        const newRow = `
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
                    <button class="approve-button" onclick="approveBooking(this, '${bookingData.bookingId}')">Approve</button>
                </td>
            </tr>`;

        adminTableBody.append(newRow);
    }

    // The rest of your code...
});