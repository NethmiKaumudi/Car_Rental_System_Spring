package lk.ijse.car_rental_system.service;

public interface EmailService {
    void sendPasswordResetEmail(String to, String resetToken);
}