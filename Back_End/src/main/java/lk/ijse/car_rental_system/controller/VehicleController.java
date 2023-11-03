package lk.ijse.car_rental_system.controller;


import lk.ijse.car_rental_system.dto.VehicleDTO;
import lk.ijse.car_rental_system.service.VehicleService;
import lk.ijse.car_rental_system.util.ResponseUtil;
import lk.ijse.car_rental_system.util.SortingOptions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/vehicle")
@CrossOrigin
public class VehicleController {
    private static final Logger logger = LoggerFactory.getLogger(VehicleController.class);

    @Autowired
    VehicleService vehicleService;


    @PostMapping
    public ResponseUtil registerVehicle(@RequestBody VehicleDTO dto) {
        vehicleService.addVehicle(dto);
        return new ResponseUtil("Ok", "Successfully Added Vehicle", dto);
    }

    @GetMapping
    public ResponseUtil getAllVehicles() {
        return new ResponseUtil("Ok", "Successfully Loaded", vehicleService.getAllVehicle());
    }

    @DeleteMapping
    public ResponseUtil deleteVehicles(@RequestParam String id) {
        vehicleService.deleteVehicle(id);
        return new ResponseUtil("Ok", "Successfully Deleted", id);
    }

    @GetMapping(params = {"id"})
    public ResponseUtil findVehicle(@RequestParam String id) {
        return new ResponseUtil("Ok", "Successfully Loaded", vehicleService.findVehicle(id));
    }


    @PutMapping
    public ResponseUtil updateDriver(@RequestBody VehicleDTO dto) {
        vehicleService.updateVehicle(dto);
        return new ResponseUtil("Ok", "Successfully Updated", dto);
    }

    @GetMapping("/getVehicleIds")
    public ResponseEntity<List<String>> getCustomerIds() {
        List<String> vehicleIds = vehicleService.getVehicleIds();
        return ResponseEntity.ok(vehicleIds);
    }


    @GetMapping("/vehicle-detail")
    public ResponseEntity<?> getVehicleDetails(@RequestParam String vehicleId, @RequestParam String rateDuration) {
        logger.info("Received request for vehicle details with vehicleId: {} and rateDuration: {}", vehicleId, rateDuration);

        VehicleDTO vehicleDTO = vehicleService.getVehicleDetails(vehicleId, rateDuration);

        if (vehicleDTO != null) {
            logger.info("Returning vehicle details: {}", vehicleDTO);
            return ResponseEntity.ok(vehicleDTO);
        } else {
            logger.warn("Vehicle not found for vehicleId: {} and rateDuration: {}", vehicleId, rateDuration);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Vehicle not found");
        }
    }

    @GetMapping("/sort")
    public ResponseEntity<List<VehicleDTO>> sortVehicles(@RequestParam String sortOption) {
        try {
            SortingOptions sortingOption = SortingOptions.valueOf(sortOption);
            logger.info("Received sort request with sortOption: " + sortingOption);
            List<VehicleDTO> sortedVehicles = vehicleService.sortVehicles(sortingOption);
            logger.info("Returning sorted vehicles: " + sortedVehicles);
            return ResponseEntity.ok(sortedVehicles);
        } catch (IllegalArgumentException e) {
            logger.error("Invalid sortOption: " + sortOption);
            return ResponseEntity.badRequest().body(Collections.emptyList());
        }
    }

//    @PostMapping("/update-quantity")
//    @ResponseBody
//    public String updateVehicleQuantity(@RequestParam String vehicleId, @RequestParam int quantity) {
//        try {
//            vehicleService.updateVehicleQuantity(vehicleId, quantity);
//            return "Vehicle quantity updated successfully.";
//        } catch (Exception e) {
//            return "Failed to update vehicle quantity: " + e.getMessage();
//        }
//    }

}
