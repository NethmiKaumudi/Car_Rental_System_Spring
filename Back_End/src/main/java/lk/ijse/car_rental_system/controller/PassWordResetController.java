package lk.ijse.car_rental_system.controller;

import lk.ijse.car_rental_system.dto.PasswordResetRequest;
import lk.ijse.car_rental_system.service.PassWordResetService;
import lk.ijse.car_rental_system.dto.PasswordResetForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user-password-reset")
@CrossOrigin
public class PassWordResetController {
    @Autowired
    private PassWordResetService passwordResetService;

    @PostMapping("/forgot-password")
    public ResponseEntity<String> requestPasswordReset(@RequestBody PasswordResetRequest request) {
        String email = request.getEmail();
        String result = passwordResetService.requestPasswordReset(email);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody PasswordResetForm form) {
        String email = form.getEmail();
        String token = form.getToken();
        String newPassword = form.getNewPassword();

        boolean success = passwordResetService.resetPassword(email, token, newPassword);

        if (success) {
            return ResponseEntity.ok("Password reset successful");
        } else {
            return ResponseEntity.badRequest().body("Password reset failed");
        }
    }

}
