package lk.ijse.car_rental_system.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;

@Entity
//@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class PassWordResetToken {
    private static final int EXPIRATION = 60 * 24; // Token expiration time in minutes (e.g., 24 hours)
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String token;
    @OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "user_id")
    private User user;
    private Date expiryDate;


    public PassWordResetToken() {
        this.token = "";
        this.user = null;
        this.expiryDate = calculateExpiryDate(EXPIRATION);
    }

    public PassWordResetToken(String token, User user) {
        this.token = token;
        this.user = user;
        this.expiryDate = calculateExpiryDate(EXPIRATION);
    }

    private Date calculateExpiryDate(int expiryTimeInMinutes) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(new Date());
        cal.add(Calendar.MINUTE, expiryTimeInMinutes);
        return new Date(cal.getTime().getTime());
    }

    public boolean isTokenExpired() {
        Date now = new Date();
        return expiryDate.before(now);
    }

}
