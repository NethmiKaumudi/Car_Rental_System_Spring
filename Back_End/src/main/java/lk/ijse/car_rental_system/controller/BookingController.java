package lk.ijse.car_rental_system.controller;

import lk.ijse.car_rental_system.dto.BookingDTO;
import lk.ijse.car_rental_system.dto.DriverDTO;
import lk.ijse.car_rental_system.entity.Booking;
import lk.ijse.car_rental_system.service.*;
import lk.ijse.car_rental_system.service.impl.BookingApprovalService;
import org.springframework.beans.factory.annotation.Autowired;
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
    @Autowired
    private EmailService emailService;
    //    @Autowired
//    private JavaMailSender emailSender;
    @Autowired
    private CustomerService customerService;
    @Autowired
    private BookingApprovalService bookingApprovalService;

    @GetMapping("/generate-next-booking-id")
    public String generateNextBookingId() {
        String nextBookingId = bookingService.generateNextBookingId();
        return nextBookingId;
    }


    // Endpoint for sending an email
    @PostMapping("/send-email")
    public ResponseEntity<String> sendEmail(@RequestParam String customerEmail, @RequestBody Booking bookingData) {
        // Send an email to the customer
        emailService.sendBookingApprovalEmail(customerEmail, "Your booking has been approved.");
        return ResponseEntity.ok("Email sent to customer.");
    }

    @PostMapping("/add-booking")
    public ResponseEntity<String> addBooking(@RequestBody BookingDTO bookingData) {
        // Add the booking data to the booking table
        bookingService.addBooking(bookingData);
        return ResponseEntity.ok("Booking added to the database.");
    }


    @PutMapping("/update-vehicle-quantity")
    public ResponseEntity<String> updateVehicleQuantity(@RequestParam String vehicleId, @RequestParam int vehicleQty) {
        // Update the vehicle table with the new quantity
        vehicleService.updateVehicleQuantity(vehicleId, vehicleQty);
        return ResponseEntity.ok("Vehicle quantity updated.");
    }

    @PutMapping("/update-driver-status")
    public ResponseEntity<String> updateDriverStatus(@RequestParam DriverDTO dto) {
        // Update the driver status
        String driverId = dto.getDriverId();
        driverService.updateDriverStatus(driverId, "BOOKED");
        return ResponseEntity.ok("Driver status updated to BOOKED.");
    }

}



