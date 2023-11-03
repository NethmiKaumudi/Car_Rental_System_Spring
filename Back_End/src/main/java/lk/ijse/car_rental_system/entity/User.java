package lk.ijse.car_rental_system.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
//@ToString
public class User {
    @Id
    @Column(name = "user_id", columnDefinition = "VARCHAR(64)")
    private String userId;
    @Column(name = "user_name")
    private String userName;
    private String password;
    private String userRole;
    private String userEmail;
//    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
//    private PassWordResetToken resetToken;
}
