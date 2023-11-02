package lk.ijse.car_rental_system.controller;

import lk.ijse.car_rental_system.dto.DriverDTO;
import lk.ijse.car_rental_system.entity.Driver;
import lk.ijse.car_rental_system.service.DriverService;
import lk.ijse.car_rental_system.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/driver")
@CrossOrigin
public class DriverController {
    @Autowired
    DriverService driverService;

    @PostMapping
    public ResponseUtil registerDriver(@RequestBody DriverDTO dto) {
        driverService.addDriver(dto);
        return new ResponseUtil("Ok", "Successfully Added Driver", dto);
    }

    @GetMapping
    public ResponseUtil getAllDrivers() {
        return new ResponseUtil("Ok", "Successfully Loaded", driverService.getAllDriver());
    }

    @DeleteMapping(params = {"driverId"})
    public ResponseUtil deleteDriver(@RequestParam String driverId) {
        driverService.deleteDriver(driverId);
        return new ResponseUtil("Ok", "Successfully Deleted", driverId);
    }

    @GetMapping(params = {"id"})
    public ResponseUtil findDriver(@RequestParam String id) {
        return new ResponseUtil("Ok", "Successfull", driverService.findDriver(id));
    }

    @PutMapping
    public ResponseUtil updateDriver(@RequestBody DriverDTO dto) {
        driverService.updateDriver(dto);
        return new ResponseUtil("Ok", "Successfully Updated", dto);
    }

    @GetMapping("/available")
    public List<Driver> getAvailableDrivers() {
        return driverService.findAvailableDrivers();
    }
}
