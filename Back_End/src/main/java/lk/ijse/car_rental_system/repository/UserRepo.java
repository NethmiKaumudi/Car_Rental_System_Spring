package lk.ijse.car_rental_system.repository;

import lk.ijse.car_rental_system.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepo extends JpaRepository<User, String> {
//    User findByUserName(String userName);

    @Query("SELECT u FROM User u WHERE u.userEmail = :email")
    User findByEmail(@Param("email") String email);

    @Query("SELECT u.password FROM User u WHERE u.userName = :userName")
    String findPasswordByUserName(@Param("userName") String userName);

    @Query("SELECT u.userRole FROM User u WHERE u.userName = :userName")
    String findUserRoleByUserName(@Param("userName") String userName);

}
