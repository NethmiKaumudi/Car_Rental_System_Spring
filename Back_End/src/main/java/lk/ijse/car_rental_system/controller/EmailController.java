package lk.ijse.car_rental_system.controller;

import lk.ijse.car_rental_system.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
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
    private JavaMailSender javaMailSender;
    @Autowired
    private Environment environment;

    @PostMapping("/sendEmail")
    public ResponseEntity<String> sendEmailToCustomer(@RequestParam String email, @RequestParam String message) {
        try {
            // Create a SimpleMailMessage
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setTo(email);
            mailMessage.setSubject("Booking Approval");
            mailMessage.setText(message);

            javaMailSender.send(mailMessage);

            return new ResponseEntity<>("Email sent successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to send email", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
