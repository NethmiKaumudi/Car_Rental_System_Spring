package lk.ijse.car_rental_system.controller;

import lk.ijse.car_rental_system.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/email")
@CrossOrigin
public class EmailController {
    @Autowired
    private EmailService emailService;

    @Autowired
    private JavaMailSender javaMailSender; // Autowire JavaMailSender to send emails

    @PostMapping("/sendEmail")
    public ResponseEntity<String> sendEmailToCustomer(@RequestParam String email, @RequestParam String message) {
        try {
            // Create a SimpleMailMessage
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setTo(email); // Set the recipient's email address
            mailMessage.setSubject("Booking Approval"); // Set the email subject
            mailMessage.setText(message); // Set the email message

            // Send the email using JavaMailSender
            javaMailSender.send(mailMessage);

            // Handle success
            return new ResponseEntity<>("Email sent successfully", HttpStatus.OK);
        } catch (Exception e) {
            // Handle error
            return new ResponseEntity<>("Failed to send email", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
