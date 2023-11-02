package lk.ijse.car_rental_system.service.impl;

import lk.ijse.car_rental_system.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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

    @Override
    public void sendBookingApprovalEmail(String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        javaMailSender.send(message);
    }
}
