package lk.ijse.car_rental_system.repository;

import lk.ijse.car_rental_system.entity.Vehicle;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface VehicleRepo extends JpaRepository<Vehicle, String> {
    // Custom query to retrieve vehicle IDs only
    @Query("SELECT v.vehicleId FROM Vehicle v")
    List<String> findVehicleIdsOnly();

    Vehicle findByVehicleId(String vehicleId);

    List<Vehicle> findAll(Sort sort);


}
