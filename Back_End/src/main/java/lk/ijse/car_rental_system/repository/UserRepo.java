package lk.ijse.car_rental_system.repository;

import lk.ijse.car_rental_system.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,String> {
}
