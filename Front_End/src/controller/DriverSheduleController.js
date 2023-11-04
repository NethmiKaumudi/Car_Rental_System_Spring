$(document).ready(function () {
    const BASE_URL = "http://localhost:8080/Back_End/";

    $.ajax({
        type: 'GET',
        url: BASE_URL + 'bookings/getBookings',
        dataType: 'json',
        success: function (data) {

            if (Array.isArray(data)) {
                const tableBody = $('#driver-shedule-table tbody');

                data.forEach(function (booking) {

                    if (booking.driverId !== "Not Applicable") {
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
                            </tr>
                        `;
                        tableBody.append(newRow);
                    }
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
        const rows = $('#driver-shedule-table tbody tr');

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
