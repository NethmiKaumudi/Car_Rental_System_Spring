package lk.ijse.car_rental_system.service.impl;

import lk.ijse.car_rental_system.dto.DriverDTO;
import lk.ijse.car_rental_system.entity.Driver;
import lk.ijse.car_rental_system.repository.DriverRepo;
import lk.ijse.car_rental_system.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {
    @Autowired
    DriverRepo driverRepo;
    @Autowired
    ModelMapper mapper;

    @Override
    public void addDriver(DriverDTO dto) {
        if (driverRepo.existsById(dto.getDriverId())) {
            throw new RuntimeException(dto.getDriverId() + "is already available, please insert a new ID");
        }
        Driver map = mapper.map(dto, Driver.class);
        driverRepo.save(map);
    }

    @Override
    public void deleteDriver(String id) {
        if (!driverRepo.existsById(id)) {
            throw new RuntimeException(id + "is not exist,please check the id before deleted");
        }
        driverRepo.deleteById(id);
    }

    @Override
    public List<DriverDTO> getAllDriver() {
        List<Driver> all = driverRepo.findAll();
        return mapper.map(all, new TypeToken<List<DriverDTO>>() {
        }.getType());

    }

    @Override
    public DriverDTO findDriver(String id) {
        if (!driverRepo.existsById(id)) {
            throw new RuntimeException(id + "is not exist,please check the id ..........");
        }
        Driver driver = driverRepo.findById(id).get();
        return mapper.map(driver, DriverDTO.class);
    }

    @Override
    public void updateDriver(DriverDTO c) {
        if (!driverRepo.existsById(c.getDriverId())) {
            throw new RuntimeException(c.getDriverId() + "is not exist,please check the id before updated");
        }
        Driver map = mapper.map(c, Driver.class);
        driverRepo.save(map);
    }

    public List<Driver> findAvailableDrivers() {
        return driverRepo.findByDriverStatus("Available");
    }


}
