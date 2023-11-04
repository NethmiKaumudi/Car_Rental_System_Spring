package lk.ijse.car_rental_system.service.impl;

import lk.ijse.car_rental_system.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

@Service
@Transactional

public class EmailServiceImpl implements EmailService {
    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    private Environment environment;

    public void sendPasswordResetEmail(String to, String token) throws UnsupportedEncodingException {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("your-email@example.com");
        message.setTo(to);
        message.setSubject("Password Reset");

        // Specify the base URL
        String baseUrl = "http://example.com";

        String resetLink = baseUrl + "/reset-password?token=" + URLEncoder.encode(token, "UTF-8");
        message.setText("To reset your password, click the following link: " + resetLink);
        javaMailSender.send(message);
    }


    @Override
    public void sendEmail(String to, String subject, String text) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(to);
        mailMessage.setSubject(subject);
        mailMessage.setText(text);
        javaMailSender.send(mailMessage);
    }
}
