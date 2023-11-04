$(document).ready(function () {
    const BASE_URL = "http://localhost:8080/Back_End/";


    $.ajax({
        type: 'GET',
        url: BASE_URL + 'bookings/getBookings',
        dataType: 'json', 
        success: function (data) {
            // Check if data is an array
            if (Array.isArray(data)) {
                const tableBody = $('#Booking-Data-table tbody');

                // Iterate through the booking data and add rows to the table
                data.forEach(function (booking) {
                    const newRow = `
                            <tr>
                                <td>${booking.bookingId}</td>
                                <td>${booking.customerId}</td>
                                <td>${booking.driverId}</td>
                                <td>${booking.vehicleId}</td>
                                <td>${booking.takenLocation}</td>
                                <td>${booking.returnLocation}</td>
                                <td>${booking.takenDate}</td>
                                <td>${booking.returnDate}</td>
                                 <td>${booking.lossDamageAgreement}</td>
                                 <td>${booking.vehicleQty}</td>

                            </tr>
                        `;
                    tableBody.append(newRow);
                });
            } else {
                console.error('Invalid booking data received from the server.');
            }
        },
        error: function () {
            console.error('Error fetching booking data from the server.');
        }
    });
    $('#searchField').on('input', function () {
        const searchText = $(this).val().toLowerCase();
        const rows = $('#Booking-Data-table tbody tr');

        rows.each(function () {
            const row = $(this);
            const bookingData = row.text().toLowerCase();

            if (bookingData.includes(searchText)) {
                row.show();
            } else {
                row.hide();
            }
        });
    });

});
