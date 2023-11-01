// const BASE_URL = "http://localhost:8080/Back_End/";
//
//
// // Function to add a new vehicle
// $('#btnVehicleAdd').click(function () {
//     const vehicleData = {
//         "vehicleId": $('#txtVehicleId').val(),
//         "regNo": $('#txtRegNo').val(),
//         "vehicleBrand": $('#txtVehicleBrand').val(),
//         "vehicleColour": $('#txtVehicleColour').val(),
//         "vehicleType": $('#txtVehicleType').val(),
//         "noOfPassengers": $('#txtNoOfPassengers').val(),
//         "dailyRate": $('#txtDailyRate').val(),
//         "freeKmForADay": $('#txtFreeKmADay').val(),
//         "monthlyRate": $('#txtMonthlyRate').val(),
//         "freeKmForAMonth": $('#txtFreeKmAMonth').val(),
//         "priceForExtraKm": $('#txtPriceExtraKm').val(),
//         "fuelType": $('#txtFuelType').val(),
//         "transmissionType": $('#txtTransmissionType').val(),
//         "distanceDriven": $('#txtDistanceDriven').val()
//
//
//     };
//
//     $.ajax({
//         url: BASE_URL + 'vehicle',
//         method: 'POST',
//         contentType: 'application/json',
//         data: JSON.stringify(vehicleData),
//         success: function (resp) {
//             alert(resp.message);
//             clearVehicleInputFields();
//         },
//         error: function (error) {
//             alert(error.responseJSON.message);
//         }
//     });
// });
//
// // Function to update a vehicle
// $('#btnVehicleUpdate').click(function () {
//     const vehicleData = {
//         "vehicleId": $('#txtVehicleId').val(),
//         "regNo": $('#txtRegNo').val(),
//         "vehicleBrand": $('#txtVehicleBrand').val(),
//         "vehicleColour": $('#txtVehicleColour').val(),
//         "vehicleType": $('#txtVehicleType').val(),
//         "noOfPassengers": $('#txtNoOfPassengers').val(),
//         "dailyRate": $('#txtDailyRate').val(),
//         "freeKmForADay": $('#txtFreeKmADay').val(),
//         "monthlyRate": $('#txtMonthlyRate').val(),
//         "freeKmForAMonth": $('#txtFreeKmAMonth').val(),
//         "priceForExtraKm": $('#txtPriceExtraKm').val(),
//         "fuelType": $('#txtFuelType').val(),
//         "transmissionType": $('#txtTransmissionType').val(),
//         "distanceDriven": $('#txtDistanceDriven').val()
//
//     };
//
//     $.ajax({
//         url: BASE_URL + 'vehicle',
//         method: 'PUT',
//         contentType: 'application/json',
//         data: JSON.stringify(vehicleData),
//         success: function (resp) {
//             alert(resp.message);
//             clearVehicleInputFields();
//         },
//         error: function (error) {
//             alert(error.responseJSON.message);
//         }
//     });
// });
//
// // Function to delete a vehicle
// $('#btnVehicleDelete').click(function () {
//     const vehicleId = $('#txtVehicleId').val();
//     const consent = confirm("Do you want to delete this vehicle?");
//     if (consent) {
//         $.ajax({
//             url: BASE_URL + 'vehicle?vehicleId=' + vehicleId,
//             method: 'DELETE',
//             success: function (resp) {
//                 alert(resp.message);
//                 clearVehicleInputFields();
//             },
//             error: function (error) {
//                 alert(error.responseJSON.message);
//             }
//         });
//     }
// });
//
// // Function to clear all input fields
// $('#btnVehicleClearAll').click(function () {
//     clearVehicleInputFields();
// });
//
//
// // }
// $(document).ready(function () {
//     $('#txtVehicleId').keydown(function (e) {
//         if (e.keyCode === 13) {
//             e.preventDefault();
//             const vehicleId = $('#txtVehicleId').val();
//             searchVehicleAndPopulateFields(vehicleId);
//         }
//     });
//
//     function searchVehicleAndPopulateFields(vehicleId) {
//         $.ajax({
//             url: BASE_URL + 'vehicle?vehicleId=' + vehicleId,
//             dataType: "json",
//             success: function (response) {
//                 // const vehicle = response.data;
//                 // if (vehicle) {
//                 //     // Populate data into text fields
//                 //     $('#txtRegNo').val(vehicle.regNo);
//                 //     $('#txtVehicleBrand').val(vehicle.vehicleBrand);
//                 //     $('#txtVehicleColour').val(vehicle.vehicleColour);
//                 //     $('#txtVehicleType').val(vehicle.vehicleType);
//                 //     $('#txtNoOfPassengers').val(vehicle.noOfPassengers);
//                 //     $('#txtDailyRate').val(vehicle.dailyRate);
//                 //     $('#txtFreeKmADay').val(vehicle.freeKmForADay);
//                 //     $('#txtMonthlyRate').val(vehicle.monthlyRate);
//                 //     $('#txtFreeKmAMonth').val(vehicle.freeKmForAMonth);
//                 //     $('#txtPriceExtraKm').val(vehicle.priceForExtraKm); // Corrected field name
//                 //     $('#txtFuelType').val(vehicle.fuelType);
//                 //     $('#txtTransmissionType').val(vehicle.transmissionType);
//                 //     $('#txtDistanceDriven').val(vehicle.distanceDriven);
//                 // } else {
//                 //     clearVehicleInputFields();
//                 //     alert("Vehicle not found");
//                 // }
//                 // },
//                 let vehicles = response.data;
//                 if (vehicles.length > 0) {
//                     // Driver found, populate data into driver text fields
//                     let vehicle = vehicles.find(vehicle => vehicle.vehicleId === vehicleId);
//                     if (vehicle) {
//                         $('#txtRegNo').val(vehicle.regNo);
//                         $('#txtVehicleBrand').val(vehicle.vehicleBrand);
//                         $('#txtVehicleColour').val(vehicle.vehicleColour);
//                         $('#txtVehicleType').val(vehicle.vehicleType);
//                         $('#txtNoOfPassengers').val(vehicle.noOfPassengers);
//                         $('#txtDailyRate').val(vehicle.dailyRate);
//                         $('#txtFreeKmADay').val(vehicle.freeKmForADay);
//                         $('#txtMonthlyRate').val(vehicle.monthlyRate);
//                         $('#txtFreeKmAMonth').val(vehicle.freeKmForAMonth);
//                         $('#txtPriceExtraKm').val(vehicle.priceForExtraKm); // Corrected field name
//                         $('#txtFuelType').val(vehicle.fuelType);
//                         $('#txtTransmissionType').val(vehicle.transmissionType);
//                         $('#txtDistanceDriven').val(vehicle.distanceDriven);
//                     } else {
//                         // Driver not found, clear the driver text fields or show an error message
//                         clearVehicleInputFields();
//                         alert("Vehicle not found");
//                     }
//                 }
//             },
//             error: function (error) {
//                 alert(error.responseJSON.message);
//             }
//         });
//     }
//
// });
//
// function clearVehicleInputFields() {
//     // Clear all vehicle input fields except for #txtVehicleId
//     $('#txtVehicleId,#txtRegNo, #txtVehicleBrand, #txtVehicleColour, #txtVehicleType, ' +
//         '#txtNoOfPassengers, #txtDailyRate, #txtFreeKmADay, #txtMonthlyRate, ' +
//         '#txtFreeKmAMonth, #txtPriceExtraKm, #txtFuelType, #txtTransmissionType, ' +
//         '#txtDistanceDriven').val("");
//     $("#txtVehicleId").focus();
//
// }
//
// // $(document).ready(function () {
//     // Function to populate the table with vehicle data
//     function populateTable() {
//         $.ajax({
//             url: BASE_URL + 'vehicle',
//             dataType: "json",
//             success: function (response) {
//                 let vehicles = response.data;
//                 let tableBody = $("#vehicle-table tbody");
//
//                 tableBody.empty(); // Clear existing data
//
//                 for (let vehicle of vehicles) {
//                     let row = `
//                         <tr>
//                            <td>${vehicle.vehicleId}</td>
//             <td>${vehicle.regNo}</td>
//             <td>${vehicle.vehicleBrand}</td>
//             <td>${vehicle.vehicleType}</td>
//             <td>${vehicle.vehicleColour}</td>
//             <td>${vehicle.noOfPassengers}</td>
//             <td>${vehicle.dailyRate}</td>
//             <td>${vehicle.freeKmForADay}</td>
//             <td>${vehicle.monthlyRate}</td>
//             <td>${vehicle.freeKmForAMonth}</td>
//             <td>${vehicle.priceForExtraKm}</td>
//             <td>${vehicle.fuelType}</td>
//             <td>${vehicle.transmissionType}</td>
//             <td>${vehicle.distanceDriven}</td>
//                         </tr>
//                     `;
//                     tableBody.append(row);
//                 }
//             },
//             error: function (error) {
//                 console.error("Error loading vehicle data: " + error.message);
//             }
//         });
//     }
//
//     populateTable(); // Load data when the page loads
//
//     // Handle search input
//     $("#searchField").on("input", function () {
//         let searchValue = $(this).val().toLowerCase();
//         $("#vehicle-table tbody tr").each(function () {
//             let row = $(this);
//             if (row.text().toLowerCase().includes(searchValue)) {
//                 row.show();
//             } else {
//                 row.hide();
//             }
//         });
//     });
// // });
// $("#VehicleSearchClearBtn").click(function () {
//     $("#searchField").val("");
//     showAllRows();
// });
//
// function showAllRows() {
//     $('#vehicle-table tbody tr').show();
// }
$(document).ready(function () {
    const BASE_URL = "http://localhost:8080/Back_End/";

    $('#btnVehicleAdd').click(function () {
        const vehicleData = {
            "vehicleId": $('#txtVehicleId').val(),
            "regNo": $('#txtRegNo').val(),
            "vehicleBrand": $('#txtVehicleBrand').val(),
            "vehicleColour": $('#txtVehicleColour').val(),
            "vehicleType": $('#txtVehicleType').val(),
            "noOfPassengers": $('#txtNoOfPassengers').val(),
            "dailyRate": $('#txtDailyRate').val(),
            "freeKmADay": $('#txtFreeKmADay').val(),
            "monthlyRate": $('#txtMonthlyRate').val(),
            "freeKmAMonth": $('#txtFreeKmAMonth').val(),
            "priceExtraKm": $('#txtPriceExtraKm').val(),
            "fuelType": $('#txtFuelType').val(),
            "transmissionType": $('#txtTransmissionType').val(),
            "distanceDriven": $('#txtDistanceDriven').val(),
            "qty": $('#txtVehicleQty').val()
        };

        // Handle optional fields
        // const freeKmADay = $('#txtFreeKmADay').val().trim();
        // if (freeKmADay) {
        //     vehicleData["freeKmForADay"] = freeKmADay;
        // }
        //
        // const freeKmAMonth = $('#txtFreeKmAMonth').val().trim();
        // if (freeKmAMonth) {
        //     vehicleData["freeKmForAMonth"] = freeKmAMonth;
        // }
        //
        // const priceExtraKm = $('#txtPriceExtraKm').val().trim();
        // if (priceExtraKm) {
        //     vehicleData["priceForExtraKm"] = priceExtraKm;
        // }

        $.ajax({
            url: BASE_URL + 'vehicle',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(vehicleData),
            success: function (resp) {
                console.log(vehicleData);
                alert(resp.message);
                clearVehicleInputFields();
            },
            error: function (error) {
                alert(error.responseJSON.message);
            }
        });
    });

    // Function to update a vehicle
    $('#btnVehicleUpdate').click(function () {
        const vehicleData = {
            "vehicleId": $('#txtVehicleId').val(),
            "regNo": $('#txtRegNo').val(),
            "vehicleBrand": $('#txtVehicleBrand').val(),
            "vehicleColour": $('#txtVehicleColour').val(),
            "vehicleType": $('#txtVehicleType').val(),
            "noOfPassengers": $('#txtNoOfPassengers').val(),
            "dailyRate": $('#txtDailyRate').val(),
            "freeKmADay": $('#txtFreeKmADay').val(),
            "monthlyRate": $('#txtMonthlyRate').val(),
            "freeKmAMonth": $('#txtFreeKmAMonth').val(),
            "priceExtraKm": $('#txtPriceExtraKm').val(),
            "fuelType": $('#txtFuelType').val(),
            "transmissionType": $('#txtTransmissionType').val(),
            "distanceDriven": $('#txtDistanceDriven').val(),
            "qty": $('#txtVehicleQty').val()
        };

        // Handle optional fields
        // const freeKmADay = $('#txtFreeKmADay').val().trim();
        // if (freeKmADay) {
        //     vehicleData["freeKmForADay"] = freeKmADay;
        // }
        //
        // const freeKmAMonth = $('#txtFreeKmAMonth').val().trim();
        // if (freeKmAMonth) {
        //     vehicleData["freeKmForAMonth"] = freeKmAMonth;
        // }
        //
        // const priceExtraKm = $('#txtPriceExtraKm').val().trim();
        // if (priceExtraKm) {
        //     vehicleData["priceForExtraKm"] = priceExtraKm;
        // }

        $.ajax({
            url: BASE_URL + 'vehicle',
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(vehicleData),
            success: function (resp) {
                alert(resp.message);
                clearVehicleInputFields();
            },
            error: function (error) {
                alert(error.responseJSON.message);
            }
        });
    });

    // Function to delete a vehicle
    $('#btnVehicleDelete').click(function () {
        const vehicleId = $('#txtVehicleId').val();
        const consent = confirm("Do you want to delete this vehicle?");
        if (consent) {
            $.ajax({
                url: BASE_URL + 'vehicle?vehicleId=' + vehicleId,
                method: 'DELETE',
                success: function (resp) {
                    alert(resp.message);
                    clearVehicleInputFields();
                },
                error: function (error) {
                    alert(error.responseJSON.message);
                }
            });
        }
    });

    // Function to clear all input fields
    $('#btnVehicleClearAll').click(function () {
        clearVehicleInputFields();
    });

    function clearVehicleInputFields() {
        // Clear all vehicle input fields except for #txtVehicleId
        $('#txtVehicleId,#txtRegNo, #txtVehicleBrand, #txtVehicleColour, #txtVehicleType, ' +
            '#txtNoOfPassengers, #txtDailyRate, #txtFreeKmADay, #txtMonthlyRate, ' +
            '#txtFreeKmAMonth, #txtPriceExtraKm, #txtFuelType, #txtTransmissionType, ' +
            '#txtDistanceDriven,#txtVehicleQty').val("");
        $("#txtVehicleId").focus();
    }

    // Function to populate the table with vehicle data
    function populateTable() {
        $.ajax({
            url: BASE_URL + 'vehicle',
            dataType: "json",
            success: function (response) {
                let vehicles = response.data;
                let tableBody = $("#vehicle-table tbody");

                tableBody.empty(); // Clear existing data

                for (let vehicle of vehicles) {
                    let row = `
                        <tr>
                            
             <td>${vehicle.vehicleId}</td>
            <td>${vehicle.regNo}</td>
            <td>${vehicle.vehicleBrand}</td>
            <td>${vehicle.vehicleColour}</td>
            <td>${vehicle.vehicleType}</td>
            <td>${vehicle.noOfPassengers}</td>
            <td>${vehicle.dailyRate}</td>
            <td>${vehicle.freeKmADay}</td>
            <td>${vehicle.monthlyRate}</td>
            <td>${vehicle.freeKmAMonth}</td>
            <td>${vehicle.priceExtraKm}</td>
            <td>${vehicle.fuelType}</td>
            <td>${vehicle.transmissionType}</td>
            <td>${vehicle.distanceDriven}</td>
            <td>${vehicle.qty}</td> </tr>
                    `;
                    tableBody.append(row);
                }
            },
            error: function (error) {
                console.error("Error loading vehicle data: " + error.message);
            }
        });
    }

    populateTable(); // Load data when the page loads

    // Handle search input
    $("#searchField").on("input", function () {
        let searchValue = $(this).val().toLowerCase();
        $("#vehicle-table tbody tr").each(function () {
            let row = $(this);
            if (row.text().toLowerCase().includes(searchValue)) {
                row.show();
            } else {
                row.hide();
            }
        });
    });

    // $("#VehicleSearchClearBtn").click(function () {
    //     $("#searchField").val("");
    //     showAllRows();
    // });

    function showAllRows() {
        $('#vehicle-table tbody tr').show();
    }

    //
    // $('#sort-button').on('click', function () {
    //     var selectedOption = $("#sort-select").val(); // Get the selected sorting option
    //     $.ajax({
    //         type: 'GET',
    //         url: BASE_URL + 'vehicles/sort/' + selectedOption, // Adjust the URL as needed
    //         success: function (data) {
    //             updateTable(data); // Call a function to update the table
    //         },
    //         error: function (error) {
    //             alert('Error: ' + error.message);
    //         },
    //     });
    // });
    //
    // // Function to update the table with sorted data
    function updateTable(sortedData) {
        var tbody = $('#vehicle-table tbody');
        tbody.empty(); // Clear the current table rows
        sortedData.forEach(function (vehicle) {
            var newRow = `<tr>
                <td>${vehicle.vehicleId}</td>
                <td>${vehicle.regNo}</td>
                <td>${vehicle.vehicleBrand}</td>
            <td>${vehicle.vehicleColour}</td>
            <td>${vehicle.vehicleType}</td>
            <td>${vehicle.noOfPassengers}</td>
            <td>${vehicle.dailyRate}</td>
            <td>${vehicle.freeKmADay}</td>
            <td>${vehicle.monthlyRate}</td>
            <td>${vehicle.freeKmAMonth}</td>
            <td>${vehicle.priceExtraKm}</td>
            <td>${vehicle.fuelType}</td>
            <td>${vehicle.transmissionType}</td>
            <td>${vehicle.distanceDriven}</td>
            <td>${vehicle.qty}</td> 
                <!-- Add other columns as needed -->
            </tr>`;
            tbody.append(newRow);
        });
    }

    $('#sort-select').on('change', function () {
        var selectedOption = $(this).val();
        $.ajax({
            type: 'GET',
            url: BASE_URL + 'vehicle/sort',
            data: {sortOption: selectedOption.toUpperCase()}, // Ensure it's in uppercase
            success: function (data) {
                updateTable(data);
                setTimeout(populateTable, 2000);
            },
            error: function (error) {
                alert('Error: ' + error.message);
            },
        });
    });

});
