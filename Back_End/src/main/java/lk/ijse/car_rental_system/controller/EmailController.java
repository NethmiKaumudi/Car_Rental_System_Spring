package lk.ijse.car_rental_system.controller;

import lk.ijse.car_rental_system.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/email")
@CrossOrigin
public class EmailController {
    @Autowired
    private EmailService emailService;

    @PostMapping("/send-booking-approval-email")
    @ResponseBody
    public String sendBookingApprovalEmail(@RequestParam String customerEmail) {
        try {
            // Compose the email subject and text
            String subject = "Booking Approved";
            String text = "Your booking has been approved. Thank you!";

            emailService.sendBookingApprovalEmail(customerEmail, subject, text);
            return "Email sent successfully.";
        } catch (Exception e) {
            return "Email sending failed: " + e.getMessage();
        }
    }
}
