package lk.ijse.car_rental_system.controller;

import lk.ijse.car_rental_system.dto.UserDTO;
import lk.ijse.car_rental_system.service.UserService;
import lk.ijse.car_rental_system.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping
    public ResponseUtil addCustomer(UserDTO dto){
        userService.addUser(dto);
        return new ResponseUtil("Ok","Successfully Added",dto);
    }

}
