package lk.ijse.car_rental_system.repository;

import lk.ijse.car_rental_system.entity.PassWordResetToken;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;

public interface PassWordResetRepo extends JpaRepository<PassWordResetToken, Long> {
    PassWordResetToken findByToken(String token);
    void deleteByExpiryDateBefore(Date date);

}
