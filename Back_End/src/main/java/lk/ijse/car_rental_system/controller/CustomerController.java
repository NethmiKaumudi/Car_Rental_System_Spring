package lk.ijse.car_rental_system.controller;

import lk.ijse.car_rental_system.dto.CustomerDTO;
import lk.ijse.car_rental_system.service.CustomerService;
import lk.ijse.car_rental_system.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {
    @Autowired
    CustomerService customerService;

    @PostMapping
    public ResponseUtil addCustomer(@RequestBody CustomerDTO dto) {
        customerService.addCustomer(dto);
        return new ResponseUtil("Ok", "Successfully Added Customer", dto);
    }
}
