package lk.ijse.car_rental_system.service;

import lk.ijse.car_rental_system.dto.VehicleDTO;

import java.util.List;

public interface VehicleService {
    void addVehicle(VehicleDTO dto);

    void deleteVehicle(String id);

    List<VehicleDTO> getAllVehicle();

    VehicleDTO findVehicle(String id);

    void updateVehicle(VehicleDTO dto);

    List<String> getVehicleIds();

    VehicleDTO getVehicleDetails(String vehicleId, String rateDuration);

}
