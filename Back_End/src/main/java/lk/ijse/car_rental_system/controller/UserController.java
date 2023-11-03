package lk.ijse.car_rental_system.controller;

import lk.ijse.car_rental_system.dto.UserDTO;
import lk.ijse.car_rental_system.service.UserService;
import lk.ijse.car_rental_system.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    @Autowired
    UserService userService;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signUp")
    public ResponseUtil addUser(@RequestBody UserDTO dto) {
        userService.addUser(dto);
        return new ResponseUtil("Ok", "Successfully Added", dto);
    }


    //    @PostMapping("/login")
//    public ResponseUtil login(@RequestBody UserDTO userDTO) {
//
//        logger.debug("Received userName: " + userDTO.getUserName());
//        logger.debug("Received password: " + userDTO.getPassword());
//
//        User user = userService.findUserByUserName(userDTO.getUserName().trim());
//
//        if (user != null && passwordEncoder.matches(userDTO.getPassword(), user.getPassword())) {
//            String userRole = user.getUserRole();
//            return new ResponseUtil("Ok", "Login Successful", userRole);
//        }
//
//        return new ResponseUtil("Error", "Invalid credentials", null);
//    }
    @PostMapping("/login")
    public ResponseUtil login(@RequestBody UserDTO userDTO) {
        String userName = userDTO.getUserName().trim(); // Trim and convert to lowercase
        String password = userService.findPasswordByUsername(userName);
        String userRole = userService.findUserRoleByUsername(userName);
        if (password != null && passwordEncoder.matches(userDTO.getPassword(), password)) {
            System.out.println("Password matched. User role: " + userRole);

            // Return a success response with user data
//            UserDTO user = new UserDTO();
            userDTO.setUserName(userName);
            userDTO.setUserRole(userRole);
            return new ResponseUtil("Ok", "Login Successful", userDTO);
        } else {
            // Password didn't match or user not found
            return new ResponseUtil("Error", "Invalid credentials", null);
        }
    }


}
