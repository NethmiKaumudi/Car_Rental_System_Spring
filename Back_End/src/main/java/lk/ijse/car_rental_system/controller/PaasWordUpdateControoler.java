package lk.ijse.car_rental_system.controller;

import lk.ijse.car_rental_system.service.TokenService;
import lk.ijse.car_rental_system.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/updatePassword")
@CrossOrigin
public class PaasWordUpdateControoler {
    @Autowired
    private TokenService tokenService;
    @Autowired
    private UserService userService;

    @PostMapping("/update-password")
    public String updatePassword(@RequestParam String token, @RequestParam String newPassword) {
        // Verify the token's validity
        String email = tokenService.retrieveToken(token);
        if (email != null) {
            // Token is valid, so update the user's password
            boolean passwordUpdated = userService.updatePassword(email, newPassword);

            if (passwordUpdated) {
                // Redirect to the login page after a successful password update
                return "redirect:/login";
            } else {
                return "password-update-failure";
            }
        } else {
            return "invalid-token";
        }
    }
}
