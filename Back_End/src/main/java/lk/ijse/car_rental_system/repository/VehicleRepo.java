package lk.ijse.car_rental_system.repository;

import lk.ijse.car_rental_system.entity.Vehicle;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VehicleRepo extends JpaRepository<Vehicle, String> {
    @Query("SELECT v.vehicleId FROM Vehicle v")
    List<String> findVehicleIdsOnly();

    Vehicle findByVehicleId(String vehicleId);

    List<Vehicle> findAll(Sort sort);

    @Modifying
    @Query("UPDATE Vehicle v SET v.qty = v.qty - :newQuantity WHERE v.vehicleId = :vehicleId")
    void updateQuantity(@Param("vehicleId") String vehicleId, @Param("newQuantity") int newQuantity);
}
