package lk.ijse.car_rental_system.controller;

import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/updatePassword")
@CrossOrigin
public class PaasWordResetPageController {
    private Map<String, Date> validTokens = new HashMap<>(); // Simulated token storage

    @GetMapping("/reset-password-link")
    public String resetPasswordPage(@RequestParam String token) {
        // Check if the token exists in the validTokens map and is not expired
        if (validTokens.containsKey(token)) {
            Date expirationDate = validTokens.get(token);
            Date now = new Date();

            // Check if the token has not expired
            if (now.before(expirationDate)) {
                return "Front_End/pages/ResetPasswordPage"; // Token is valid, return the password reset page
            }
        }

        // If the token is not valid or has expired, handle it accordingly
        return "Front_End/pages/InvalidTokenPage"; // You can create an "InvalidTokenPage.html" for this case
    }
}
