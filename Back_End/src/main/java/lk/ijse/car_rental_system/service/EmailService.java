package lk.ijse.car_rental_system.service;

import java.io.UnsupportedEncodingException;

public interface EmailService {
    void sendPasswordResetEmail(String to, String resetToken) throws UnsupportedEncodingException;

    void sendEmail(String to, String subject, String text);
}
