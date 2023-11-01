package lk.ijse.car_rental_system.controller;

import lk.ijse.car_rental_system.dto.CustomerDTO;
import lk.ijse.car_rental_system.service.CustomerService;
import lk.ijse.car_rental_system.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {
    @Autowired
    CustomerService customerService;

    @PostMapping
//    public ResponseUtil addCustomer(@RequestBody CustomerDTO dto) {
//        customerService.addCustomer(dto);
//        return new ResponseUtil("Ok", "Successfully Added Customer", dto);
//    }
    public ResponseUtil addCustomer(@RequestBody CustomerDTO dto) {
        try {
            customerService.addCustomer(dto);
            return new ResponseUtil("Ok", "Successfully Added Customer", dto);
        } catch (Exception e) {
            // Handle the exception, log the error, or return an error response
            return new ResponseUtil("Error", "Failed to add customer: " + e.getMessage(), null);
        }
    }

    @GetMapping("/getCustomerIds")
    public ResponseEntity<List<String>> getCustomerIds() {
        List<String> customerIds = customerService.getCustomerIds();
        return ResponseEntity.ok(customerIds);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomerDTO> getCustomerDetails(@PathVariable String id) {
        CustomerDTO customerDTO = customerService.getCustomerDetailsById(id);
        if (customerDTO != null) {
            return new ResponseEntity<>(customerDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/generate-next-customer-id")
    public String generateNextCustomerId() {
        return customerService.generateNextCustomerId();
    }
}
