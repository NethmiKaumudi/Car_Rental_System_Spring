package lk.ijse.car_rental_system.service.impl;

import lk.ijse.car_rental_system.dto.VehicleDTO;
import lk.ijse.car_rental_system.entity.Vehicle;
import lk.ijse.car_rental_system.repository.VehicleRepo;
import lk.ijse.car_rental_system.service.VehicleService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class VehicleServiceImpl implements VehicleService {
    @Autowired
    VehicleRepo vehicleRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void addVehicle(VehicleDTO dto) {
        if (vehicleRepo.existsById(dto.getVehicleId())) {
            throw new RuntimeException(dto.getVehicleId() + "is already available, please insert a new ID");
        }
        Vehicle map = mapper.map(dto, Vehicle.class);
        vehicleRepo.save(map);
    }

    @Override
    public void deleteVehicle(String id) {
        if (!vehicleRepo.existsById(id)) {
            throw new RuntimeException(id + "is not exist,please check the id before deleted");
        }
        vehicleRepo.deleteById(id);
    }

    @Override
    public List<VehicleDTO> getAllVehicle() {
        List<Vehicle> all = vehicleRepo.findAll();
        return mapper.map(all, new TypeToken<List<VehicleDTO>>() {
        }.getType());
    }

    @Override
    public VehicleDTO findVehicle(String id) {
        if (!vehicleRepo.existsById(id)) {
            throw new RuntimeException(id + "is not exist,please check the id ..........");
        }
        Vehicle vehicle = vehicleRepo.findById(id).get();
        return mapper.map(vehicle, VehicleDTO.class);
    }

    @Override
    public void updateVehicle(VehicleDTO dto) {
        if (!vehicleRepo.existsById(dto.getVehicleId())) {
            throw new RuntimeException(dto.getVehicleId() + "is not exist,please check the id before updated");
        }
        Vehicle map = mapper.map(dto, Vehicle.class);
        vehicleRepo.save(map);
    }

    @Override
    public List<String> getVehicleIds() {
        return vehicleRepo.findVehicleIdsOnly();
    }

    @Override
    public VehicleDTO getVehicleDetails(String vehicleId, String rateDuration) {
        Vehicle vehicle = vehicleRepo.findByVehicleId(vehicleId);

        if (vehicle == null) {
            return null; // Handle the case where the vehicle is not found
        }

        VehicleDTO vehicleDTO = new VehicleDTO();

        if ("Daily".equals(rateDuration)) {
            vehicleDTO.setDailyRate(vehicle.getDailyRate());
            vehicleDTO.setFreeKmADay(vehicle.getFreeKmADay());
        } else if ("Monthly".equals(rateDuration)) {
            vehicleDTO.setMonthlyRate(vehicle.getMonthlyRate());
            vehicleDTO.setFreeKmAMonth(vehicle.getFreeKmAMonth());
        }

        vehicleDTO.setPriceExtraKm(vehicle.getPriceExtraKm());

        return vehicleDTO;
    }
}
