package lk.ijse.car_rental_system.repository;

import lk.ijse.car_rental_system.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface DriverRepo extends JpaRepository<Driver, String> {
    List<Driver> findByDriverStatus(String status);

    Driver findByDriverId(String driverId);

    @Modifying
    @Transactional
    @Query("UPDATE Driver d SET d.driverStatus = :newStatus WHERE d.driverId = :driverId")
    void updateStatus(@Param("driverId") String driverId, @Param("newStatus") String newStatus);
}
