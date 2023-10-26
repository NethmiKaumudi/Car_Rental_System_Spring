package lk.ijse.car_rental_system.service;

public interface PassWordResetService {
    String requestPasswordReset(String email);

    boolean resetPassword(String email, String token, String newPassword);

    String generateResetToken();
//    boolean isTokenValid(String token);

    void sendPasswordResetEmail(String to, String resetToken);
}

