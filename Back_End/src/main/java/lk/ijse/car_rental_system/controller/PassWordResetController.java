package lk.ijse.car_rental_system.controller;

import lk.ijse.car_rental_system.service.EmailService;
import lk.ijse.car_rental_system.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;

@RestController
@RequestMapping("/user-password-reset")
@CrossOrigin
public class PassWordResetController {

    @Autowired
    private EmailService emailService;
    @Autowired
    private TokenService tokenService;

    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestParam String email) throws UnsupportedEncodingException {
        // Generate a unique token
        String token = tokenService.generateUniqueToken();
        tokenService.storeToken(email, token);

        // Send the password reset email
        emailService.sendPasswordResetEmail(email, token);

        return ResponseEntity.ok("Password reset email sent to your email address.");
    }


}
