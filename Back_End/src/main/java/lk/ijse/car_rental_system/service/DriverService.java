package lk.ijse.car_rental_system.service;

import lk.ijse.car_rental_system.dto.DriverDTO;
import lk.ijse.car_rental_system.entity.Driver;

import java.util.List;

public interface DriverService {
    public void addDriver(DriverDTO dto);

    public void deleteDriver(String id);

    public List<DriverDTO> getAllDriver();

    public DriverDTO findDriver(String id);

    public void updateDriver(DriverDTO dto);

    public List<Driver> findAvailableDrivers();
    public void updateDriverStatus(String driverId, String newStatus) ;

}
