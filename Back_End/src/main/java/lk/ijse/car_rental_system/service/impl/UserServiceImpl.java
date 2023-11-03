package lk.ijse.car_rental_system.service.impl;

import lk.ijse.car_rental_system.dto.PasswordResetForm;
import lk.ijse.car_rental_system.dto.UserDTO;
import lk.ijse.car_rental_system.entity.PassWordResetToken;
import lk.ijse.car_rental_system.entity.User;
import lk.ijse.car_rental_system.repository.UserRepo;
import lk.ijse.car_rental_system.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepo userRepo;

    @Autowired
    ModelMapper mapper;
    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    @Override
    public void addUser(UserDTO dto) {
//        if (userRepo.existsById(dto.getUserId())) {
//            throw new RuntimeException(dto.getUserId() + "is already available, please insert a new ID");
//        }
//        User map = mapper.map(dto, User.class);
//        userRepo.save(map);
        if (userRepo.existsById(dto.getUserId())) {
            throw new RuntimeException(dto.getUserId() + " is already available, please insert a new ID");
        }
        // Hash the user's password before saving
        String hashedPassword = passwordEncoder.encode(dto.getPassword());
        dto.setPassword(hashedPassword);

        User user = mapper.map(dto, User.class);
        userRepo.save(user);
    }

    //    @Override
//    public UserDTO login(UserDTO userDTO) {
//        User user = userRepo.findByUserName(userDTO.getUserName());
//        if (user != null && passwordEncoder.matches(userDTO.getPassword(), user.getPassword())) {
//            return mapper.map(user, UserDTO.class);
//        }
//        return null;
//    }
//    public UserDTO login(UserDTO userDTO) {
//        String userName = userDTO.getUserName().trim(); // Debug log
//        User user = userRepo.findByUserName(userName); // Debug log
//        if (user != null && passwordEncoder.matches(userDTO.getPassword(), user.getPassword())) {
//            return mapper.map(user, UserDTO.class);
//        }
//        return null;
//    }
//    public User findUserByUserName(String userName) {
//        return userRepo.findByUserName(userName);
//    }
    public String findPasswordByUsername(String userName) {
        return userRepo.findPasswordByUserName(userName);
    }

    public String findUserRoleByUsername(String userName) {
        return userRepo.findUserRoleByUserName(userName);
    }

    public User findByEmail(String email) {
        return userRepo.findByEmail(email);
    }

    public boolean resetPassword(PasswordResetForm form) {
        String email = form.getEmail();
        String token = form.getToken();
        String newPassword = form.getNewPassword();

        User user = userRepo.findByEmail(email);

        if (user != null) {
            PassWordResetToken resetToken = user.getResetToken();

            if (resetToken != null && resetToken.getToken().equals(token) && !resetToken.isTokenExpired()) {
                // Update the user's password with the new one (newPassword)
                user.setPassword(newPassword);
                userRepo.save(user);
                return true; // Password reset successful
            }
        }

        return false; // Password reset failed
    }

}
