package lk.ijse.car_rental_system.controller;

import lk.ijse.car_rental_system.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/bookings")
@CrossOrigin
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @Autowired
    private JavaMailSender emailSender;

    @GetMapping("/generate-next-booking-id")
    public String generateNextBookingId() {
        String nextBookingId = bookingService.generateNextBookingId();
        return nextBookingId;
    }

//    @PostMapping("/send-booking-email")
//    public String sendBookingEmail(@RequestBody BookingData bookingData) {
//        // Build and send an email
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setTo(bookingData.getCustomerEmail());
//        message.setSubject("Booking Request Pending Approval");
//        message.setText("Your booking request is pending approval. We will contact you shortly.");
//
//        emailSender.send(message);
//
//        // You can add more logic here if needed
//
//        return "Email sent successfully!";
//    }

}
