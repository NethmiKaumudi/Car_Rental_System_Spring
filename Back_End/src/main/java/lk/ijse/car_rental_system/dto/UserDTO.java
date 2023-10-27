package lk.ijse.car_rental_system.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
//@Data
@ToString
@Getter
@Setter
public class UserDTO {
    private String userId;
    private String userName;
    private String password;
    private String userRole;
    private String userEmail;

}
