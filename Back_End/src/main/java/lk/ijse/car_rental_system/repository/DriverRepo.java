package lk.ijse.car_rental_system.repository;

import lk.ijse.car_rental_system.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DriverRepo extends JpaRepository<Driver, String> {
    List<Driver> findByDriverStatus(String status);

    Driver findByDriverId(String driverId);

}
