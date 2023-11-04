const BASE_URL = "http://localhost:8080/Back_End/";
getAllDrivers();
$('#driver-form').submit(function (e) {
    e.preventDefault();

    var driverData = {
        driverId: $('#txtDriverId').val(),
        driverNic: $('#txtDriverNic').val(),
        driverName: $('#txtDriverName').val(),
        driverAddress: $('#txtDriverAddress').val(),
        driverContact: $('#txtDriverContact').val(),
        driverLicenceNo: $('#txtDriverLicenceNo').val(),
        driverStatus: $('#txtDriverStatus').val()

    };

    $.ajax({
        type: 'POST',
        url: BASE_URL + 'driver',
        contentType: 'application/json',
        data: JSON.stringify(driverData),
        success: function (response) {
            $("#driver-table tbody").empty();
            getAllDrivers();
            clearDriverInputFields();
            alert(response.message);
        },
        error: function (error) {
            alert('Error: ' + error.message);
        }
    });
});

function bindTrEvents() {
    $('#driver-table').on('click', 'tr', function () {
        //get the selected row's data
        let id = $(this).children().eq(0).text();
        let nic = $(this).children().eq(1).text();
        let name = $(this).children().eq(2).text();
        let address = $(this).children().eq(3).text();
        let contact = $(this).children().eq(4).text();
        let licenceNo = $(this).children().eq(5).text();
        let status = $(this).children().eq(6).text();


        //set the selected row's data to the input fields
        $("#txtDriverId").val(id);
        $("#txtDriverNic").val(nic);
        $("#txtDriverName").val(name);
        $("#txtDriverAddress").val(address);
        $("#txtDriverContact").val(contact);
        $("#txtDriverLicenceNo").val(licenceNo);
        $("#txtDriverStatus").val(status);

    });
}

function clearDriverInputFields() {
    $("#txtDriverId,#txtDriverNic,#txtDriverName,#txtDriverAddress,#txtDriverContact,#txtDriverLicenceNo,#txtDriverStatus").val("");
    $("#txtDriverId").focus();
}

function getAllDrivers() {
    //clear all tbody data before add
    $("#driver-table.table-body").empty();
    $.ajax({
        url: BASE_URL + 'driver',
        dataType: "json",
        success: function (response) {
            let drivers = response.data;
            for (let d in drivers) {
                let driv = drivers[d];
                let id = driv.driverId;
                let nic = driv.driverNic;
                let name = driv.driverName;
                let address = driv.driverAddress;
                let contact = driv.driverContact;
                let licenceNo = driv.driverLicenceNo;
                let status = driv.driverStatus;
                let row = `<tr><td>${id}</td><td>${nic}</td><td>${name}</td><td>${address}</td><td>${contact}</td><td>${licenceNo}</td><td>${status}</td></tr>`;
                $("#driver-table").append(row);
            }
            bindTrEvents();
        },
        error: function (error) {
            alert(error.message);
        }
    });
}

$('#driverSearchbtn').click(function () {
    var searchValue = $('#searchDriverField').val().toLowerCase();

    $('#driver-table tbody tr').each(function () {
        var row = $(this);
        var rowText = row.text().toLowerCase();

        if (rowText.includes(searchValue)) {
            row.show();
        } else {
            row.hide();
        }
    });
});

$("#driverSearchClearBtn").click(function () {
    $("#searchDriverField").val("");
    showAllRows();
});


$('#btnGetAll').click(function () {
    $("#driver-table tbody").empty();
    getAllDrivers();
});
$('#btnClearAll').click(function () {
    clearDriverInputFields();
})


$('#txtDriverId').keydown(function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        // Get the driver ID from the driver ID field
        let driverId = $('#txtDriverId').val();
        searchDriverAndPopulateFields(driverId);
    }
});


function searchDriverAndPopulateFields(driverId) {
    $.ajax({
        url: BASE_URL + 'driver?driverId=' + driverId,
        dataType: "json",
        success: function (response) {
            let drivers = response.data;
            if (drivers.length > 0) {
                let driver = drivers.find(driver => driver.driverId === driverId);
                if (driver) {
                    $("#txtDriverNic").val(driver.driverNic);
                    $("#txtDriverName").val(driver.driverName);
                    $("#txtDriverAddress").val(driver.driverAddress);
                    $("#txtDriverContact").val(driver.driverContact);
                    $("#txtDriverLicenceNo").val(driver.driverLicenceNo);
                    $("#txtDriverStatus").val(driver.driverStatus);

                } else {
                    clearDriverInputFields();
                    alert("Driver not found");
                }
            }
        },
        error: function (error) {
            alert(error.message);
        }
    });
}


$("#btnDelete").click(function () {
    let driverId = $("#txtDriverId").val();
    let consent = confirm("Do you want to delete this driver?");
    if (consent) {
        $.ajax({
            url: BASE_URL + 'driver?driverId=' + driverId,
            method: 'DELETE',
            success: function (resp) {
                alert("Driver Deleted");
                clearDriverInputFields();
                removeDriverRow(driverId);
            },
            error: function (error) {
                alert("Driver Not Removed..!");
            }
        });
    }
});

$("#btnUpdate").click(function () {
    let driverId = $("#txtDriverId").val();
    let driverNic = $('#txtDriverNic').val();
    let driverName = $('#txtDriverName').val();
    let driverAddress = $('#txtDriverAddress').val();
    let driverContact = $('#txtDriverContact').val();
    let driverLicenceNo = $('#txtDriverLicenceNo').val();
    let driverStatus = $('#txtDriverStatus').val();


    let updatedDriverData = {
        driverId: driverId,
        driverNic: driverNic,
        driverName: driverName,
        driverAddress: driverAddress,
        driverContact: driverContact,
        driverLicenceNo: driverLicenceNo,
        driverStatus: driverStatus

    };

    $.ajax({
        url: BASE_URL + 'driver',
        method: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(updatedDriverData),
        success: function (resp) {
            alert(resp.message);
            updateDriverRow(updatedDriverData);
            clearDriverInputFields();
        },
        error: function (error) {
            alert(error.message);
        }
    });
});

function removeDriverRow(driverId) {
    $(`#driver-table tbody tr:contains(${driverId})`).remove();
}

function updateDriverRow(updatedDriverData) {
    const driverId = updatedDriverData.driverId;
    $(`#driver-table tbody tr:contains(${driverId})`).each(function () {
        let row = $(this);
        row.children().eq(1).text(updatedDriverData.driverNic);
        row.children().eq(2).text(updatedDriverData.driverName);
        row.children().eq(3).text(updatedDriverData.driverAddress);
        row.children().eq(4).text(updatedDriverData.driverContact);
        row.children().eq(5).text(updatedDriverData.driverLicenceNo);
        row.children().eq(6).text(updatedDriverData.driverStatus);

    });
}

function showAllRows() {
    $('#driver-table tbody tr').show();
}
