package lk.ijse.car_rental_system.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data

public class PasswordResetForm {
    private String email;
    private String token;
    private String newPassword;
}
