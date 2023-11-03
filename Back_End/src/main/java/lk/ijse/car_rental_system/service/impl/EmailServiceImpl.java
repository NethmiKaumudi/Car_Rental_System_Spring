package lk.ijse.car_rental_system.service.impl;

import lk.ijse.car_rental_system.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional

public class EmailServiceImpl implements EmailService {
    @Autowired
    private JavaMailSender javaMailSender;
//    @Value("${mail.sender}")
//    private String senderEmail;

    @Override
    public void sendPasswordResetEmail(String to, String resetToken) {
        // Create a SimpleMailMessage
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(to);
        mailMessage.setSubject("Password Reset Request");
        mailMessage.setText("To reset your password, click the following link: "
                + "http://yourdomain.com/reset-password?token=" + resetToken);

        // Send the email
        javaMailSender.send(mailMessage);
    }


    public void sendBookingApprovalEmail(String email, String customerEmail) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(customerEmail);
        mailMessage.setSubject("Booking Approved");
        mailMessage.setText("Your booking has been approved. Thank you!");

        javaMailSender.send(mailMessage);
    }
}
