package lk.ijse.car_rental_system.service.impl;

import lk.ijse.car_rental_system.entity.PassWordResetToken;
import lk.ijse.car_rental_system.entity.User;
import lk.ijse.car_rental_system.repository.UserRepo;
import lk.ijse.car_rental_system.service.PassWordResetService;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.Date;

@Service
@Transactional
public class PassWordResetServiceImpl implements PassWordResetService {
    @Autowired
    private UserRepo userRepository;

    @Autowired
    private JavaMailSender javaMailSender;


    public String requestPasswordReset(String email) {
        User user = userRepository.findByEmail(email);

        if (user == null) {
            return "notfound"; // User not found
        }

        // Generate a password reset token and send it via email
        String resetToken = generateResetToken();
        sendPasswordResetEmail(email, resetToken);

        return "success";
    }

    public boolean resetPassword(String email, String token, String newPassword) {
        User user = userRepository.findByEmail(email);

        if (user != null) {
            PassWordResetToken resetToken = user.getResetToken();
            if (resetToken != null && resetToken.getToken().equals(token) && !resetToken.isTokenExpired()) {
                // Update the user's password with the new one (newPassword)
                user.setPassword(newPassword);
                userRepository.save(user);
                return true; // Password reset successful
            }
        }

        return false; // Password reset failed
    }

    public String generateResetToken() {
        // Generate a random token using Apache Commons Lang
        String token = RandomStringUtils.randomAlphanumeric(40);
        return token;
    }

    public void sendPasswordResetEmail(String to, String resetToken) {
        // Compose and send the password reset email using the JavaMailSender
        // Include a link to the Reset Password page with the resetToken
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(to);
        mailMessage.setSubject("Password Reset");
        mailMessage.setText("To reset your password, click on the following link: http://yourdomain.com/reset?token=" + resetToken);
        javaMailSender.send(mailMessage);
    }
}
