package lk.ijse.car_rental_system.repository;

import lk.ijse.car_rental_system.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepo extends JpaRepository<Vehicle, String> {
}
