package lk.ijse.car_rental_system.controller;

import lk.ijse.car_rental_system.entity.Booking;
import lk.ijse.car_rental_system.service.BookingService;
import lk.ijse.car_rental_system.service.DriverService;
import lk.ijse.car_rental_system.service.VehicleService;
import lk.ijse.car_rental_system.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/bookings")
@CrossOrigin
public class BookingController {
    @Autowired
    DriverService driverService;
    @Autowired
    VehicleService vehicleService;
    @Autowired
    private BookingService bookingService;


    @GetMapping("/generate-next-booking-id")
    public String generateNextBookingId() {
        String nextBookingId = bookingService.generateNextBookingId();
        return nextBookingId;
    }

    @PostMapping("/addBooking")
    public ResponseUtil addBookingToDatabase(@RequestBody Booking booking) {
        try {
            bookingService.addBooking(booking);
            return new ResponseUtil("Ok", "Successfully Added Booking", booking);
        } catch (Exception e) {
            // Handle the exception, log the error, or return an error response
            return new ResponseUtil("Error", "Failed to add booking: " + e.getMessage(), null);
        }
    }


    @PostMapping("/updateVehicleQuantity")
    public ResponseEntity<String> updateVehicleQuantity(@RequestParam String vehicleId, @RequestParam int vehicleQty) {
        try {
            bookingService.updateVehicleQuantity(vehicleId, vehicleQty);

            // Handle success
            return new ResponseEntity<>("Vehicle quantity updated successfully", HttpStatus.OK);
        } catch (Exception e) {
            // Handle error
            return new ResponseEntity<>("Failed to update vehicle quantity", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/updateDriverStatus")
    public ResponseEntity<String> updateDriverStatus(@RequestParam String driverId, @RequestParam String status) {
        try {
            bookingService.updateDriverStatus(driverId, status);

            // Handle success
            return new ResponseEntity<>("Driver status updated successfully", HttpStatus.OK);
        } catch (Exception e) {
            // Handle error
            return new ResponseEntity<>("Failed to update driver status", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}



