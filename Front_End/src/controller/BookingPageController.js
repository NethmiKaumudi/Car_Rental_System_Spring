// const BASE_URL = "http://localhost:8080/Back_End/";
//
// $(document).ready(function () {
//
//     // Retrieve the booking data from local storage
//     const adminBookingData = JSON.parse(localStorage.getItem('bookingData')) || [];
//
//     // Reference to the admin table body
//     const adminTableBody = $('#Booking-table tbody');
//
//     // Check if adminBookingData is an array
//     if (Array.isArray(adminBookingData)) {
//         // Loop through the booking data and add it to the admin table
//         adminBookingData.forEach(function (bookingData) {
//             addBookingToAdminTable(bookingData);
//         });
//     } else {
//         // Handle the case where adminBookingData is not an array
//         console.error('Invalid admin booking data in local storage.');
//     }
//
//     function addBookingToAdminTable(bookingData) {
//         const newRow = `
//                     <tr>
//                         <td>${bookingData.bookingId}</td>
//                         <td>${bookingData.customerId}</td>
//                         <td>${bookingData.customerEmail}</td>
//                         <td>${bookingData.vehicleId}</td>
//                         <td>${bookingData.driverId || 'Not Applicable'}</td>
//                         <td>${bookingData.takenLocation}</td>
//                         <td>${bookingData.returnLocation}</td>
//                         <td>${bookingData.takenDate}</td>
//                         <td>${bookingData.returnDate}</td>
//                         <td>${bookingData.lossDamageWaiver}</td>
//                         <td>${bookingData.vehicleQty}</td>
//                         <td>
//                             <button class="approve-button" onclick="approveBooking(this, '${bookingData.bookingId}')">Approve</button>
//                         </td>
//                     </tr>`;
//
//         adminTableBody.append(newRow);
//     }
//
//     // The rest of your code...
//
//     // function approveBooking(customerEmail, bookingId) {
//     //     $.ajax({
//     //         type: 'POST',
//     //         url: BASE_URL + 'email/send-booking-approval-email',
//     //         data: {customerEmail: customerEmail},
//     //         success: function (response) {
//     //             // Email sent successfully
//     //             alert(response);
//     //
//     //             // You can also update the button's appearance here
//     //             const button = $(`button[onclick="approveBooking('${customerEmail}', '${bookingId}')]`);
//     //             button.addClass('approved-button').text('Approved');
//     //         },
//     //         error: function (error) {
//     //             alert('Email sending failed: ' + error);
//     //         }
//     //     });
//     // }
//
// });
// function approveBooking(customerEmail, bookingId) {
//     if (customerEmail && bookingId) {
//         $.ajax({
//             type: 'POST',
//             url: BASE_URL + 'email/send-booking-approval-email',
//             data: {customerEmail: customerEmail},
//             success: function (response) {
//                 // Email sent successfully
//                 alert(response);
//
//                 // You can also update the button's appearance here
//                 const button = $(`button[onclick="approveBooking('${customerEmail}', '${bookingId}')]`);
//                 button.addClass('approved-button').text('Approved');
//             },
//             error: function (error) {
//                 alert('Email sending failed: ' + error);
//             }
//         });
//     } else {
//         alert('Invalid customerEmail or bookingId');
//     }
// }
//
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
                        <button class="approve-button" data-customeremail="${bookingData.customerEmail}" data-bookingid="${bookingData.bookingId}">Approve</button>
                    </td>
                </tr>`;

        adminTableBody.append(newRow);
    }

    // Handle the click event on the approve buttons
    // adminTableBody.on('click', '.approve-button', function () {
    //     const customerEmail = $(this).data('customeremail');
    //     const bookingId = $(this).data('bookingid');
    //
    //     if (customerEmail && bookingId) {
    //         $.ajax({
    //             type: 'POST',
    //             url: BASE_URL + 'email/send-booking-approval-email',
    //             data: {customerEmail: customerEmail},
    //             success: function (response) {
    //                 // Email sent successfully
    //                 alert(response);
    //
    //                 // Update the button's appearance
    //                 $(this).addClass('approved-button').text('Approved');
    //             }.bind(this), // Bind the current button element to use inside the success callback
    //             error: function (error) {
    //                 console.log('Email sending failed: ' + error);
    //                 alert('Email sending failed: ' + error);
    //             }
    //         });
    //     } else {
    //         alert('Invalid customerEmail or bookingId');
    //
    //     }
    // });
    // Rest of your code...

// Handle the click event on the approve buttons
    adminTableBody.on('click', '.approve-button', function () {
        const customerEmail = $(this).data('customeremail');
        const bookingId = $(this).data('bookingid');

        if (customerEmail && bookingId) {
            $.ajax({
                type: 'POST',
                url: BASE_URL + 'email/send-booking-approval-email',
                data: {customerEmail: customerEmail},
                success: function (response) {
                    // Email sent successfully
                    alert(response);

                    // Update the button's appearance
                    $(this).addClass('approved-button').text('Approved');
                }.bind(this), // Bind the current button element to use inside the success callback
                error: function (error) {
                    // Log the error to the console
                    console.log('Email sending failed: ' + error);

                    // Show an alert with the error message
                    alert('Email sending failed: ' + error);
                }
            });
        } else {
            alert('Invalid customerEmail or bookingId');
        }
    });

});