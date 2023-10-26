package lk.ijse.car_rental_system.controller;

import lk.ijse.car_rental_system.dto.UserDTO;
import lk.ijse.car_rental_system.service.UserService;
import lk.ijse.car_rental_system.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/signUp")
    public ResponseUtil addCustomer(UserDTO dto){
        userService.addUser(dto);
        return new ResponseUtil("Ok","Successfully Added",dto);
    }
    @PostMapping("/login") // Endpoint for user login
    public ResponseUtil login(@RequestBody UserDTO userDTO) {
        UserDTO user = userService.login(userDTO);
        if (user != null) {
            return new ResponseUtil("Ok", "Login Successful", user);
        } else {
            return new ResponseUtil("Error", "Invalid credentials", null);
        }
    }

}
